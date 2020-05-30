import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shopPage/ShopPage.component';
import SignInAndSignOut from './pages/SignIn-and-SignOut-page/SignIn-and-SignOut-page.component';
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.compnent";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' component={SignInAndSignOut}/>
        </Switch>
      </div>
      );
  }
}

export default App;
