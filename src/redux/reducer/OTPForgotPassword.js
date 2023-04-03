import {
  OTP_FORGOT_PASSWORD_FAUILER,
  OTP_FORGOT_PASSWORD_LOADING,
  OTP_FORGOT_PASSWORD_REMOVE,
  OTP_FORGOT_PASSWORD_SUCCESS,
} from '../../constants/actionTypes';

const initialState = {
  data: {},
  error: null,
  loading: false,
};

const OTPForgotPassword = (state = initialState, {type, payload}) => {
  switch (type) {
    case OTP_FORGOT_PASSWORD_LOADING:
      return {
        ...state,
        loading: true,
      };
    case OTP_FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    case OTP_FORGOT_PASSWORD_FAUILER:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case OTP_FORGOT_PASSWORD_REMOVE:
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
export default OTPForgotPassword;
