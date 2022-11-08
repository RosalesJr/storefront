import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './Product';

let reducers = combineReducers({
  productReducer: productReducer,

});

export default function store(){
  return createStore(reducers, composeWithDevTools())
}