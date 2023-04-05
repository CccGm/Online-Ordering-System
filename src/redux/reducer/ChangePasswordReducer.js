import {
  CHANGE_PASSWORD_FAUILER,
  CHANGE_PASSWORD_LOADING,
  CHANGE_PASSWORD_REMOVE,
  CHANGE_PASSWORD_SUCCESS,
} from '../../constants/actionTypes';

const initialState = {
  data: {},
  error: null,
  loading: false,
};

const ChangePasswordReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case CHANGE_PASSWORD_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    case CHANGE_PASSWORD_FAUILER:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CHANGE_PASSWORD_REMOVE:
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
export default ChangePasswordReducer;
