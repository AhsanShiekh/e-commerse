export const toggleCartHidden = () => ({
    type: 'TOGGLE_CART_DROPDOWN'
});

export const AddItem = item => ({
    type: 'ADD_ITEM',
    payload: item
})