import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert, ToastAndroid} from 'react-native';
import {
  PRODUCT_DATA_FAUILER,
  PRODUCT_DATA_LOADING,
  PRODUCT_DATA_SUCCESS,
} from '../../constants/actionTypes';
import axios from '../../helpers/axiosIntersepter';
import {get_All_Product_Data} from '../api';
import {
  TEXT_ERROR,
  TEXT_PLEASE_RELOGIN,
  TEXT_TOKEN_CHANGE,
} from '../../constants/strings';
import {setLogout} from './Actions';

export const Product_Data = data => async dispatch => {
  dispatch({type: PRODUCT_DATA_LOADING});
  try {
    const token = await AsyncStorage.getItem('USER_jwtToken');
    await axios
      .get(get_All_Product_Data, {
        headers: {
          Authorization: token,
        },
      })
      .then(response => {
        dispatch({type: PRODUCT_DATA_SUCCESS, payload: response.data.data});
      });
  } catch (error) {
    if (error == 'AxiosError: Request failed with status code 500') {
      dispatch(setLogout());
      ToastAndroid.show(
        TEXT_TOKEN_CHANGE,
        ToastAndroid.BOTTOM,
        ToastAndroid.LONG,
      );
      ToastAndroid.show(
        TEXT_PLEASE_RELOGIN,
        ToastAndroid.BOTTOM,
        ToastAndroid.LONG,
      );
    } else {
      Alert.alert(TEXT_ERROR, TEXT_HOME_DATA_NOT_GET);
      dispatch({type: PRODUCT_DATA_FAUILER, payload: error});
    }
  }
};
