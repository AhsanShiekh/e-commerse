import React from 'react';
import  FormButton from "../form-button/form-button.component";
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { connect } from "react-redux";
import { SelectCartItems } from "../../redux/cart/cart.selectors";
import { Link } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartDropdown = ({cartItems, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            
        {
            cartItems.length ?
            cartItems.map(cartItem => {
                return (
                    <CartItem key={cartItem.id} item={cartItem}/>
            )})
            :
            <span className="error-message">YOUR CART IS EMPTY!</span>
        }

        </div>
        <Link to='/checkout'>
            <FormButton inverted onClick={() => dispatch(toggleCartHidden())}>GO TO CHECKOUT</FormButton>
        </Link>
    </div>
)

const mapStateToProps = state => ({
    cartItems: SelectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);