import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import RegisterReducer from './reducer/RegisterReducer';
import OTPReducer from './reducer/OTPReducer';
import LoginReducer from './reducer/LoginReducer';

const rootReduce = combineReducers({
  RegisterReducer,
  OTPReducer,
  LoginReducer,
});

export const Store = createStore(rootReduce, applyMiddleware(thunk));
