import {
  CHECKOUT_PRODUCT_FAUILER,
  CHECKOUT_PRODUCT_LOADING,
  CHECKOUT_PRODUCT_SUCCESS,
} from '../../constants/actionTypes';

const initialState = {
  data: {},
  error: null,
  loading: false,
  status: null,
};

const CheckOutReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case CHECKOUT_PRODUCT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CHECKOUT_PRODUCT_SUCCESS:
      return {
        ...state,
        data: payload,
        status: 1,
        loading: false,
      };
    case CHECKOUT_PRODUCT_FAUILER:
      return {
        ...state,
        error: payload,
        status: 0,
        loading: false,
      };
    default:
      return state;
  }
};
export default CheckOutReducer;
