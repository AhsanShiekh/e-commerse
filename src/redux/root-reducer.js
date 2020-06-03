import { combineReducers } from "redux";
import userReducer from './user/user.reducer';
import CartReducer from './cart/cart.redcuer';

export const rootReducer = combineReducers({
    user: userReducer,
    cart: CartReducer
})