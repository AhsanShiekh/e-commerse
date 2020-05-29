import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shopPage/ShopPage.component';
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.compnent";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
