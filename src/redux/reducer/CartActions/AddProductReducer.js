import {
  CART_ADD_DATA_FAUILER,
  CART_ADD_DATA_LOADING,
  CART_ADD_DATA_SUCCESS,
  Remove_Data_Add,
} from '../../../constants/actionTypes';

const initialState = {
  data: {},
  error: null,
  loading: false,
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
        loading: false,
      };
    case CART_ADD_DATA_FAUILER:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case Remove_Data_Add:
      return {
        ...state,
        data: {},
        error: null,
        loading: false,
      };
    default:
      return state;
  }
};
export default AddProductReducer;
