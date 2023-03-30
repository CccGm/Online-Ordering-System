import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAUILER,
} from '../../constants/actionTypes';

const initialState = {
  data: {},
  error: null,
  loading: false,
};

const RegisterReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case REGISTER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    case REGISTER_FAUILER:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default RegisterReducer;
