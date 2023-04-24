import React from 'react';
import Header from './header.js'
import Home from "./home.js"
import Checkout from './checkout.js';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";





function App() {
  return (

    <Router>
      
        
        <div className='app'>
<Switch>
<Route path="/checkout">
        <Header />
        <Checkout />
      </Route>

      <Route path="/">
        <Header />
        <Home />
      </Route>  
     
</Switch>
         </div>
</Router>        
  );
}

export default App;
