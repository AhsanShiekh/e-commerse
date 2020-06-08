import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ReactComponent as Logo } from "../../assets/crown.svg.svg";
import './header.styles.scss';
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { SelectCurrentUser } from "../../redux/user/user.selectors";

const Header = ({ currentUser, hidden,}) => (
    <div className="header">
       {
        currentUser ?
        <Link className="logo-container" to='/'>
            <Logo className='logo'/>
        </Link>
        :
        <div className="logo-container" to='/'>
            <Logo className='logo'/>
        </div>
        }


        { currentUser ? 
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
                <div className="option" onClick={() => {
                    auth.signOut()
                    }}>SIGN OUT</div>
            <CartIcon />
        </div>
        :
        <Redirect to='/signin'/>
        }


        { !hidden ?
            <CartDropdown />
          : null
        }
    </div>
)

const mapStateToProps = state => ({
    currentUser: SelectCurrentUser(state),
    hidden: selectCartHidden(state)
})

export default connect(mapStateToProps)(Header);