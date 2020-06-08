export const toggleCartHidden = () => ({
    type: 'TOGGLE_CART_DROPDOWN'
});

export const AddItem = item => ({
    type: 'ADD_ITEM',
    payload: item
})

export const RemoveItem = item => ({
    type: 'REMOVE_ITEM',
    payload: item
})

export const DecreaseQuantity = (item) => ({
    type: 'DECREASE_QUANTITY',
    payload: item
})

export const ClearCart = () => ({
    type: 'CLEAR_CART'
})