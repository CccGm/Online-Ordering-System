import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import loginReducer from '../redux/loginReducer';

const rootReduce = combineReducers({
  loginReducer,
});

export const Store = createStore(rootReduce, applyMiddleware(thunk));
