import {
  CART_ADD_DATA_FAUILER,
  CART_ADD_DATA_LOADING,
  CART_ADD_DATA_REMOVE,
  CART_ADD_DATA_SUCCESS,
} from '../../../constants/actionTypes';

const initialState = {
  data: {},
  error: null,
  loading: false,
  status: null,
};

const AddProductReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case CART_ADD_DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CART_ADD_DATA_SUCCESS:
      return {
        ...state,
        data: payload,
        status: 1,
        loading: false,
      };
    case CART_ADD_DATA_FAUILER:
      return {
        ...state,
        error: payload,
        status: 0,
        loading: false,
      };
    case CART_ADD_DATA_REMOVE:
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
export default AddProductReducer;
