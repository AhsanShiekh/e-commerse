import { combineReducers } from "redux";
import userReducer from './user/user.reducer';
import CartReducer from './cart/cart.redcuer';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: CartReducer
})
 
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;