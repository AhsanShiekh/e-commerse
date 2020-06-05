import { createSelector } from "reselect";


const SelectCart = state => state.cart;

export const SelectCartItems = createSelector(
    [SelectCart],
    cart => cart.cartItems
);

export const SelectCartItemsCount = createSelector(
    [SelectCartItems],
    cartItems => cartItems.reduce((accmulatedValue, cartItem) => accmulatedValue + cartItem.quantity, 0)
);