import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './Reducers/Product';
import cartReducer from './Reducers/Cart'
// import categoryReducer from './Reducers/Categories'

let reducers = combineReducers({
  productReducer: productReducer,
  // categoryReducer: categoryReducer,
  cartReducer: cartReducer,
});

export default function store(){
  return createStore(reducers, composeWithDevTools())
}