import {
  FORGOT_PASSWORD_FAUILER,
  FORGOT_PASSWORD_LOADING,
  FORGOT_PASSWORD_REMOVE,
  FORGOT_PASSWORD_SUCCESS,
} from '../../constants/actionTypes';

const initialState = {
  data: {},
  error: null,
  loading: false,
};

const ForgotPasswordReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FORGOT_PASSWORD_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    case FORGOT_PASSWORD_FAUILER:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case FORGOT_PASSWORD_REMOVE:
      return {
        ...state,
        data: {},
        error: null,
        loading: false,
      };
    default:
      return state;
  }
};
export default ForgotPasswordReducer;
