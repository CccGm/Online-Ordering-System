import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import RegisterReducer from './reducer/RegisterReducer';
import OTPReducer from './reducer/OTPReducer';
import LoginReducer from './reducer/LoginReducer';
import GetProductReducer from './reducer/GetProductReducer';
import AddProductReducer from './reducer/Cart_Reducer/AddProductReducer';
import RemoveProductReducer from './reducer/Cart_Reducer/RemoveProductReducer';
import IncreaseProductReducer from './reducer/Cart_Reducer/IncreaseProductReducer';
import DecreaseProductReducer from './reducer/Cart_Reducer/DecreaseProductReducer';
import GetCartReducer from './reducer/Cart_Reducer/GetCartReducer';
import AddFavoriteReducer from './reducer/Favorite_Reducer/AddFavoriteReducer';
import RemoveFavoriteReducer from './reducer/Favorite_Reducer/RemoveFavoriteReducer';
import GetFavoriteReducer from './reducer/Favorite_Reducer/GetFavoriteReducer';
import UserDataReducer from './reducer/UserDataReducer';
import CheckOutReducer from './reducer/CheckOutReducer';
import GetHistoryDataReducer from './reducer/GetHistoryDataReducer';
import ForgotPasswordReducer from './reducer/ForgotPasswordReducer';
import OTPForgotPassword from './reducer/OTPForgotPassword';
const rootReduce = combineReducers({
  RegisterReducer,
  OTPReducer,
  LoginReducer,
  GetProductReducer,
  AddProductReducer,
  RemoveProductReducer,
  DecreaseProductReducer,
  IncreaseProductReducer,
  GetCartReducer,
  AddFavoriteReducer,
  RemoveFavoriteReducer,
  GetFavoriteReducer,
  UserDataReducer,
  CheckOutReducer,
  GetHistoryDataReducer,
  ForgotPasswordReducer,
  OTPForgotPassword,
});

export const Store = createStore(rootReduce, applyMiddleware(thunk));
