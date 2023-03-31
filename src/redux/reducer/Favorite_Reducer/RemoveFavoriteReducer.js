import {
  REMOVE_FAVORITE_PRODUCT_FAUILER,
  REMOVE_FAVORITE_PRODUCT_LOADING,
  REMOVE_FAVORITE_PRODUCT_REMOVE,
  REMOVE_FAVORITE_PRODUCT_SUCCESS,
} from '../../../constants/actionTypes';

const initialState = {
  data: {},
  error: null,
  status: null,
  loading: false,
};

const RemoveFavoriteReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case REMOVE_FAVORITE_PRODUCT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_FAVORITE_PRODUCT_SUCCESS:
      return {
        ...state,
        data: payload,
        status: 1,
        loading: false,
      };
    case REMOVE_FAVORITE_PRODUCT_FAUILER:
      return {
        ...state,
        error: payload,
        status: 0,
        loading: false,
      };
    case REMOVE_FAVORITE_PRODUCT_REMOVE:
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
export default RemoveFavoriteReducer;
