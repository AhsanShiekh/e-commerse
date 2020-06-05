import React from 'react';
import './checkout-item.styles.scss';
import { connect } from "react-redux";
import { RemoveItem, DecreaseQuantity, AddItem } from "../../redux/cart/cart.action";

const CheckoutItem = ({cartItem, RemoveItem, DecreaseQuantity, AddItem}) => {
     
    const {name, imageUrl, price, quantity} = cartItem;
    
    return(
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item"/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => DecreaseQuantity(cartItem)}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className="arrow" onClick={() => AddItem(cartItem)}>&#10095;</div>
        </span>
        <span className="price">${price}</span>
        <div className="remove-button" onClick={() => RemoveItem(cartItem)}>&#10005;</div>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    RemoveItem: item => dispatch(RemoveItem(item)),
    DecreaseQuantity: item => dispatch(DecreaseQuantity(item)),
    AddItem: item => dispatch(AddItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);