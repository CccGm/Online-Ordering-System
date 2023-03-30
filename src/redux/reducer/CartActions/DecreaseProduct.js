import {
  CART_DECREASE_DATA_FAUILER,
  CART_DECREASE_DATA_LOADING,
  CART_DECREASE_DATA_SUCCESS,
} from '../../../constants/actionTypes';

const initialState = {
  data: {},
  error: null,
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
        loading: false,
      };
    case CART_DECREASE_DATA_FAUILER:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default DecreaseProductReducer;
