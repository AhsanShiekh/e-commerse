import React from 'react';
import './checkout.styles.scss'
import { connect } from "react-redux";
import { SelectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeButton from '../../components/stripe-button/stripe-button';


const CheckoutPage = ({cartItems, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>

        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))
        }

        <div className="total">
            <span>TOTAL: ${total}</span>
        </div>

        {
            cartItems.length ?
        <div className="test-warning">
            *PLEASE USE THE FOLLOWING TEST INFO FOR PAYMENTS*
            <br/>
            CREDIT CARD: 4242 4242 4242 4242
            <br/>
            DATE: 01/21
            <br/>
            CVV: 123
            <br/>
            <StripeButton price={total}/>
        </div>
        :
        null
        }
    </div>
)

const mapStateToProps = state => ({
    cartItems: SelectCartItems(state),
    total: selectCartTotal(state)
});


export default connect(mapStateToProps)(CheckoutPage);