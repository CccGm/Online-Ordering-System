import {
  CART_INCREASE_DATA_FAUILER,
  CART_INCREASE_DATA_LOADING,
  CART_INCREASE_DATA_REMOVE,
  CART_INCREASE_DATA_SUCCESS,
} from '../../../constants/actionTypes';

const initialState = {
  data: {},
  error: null,
  loading: false,
  status: null,
};

const IncreaseProductReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case CART_INCREASE_DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CART_INCREASE_DATA_SUCCESS:
      return {
        ...state,
        data: payload,
        status: 1,
        loading: false,
      };
    case CART_INCREASE_DATA_FAUILER:
      return {
        ...state,
        error: payload,
        status: 0,
        loading: false,
      };
    case CART_INCREASE_DATA_REMOVE:
      return {
        ...state,
        error: null,
        loading: false,
        status: null,
      };
    default:
      return state;
  }
};
export default IncreaseProductReducer;
