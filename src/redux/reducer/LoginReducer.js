import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAUILER,
  LOGIN_STATE_RESTORE_REQUEST,
  LOGIN_STATE_RESTORE,
  LOGOUT_Status,
} from '../../constants/actionTypes';

const initialState = {
  data: {},
  error: null,
  loading: false,
  isLogin: false,
};

const LoginReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case LOGIN_LOADING:
      return {...state, loading: true};
    case LOGIN_FAUILER:
      return {...state, loading: false, isLogin: false, error: payload};
    case LOGIN_SUCCESS:
      return {...state, isLogin: true, loading: false, data: payload};
    case LOGIN_STATE_RESTORE_REQUEST:
      return {loading: true, isLogin: false};
    case LOGIN_STATE_RESTORE:
      return {isLogin: payload, loading: false};
    case LOGOUT_Status:
      return {...state, isLogin: false, loading: false, data: {}};

    default:
      return state;
  }
};
export default LoginReducer;
