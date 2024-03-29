export const AddItemToCart = (cartItems, cartItemToAdd) => {
    const existing = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id    
    );

    if(existing) {
       return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ?
            {...cartItem, quantity: cartItem.quantity + 1 }
            :
            cartItem    
        );
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const DecreaseQantity = (cartItems, cartItemToRemove) => {
    const existing = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id    
    );

    if(existing.quantity !== 1) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToRemove.id ?
            {...cartItem, quantity: cartItem.quantity -1}
            : cartItem
        )
    }
    else{
        return cartItems;
    }
}