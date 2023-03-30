import {
  CART_INCREASE_DATA_FAUILER,
  CART_INCREASE_DATA_LOADING,
  CART_INCREASE_DATA_SUCCESS,
} from '../../../constants/actionTypes';

const initialState = {
  data: {},
  error: null,
  loading: false,
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
        loading: false,
      };
    case CART_INCREASE_DATA_FAUILER:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default IncreaseProductReducer;
