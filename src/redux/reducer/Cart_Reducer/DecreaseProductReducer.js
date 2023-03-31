import {
  CART_DECREASE_DATA_FAUILER,
  CART_DECREASE_DATA_LOADING,
  CART_DECREASE_DATA_REMOVE,
  CART_DECREASE_DATA_SUCCESS,
} from '../../../constants/actionTypes';

const initialState = {
  data: {},
  error: null,
  status: null,
  loading: false,
};

const DecreaseProductReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case CART_DECREASE_DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CART_DECREASE_DATA_SUCCESS:
      return {
        ...state,
        data: payload,
        status: 1,
        loading: false,
      };
    case CART_DECREASE_DATA_FAUILER:
      return {
        ...state,
        error: payload,
        status: 0,
        loading: false,
      };
    case CART_DECREASE_DATA_REMOVE:
      return {
        ...state,
        error: null,
        status: null,
        loading: false,
      };
    default:
      return state;
  }
};
export default DecreaseProductReducer;
