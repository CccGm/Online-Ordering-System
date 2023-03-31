import {
  CART_REMOVE_DATA_FAUILER,
  CART_REMOVE_DATA_LOADING,
  CART_REMOVE_DATA_SUCCESS,
  CART_REMOVE_DATA_REMOVE,
} from '../../../constants/actionTypes';

const initialState = {
  data: {},
  error: null,
  status: null,
  loading: false,
};

const RemoveProductReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case CART_REMOVE_DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CART_REMOVE_DATA_SUCCESS:
      return {
        ...state,
        data: payload,
        status: 1,
        loading: false,
      };
    case CART_REMOVE_DATA_FAUILER:
      return {
        ...state,
        error: payload,
        status: 0,
        loading: false,
      };
    case CART_REMOVE_DATA_REMOVE:
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
export default RemoveProductReducer;
