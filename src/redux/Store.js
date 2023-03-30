import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import RegisterReducer from './reducer/RegisterReducer';
import OTPReducer from './reducer/OTPReducer';
import LoginReducer from './reducer/LoginReducer';
import ProductDataReducer from './reducer/ProductDataReducer';
import AddProductReducer from './reducer/CartActions/AddProductReducer';
import RemoveProductReducer from './reducer/CartActions/RemoveProductReducer';
import IncreaseProductReducer from './reducer/CartActions/IncreaseProduct';
import DecreaseProductReducer from './reducer/CartActions/DecreaseProduct';
import GetCartReducer from './reducer/CartActions/GetCartReducer';

const rootReduce = combineReducers({
  RegisterReducer,
  OTPReducer,
  LoginReducer,
  ProductDataReducer,
  AddProductReducer,
  RemoveProductReducer,
  DecreaseProductReducer,
  IncreaseProductReducer,
  GetCartReducer,
});

export const Store = createStore(rootReduce, applyMiddleware(thunk));
