import React from 'react';
import  FormButton from "../form-button/form-button.component";
import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items"></div>
        <FormButton>GO TO CHECKOUT</FormButton>
    </div>
)

export default CartDropdown;