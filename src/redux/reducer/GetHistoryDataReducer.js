import {
  HISTORY_PRODUCT_GET_FAUILER,
  HISTORY_PRODUCT_GET_LOADING,
  HISTORY_PRODUCT_GET_SUCCESS,
} from '../../constants/actionTypes';

const initialState = {
  data: [],
  error: null,
  loading: false,
};

const GetHistoryDataReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case HISTORY_PRODUCT_GET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case HISTORY_PRODUCT_GET_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    case HISTORY_PRODUCT_GET_FAUILER:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default GetHistoryDataReducer;
