import {
  ADD_FAVORITE_PRODUCT_FAUILER,
  ADD_FAVORITE_PRODUCT_LOADING,
  ADD_FAVORITE_PRODUCT_REMOVE,
  ADD_FAVORITE_PRODUCT_SUCCESS,
} from '../../../constants/actionTypes';

const initialState = {
  data: {},
  error: null,
  loading: false,
  status: null,
};

const AddFavoriteReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_FAVORITE_PRODUCT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_FAVORITE_PRODUCT_SUCCESS:
      return {
        ...state,
        data: payload,
        status: 1,
        loading: false,
      };
    case ADD_FAVORITE_PRODUCT_FAUILER:
      return {
        ...state,
        error: payload,
        status: 0,
        loading: false,
      };
    case ADD_FAVORITE_PRODUCT_REMOVE:
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
export default AddFavoriteReducer;
