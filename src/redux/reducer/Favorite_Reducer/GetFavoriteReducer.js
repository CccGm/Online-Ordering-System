import {
  FAVORITE_PRODUCT_GET_FAUILER,
  FAVORITE_PRODUCT_GET_LOADING,
  FAVORITE_PRODUCT_GET_SUCCESS,
} from '../../../constants/actionTypes';

const initialState = {
  data: [],
  error: null,
  loading: false,
};

const GetFavoriteReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FAVORITE_PRODUCT_GET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FAVORITE_PRODUCT_GET_SUCCESS:
      return {
        ...state,
        data: payload.data ? payload.data : [],
        loading: false,
      };
    case FAVORITE_PRODUCT_GET_FAUILER:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default GetFavoriteReducer;
