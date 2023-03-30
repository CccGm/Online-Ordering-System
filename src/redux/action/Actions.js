import {Alert, ToastAndroid} from 'react-native';
import {
  REGISTER_FAUILER,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  OTP_FAUILER,
  OTP_LOADING,
  LOGOUT_Status,
  OTP_SUCCESS,
  LOGIN_FAUILER,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_STATE_RESTORE_REQUEST,
  LOGIN_STATE_RESTORE,
  PRODUCT_DATA_REMOVE,
} from '../../constants/actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../../helpers/axiosIntersepter';
import {login, register, verify_Register_Otp} from '../api';

export const Register_User = data => async dispatch => {
  if (data) {
    let json = {
      name: data.Name,
      mobileNo: data.Mo_No,
      emailId: data.Email,
      password: data.Password,
    };

    dispatch({type: REGISTER_LOADING});
    console.log('API Call');
    try {
      await axios.post(register, json).then(result => {
        dispatch({type: REGISTER_SUCCESS, payload: result.data});
        ToastAndroid.show(
          result.data.msg,
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
      });
    } catch (error) {
      dispatch({type: REGISTER_FAUILER, payload: error});
      Alert.alert('Invalid Register');
    }
  }
};

export const Register_Otp = data => async dispatch => {
  if (data) {
    dispatch({type: OTP_LOADING});
    console.log('API Call');
    try {
      await axios.post(verify_Register_Otp, data).then(result => {
        dispatch({type: OTP_SUCCESS, payload: result.data});
      });
    } catch (error) {
      Alert.alert('Invalid OTP');
      dispatch({type: OTP_FAUILER, payload: error});
    }
  }
};

export const Login_User = data => async dispatch => {
  if (data) {
    let json = {
      emailId: data.Email,
      password: data.Password,
    };

    dispatch({type: LOGIN_LOADING});
    console.log('API Call');
    try {
      await axios.post(login, json).then(async result => {
        dispatch({type: LOGIN_SUCCESS, payload: result.data});
        await AsyncStorage.setItem('isLogin', JSON.stringify(true));
        await AsyncStorage.setItem(
          'USER_jwtToken',
          result.data.data.jwtToken.toString(),
        );
      });
    } catch (error) {
      dispatch({type: LOGIN_FAUILER, payload: error});
      Alert.alert('Invalid Login');
    }
  }
};

export const setLogout = data => async dispatch => {
  try {
    await AsyncStorage.clear();
    dispatch({type: LOGOUT_Status});
    dispatch({type: PRODUCT_DATA_REMOVE});
    dispatch(restoreStatus());
  } catch (error) {
    console.log(error);
  }
};

export const restoreStatus = () => async dispatch => {
  let loginStatus;
  try {
    dispatch({type: LOGIN_STATE_RESTORE_REQUEST});
    loginStatus = await AsyncStorage.getItem('isLogin')
      .then(val => {
        if (val === 'true') return true;
        else return false;
      })
      .catch(err => console.log(err));
    dispatch({type: LOGIN_STATE_RESTORE, payload: loginStatus});
  } catch (error) {
    console.log('status restoration failed: ', error);
  }
};
