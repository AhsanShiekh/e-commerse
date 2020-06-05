import React from 'react';
import  FormButton from "../form-button/form-button.component";
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { connect } from "react-redux";
import { SelectCartItems } from "../../redux/cart/cart.selectors";

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            
        {
            cartItems.map(cartItem => {
                return (
                    <CartItem key={cartItem.id} item={cartItem}/>
            )})
        }

        </div>

        <FormButton inverted>GO TO CHECKOUT</FormButton>
    </div>
)

const mapStateToProps = state => ({
    cartItems: SelectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);