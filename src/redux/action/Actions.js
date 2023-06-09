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
  GET_USERDATA,
  REMOVE_USERDATA,
} from '../../constants/actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../../helpers/axiosIntersepter';
import {login, register, verify_Register_Otp} from '../api';
import {resend_Otp} from '../api';
import {
  TEXT_ERROR,
  TEXT_INVALID_LOGIN,
  TEXT_LOGOUT_SUCCESS,
  TEXT_OTP_NOT_SEND,
  TEXT_OTP_SEND_IN_YOUR_MAIL,
} from '../../constants/strings';

export const Register_User = data => async dispatch => {
  if (data) {
    let json = {
      name: data.Name,
      mobileNo: data.Mo_No,
      emailId: data.Email,
      password: data.Password,
    };

    dispatch({type: REGISTER_LOADING});

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
      Alert.alert(TEXT_ERROR, TEXT_INVALID_REGISTER);
    }
  }
};

export const Register_Otp = data => async dispatch => {
  if (data) {
    dispatch({type: OTP_LOADING});

    try {
      await axios.post(verify_Register_Otp, data).then(result => {
        dispatch({type: OTP_SUCCESS, payload: result.data});
      });
    } catch (error) {
      Alert.alert(TEXT_ERROR, TEXT_INVALID_OTP);
      dispatch({type: OTP_FAUILER, payload: error});
    }
  }
};

export const Resend_Otp = data => async dispatch => {
  if (data) {
    dispatch({type: OTP_LOADING});

    try {
      await axios.post(resend_Otp, data).then(result => {
        ToastAndroid.show(
          TEXT_OTP_SEND_IN_YOUR_MAIL,
          ToastAndroid.BOTTOM,
          ToastAndroid.SHORT,
        );
      });
    } catch (error) {
      Alert.alert(TEXT_ERROR, TEXT_OTP_NOT_SEND);
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
    try {
      await axios.post(login, json).then(async result => {
        dispatch({type: LOGIN_SUCCESS, payload: result.data});
        dispatch({type: GET_USERDATA});
        await AsyncStorage.setItem('isLogin', JSON.stringify(true));
        await AsyncStorage.setItem(
          'USER_jwtToken',
          result.data.data.jwtToken.toString(),
        );
        await AsyncStorage.setItem(
          'User_Name',
          result.data.data.name.toString(),
        );
        await AsyncStorage.setItem(
          'User_Mo.No',
          result.data.data.mobileNo.toString(),
        );
        await AsyncStorage.setItem(
          'User_Email',
          result.data.data.emailId.toString(),
        );
        await AsyncStorage.setItem(
          'User_Pass',
          result.data.data.password.toString(),
        );
      });
    } catch (error) {
      dispatch({type: LOGIN_FAUILER, payload: error});
      Alert.alert(TEXT_ERROR, TEXT_INVALID_LOGIN);
    }
  }
};

export const setLogout = data => async dispatch => {
  try {
    await AsyncStorage.clear();
    dispatch({type: LOGOUT_Status});
    dispatch({type: PRODUCT_DATA_REMOVE});
    dispatch({type: REMOVE_USERDATA});
    dispatch(restoreStatus());
    ToastAndroid.show(
      TEXT_LOGOUT_SUCCESS,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  } catch (error) {
    console.log(error);
  }
};

export const restoreStatus = () => async dispatch => {
  let loginStatus;
  try {
    dispatch({type: LOGIN_STATE_RESTORE_REQUEST});
    loginStatus = await AsyncStorage.getItem('isLogin').then(val => {
      if (val === 'true') return true;
      else return false;
    });

    dispatch({type: LOGIN_STATE_RESTORE, payload: loginStatus});
  } catch (error) {
    console.log('status restoration failed: ', error);
  }
};
