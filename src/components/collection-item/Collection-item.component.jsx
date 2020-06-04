import React from 'react';
import './collection-item.styles.scss';
import  FormButton from "../form-button/form-button.component";
import { connect } from "react-redux";
import { AddItem } from "../../redux/cart/cart.action";

const CollectionItem = ({item, addItem }) => {
    return(
    <div className="collection-item">
        <div className="image" 
        style={{
            backgroundImage: `url(${item.imageUrl})`
        }}
        />

        <div className="collection-footer">
            <span className="name">{item.name}</span>
            <span className="price">{`$${item.price}`}</span>
        </div>
        <FormButton inverted onClick={() => addItem(item)}>ADD TO CART</FormButton>
    </div>
)
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(AddItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);