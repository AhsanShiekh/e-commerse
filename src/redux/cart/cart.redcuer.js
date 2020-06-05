import { AddItemToCart, DecreaseQantity } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOGGLE_CART_DROPDOWN':
            return {
                ...state,
                hidden: !state.hidden
            }

        case 'ADD_ITEM':
            return {
                ...state,
                cartItems: AddItemToCart(state.cartItems, action.payload)
            }

        case 'REMOVE_ITEM': 
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
    
        case 'DECREASE_QUANTITY': 
            return {
                ...state,
                cartItems: DecreaseQantity(state.cartItems, action.payload)
            }
        
        default:
            return state;
    }
}

export default CartReducer;