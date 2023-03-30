import {
  CART_REMOVE_DATA_FAUILER,
  CART_REMOVE_DATA_LOADING,
  CART_REMOVE_DATA_SUCCESS,
} from '../../../constants/actionTypes';

const initialState = {
  data: {},
  error: null,
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
        loading: false,
      };
    case CART_REMOVE_DATA_FAUILER:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default RemoveProductReducer;
