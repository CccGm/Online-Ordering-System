import {
  PRODUCT_DATA_FAUILER,
  PRODUCT_DATA_LOADING,
  PRODUCT_DATA_SUCCESS,
  PRODUCT_DATA_REMOVE,
} from '../../constants/actionTypes';

const initialState = {
  data: [],
  error: null,
  loading: false,
};

const GetProductReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case PRODUCT_DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_DATA_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    case PRODUCT_DATA_FAUILER:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case PRODUCT_DATA_REMOVE:
      return {
        ...state,
        data: {},
        loading: false,
      };
    default:
      return state;
  }
};
export default GetProductReducer;
