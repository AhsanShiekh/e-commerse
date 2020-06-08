import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shopPage/ShopPage.component';
import SignInAndSignOut from './pages/SignIn-and-SignOut-page/SignIn-and-SignOut-page.component';
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header/header.compnent";
import { auth, createUserProfileDoc } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { SelectCurrentUser } from "./redux/user/user.selectors";
import CheckoutPage from './pages/checkoutPage/checkout-page.component';
import { ClearCart } from './redux/cart/cart.action';

class App extends React.Component {


  unSubscribeFromAuth = null;

  componentDidMount() {

    
   const { setCurrentUser, clearCart } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if(user) {
      const userRef = await createUserProfileDoc(user);

      userRef.onSnapshot(snapShot => {
        setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
        })
      })
      }
      else{
        setCurrentUser(user)
        clearCart()
      }
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact path='/signin' 
          render={() => 
          this.props.currentUser ? (
          <Redirect to='/'/>
          ) : (
          <SignInAndSignOut/>
          )}/>
        </Switch>
      </div>
      );
  }
}

const mapStateToProps = (state) => ({
  currentUser: SelectCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  clearCart: () => dispatch(ClearCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
