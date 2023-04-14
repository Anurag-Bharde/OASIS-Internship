import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllPizzaReducer } from './Reducers/pizzaReducer';
import { cartReducer } from './Reducers/cartReducer';
import { RegisterUserReducer,loginUserReducer } from './Reducers/userReducer';
import { placeOrderReducer } from './Reducers/orderReducer';

let currentUser =[];


try {
  cartItems = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')):[];
} catch (e) {
  console.log('Error parsing JSON: ', e);
}


const rootReducer = combineReducers({
  getAllPizzaReducer: getAllPizzaReducer,
  cartReducer:cartReducer,
  RegisterUserReducer:RegisterUserReducer,
  loginUserReducer:loginUserReducer,
  placeOrderReducer:placeOrderReducer
});


let cartItems = [];

try {
  cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
} catch (e) {
  console.log('Error parsing JSON: ', e);
}

const initialState = {
  cartReducer: {
    cartItems,
  },  

  loginUserReducer:{
    currentUser,
  }
};
const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  initialState,
  devTools: process.env.NODE_ENV !== 'production',
  middleware,
});


export default store;
