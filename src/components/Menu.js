import React,{useState} from 'react';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import './Menu.css'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'

function MenuBar(){
  const [nameList, setNameList] = useState([]);

  const url = 'https://api.rainforestapi.com/categories?api_key=61D5823CAEE74D2A9B447FEDEFFE8DF0&amazon_domain=amazon.com'

  function getCategories(){
    console.log('c')
    fetch(url)
    .then(resp => {
      return resp.json()})
    .then(data => {
      let arr = [];
      for(let i=0 ; i< data.categories.length; i++){
        console.log(data.categories[i].name);
        arr.push(data.categories[i].name);
      }
      console.log(arr)
      setNameList(arr)
      console.log(nameList)
    })

  }
  return (
    <div className='Menu'>
    <PopupState variant="popover" popupId="demo-popup-menu">
    {(popupState) => (
      <React.Fragment>
        <Button onClick={getCategories()} variant="contained" {...bindTrigger(popupState)}>
          <MenuIcon/>
        </Button>
        <Menu {...bindMenu(popupState)}>
        {nameList.map(name => {
          return (
                <MenuItem onClick={popupState.close}>{name}</MenuItem>
              )
            }
            )
          }
        
        </Menu>
      </React.Fragment>
    )}
    </PopupState>
    </div>
  )
}

export default MenuBar;

