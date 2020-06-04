import React from 'react';
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg.svg";
import './cart-icon.styles.scss';
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";


const CartIcon = ({ toggleCartHidden, cartLength }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className="item-count">{cartLength.length}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()) 
})

const mapStateToProps = state => ({
    cartLength: state.cart.cartItems
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);