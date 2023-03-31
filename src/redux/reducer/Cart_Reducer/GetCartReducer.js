import {
  CART_DATA_FAUILER,
  CART_DATA_LOADING,
  CART_DATA_SUCCESS,
} from '../../../constants/actionTypes';

const initialState = {
  data: [],
  error: null,
  loading: false,
  total: 0,
};

const GetCartProductReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case CART_DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CART_DATA_SUCCESS:
      return {
        ...state,
        data: payload.data ? payload.data : [],
        loading: false,
        total: payload.cartTotal ? payload.cartTotal : 0,
      };
    case CART_DATA_FAUILER:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default GetCartProductReducer;
