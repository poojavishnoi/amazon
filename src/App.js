import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from './components/Checkout'
import Login from './components/Login'
import { useEffect } from "react";
import { useStateValue } from "./components/StateProvider";
import { auth } from "./firebase";

function App() {

  const [{user}, dispatch ] = useStateValue();

  useEffect(()=>{

    auth.onAuthStateChanged ((authUser) => {
      console.log("The User is >>>", authUser);
    
      if (authUser){
        dispatch({
          type:"SET_USER",
          user: authUser,
        });

      }else{
          dispatch({
            type: "SET_USER",
            user: null,
          });
      }
    })
    
  },[])
  

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
