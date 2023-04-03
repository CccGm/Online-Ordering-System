import AsyncStorage from '@react-native-async-storage/async-storage';
import {GET_USERDATA, REMOVE_USERDATA} from '../../constants/actionTypes';

const initialState = {
  Name: null,
  Email: null,
  Mo_No: null,
  Password: null,
};

const UserDataReducer = async (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_USERDATA:
      return {
        ...state,
        Name: await AsyncStorage.getItem('User_Name'),
        Mo_No: await AsyncStorage.getItem('User_Mo.No'),
        Email: await AsyncStorage.getItem('User_Email'),
        Password: await AsyncStorage.getItem('User_Pass'),
      };
    case REMOVE_USERDATA:
      return {
        ...state,
        Name: null,
        Email: null,
        Mo_No: null,
        Password: null,
      };

    default:
      return state;
  }
};
export default UserDataReducer;
