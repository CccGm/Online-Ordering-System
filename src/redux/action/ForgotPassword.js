import {
  CHANGE_PASSWORD_FAUILER,
  CHANGE_PASSWORD_LOADING,
  CHANGE_PASSWORD_REMOVE,
  CHANGE_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAUILER,
  FORGOT_PASSWORD_LOADING,
  FORGOT_PASSWORD_REMOVE,
  FORGOT_PASSWORD_SUCCESS,
  OTP_FORGOT_PASSWORD_FAUILER,
  OTP_FORGOT_PASSWORD_LOADING,
  OTP_FORGOT_PASSWORD_REMOVE,
  OTP_FORGOT_PASSWORD_SUCCESS,
} from '../../constants/actionTypes';
import {
  change_Password,
  forgot_Password,
  verify_ForgotPassword_Otp,
} from '../api';
import axios from '../../helpers/axiosIntersepter';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  TEXT_ENTER_VALIDE_EMAIL,
  TEXT_ENTER_VALIDE_OTP,
  TEXT_ERROR,
  TEXT_PASSWRD_NOT_CHANGE,
} from '../../constants/strings';

export const Forgot_Password = data => async dispatch => {
  dispatch({type: FORGOT_PASSWORD_LOADING});

  try {
    const token = await AsyncStorage.getItem('USER_jwtToken');
    await axios
      .post(
        forgot_Password,
        {emailId: data},
        {
          headers: {
            Authorization: token,
          },
        },
      )
      .then(response => {
        dispatch({type: FORGOT_PASSWORD_SUCCESS, payload: response});
      });
  } catch (error) {
    Alert.alert(TEXT_ERROR, TEXT_ENTER_VALIDE_EMAIL);
    dispatch({type: FORGOT_PASSWORD_FAUILER, payload: error});
  }
};

export const Forgot_Password_OTP = data => async dispatch => {
  if (data) {
    dispatch({type: OTP_FORGOT_PASSWORD_LOADING});

    try {
      await axios.post(verify_ForgotPassword_Otp, data).then(result => {
        dispatch({type: OTP_FORGOT_PASSWORD_SUCCESS, payload: result.data});
      });
    } catch (error) {
      Alert.alert(TEXT_ERROR, TEXT_ENTER_VALIDE_OTP);
      dispatch({type: OTP_FORGOT_PASSWORD_FAUILER, payload: error});
    }
  }
};

export const Change_Password = data => async dispatch => {
  if (data) {
    dispatch({type: CHANGE_PASSWORD_LOADING});
    try {
      const token = await AsyncStorage.getItem('USER_jwtToken');
      await axios
        .post(
          change_Password,
          {data},
          {
            headers: {
              Authorization: token,
            },
          },
        )
        .then(result => {
          dispatch({type: CHANGE_PASSWORD_SUCCESS, payload: result.data});
        });
    } catch (error) {
      Alert.alert(TEXT_ERROR, TEXT_PASSWRD_NOT_CHANGE);
      dispatch({type: CHANGE_PASSWORD_FAUILER, payload: error});
    }
  }
};

export const Remove_Password_Otp_data = data => dispatch => {
  dispatch({type: FORGOT_PASSWORD_REMOVE});
};

export const Remove_Password_data = data => dispatch => {
  dispatch({type: OTP_FORGOT_PASSWORD_REMOVE});
};

export const Remove_Change_Password_data = data => dispatch => {
  dispatch({type: CHANGE_PASSWORD_REMOVE});
};
