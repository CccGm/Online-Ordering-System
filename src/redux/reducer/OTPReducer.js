import {
  OTP_LOADING,
  OTP_SUCCESS,
  OTP_FAUILER,
} from '../../constants/actionTypes';

const initialState = {
  data: {},
  error: null,
  loading: false,
};

const OTPReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case OTP_LOADING:
      return {
        ...state,
        loading: true,
      };
    case OTP_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    case OTP_FAUILER:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default OTPReducer;
