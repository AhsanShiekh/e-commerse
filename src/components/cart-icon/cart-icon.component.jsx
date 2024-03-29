import React from 'react';
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg.svg";
import './cart-icon.styles.scss';
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { SelectCartItemsCount } from "../../redux/cart/cart.selectors";


const CartIcon = ({ toggleCartHidden, cartLength }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className="item-count">{cartLength}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()) 
})

const mapStateToProps = (state) => ({
    cartLength: SelectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);