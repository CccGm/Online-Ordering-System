import {
  CART_DATA_FAUILER,
  CART_DATA_LOADING,
  CART_DATA_SUCCESS,
} from '../../../constants/actionTypes';

const initialState = {
  data: [],
  error: null,
  loading: false,
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
        data: payload,
        loading: false,
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
