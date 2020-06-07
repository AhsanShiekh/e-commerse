import { combineReducers } from "redux";
import userReducer from './user/user.reducer';
import CartReducer from './cart/cart.redcuer';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: CartReducer,
    directory: directoryReducer,
    shop: shopReducer
})
 
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;