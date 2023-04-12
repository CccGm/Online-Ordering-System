import {
  CART_DECREASE_DATA_FAUILER,
  CART_DECREASE_DATA_LOADING,
  CART_DECREASE_DATA_REMOVE,
  CART_DECREASE_DATA_SUCCESS,
  CART_INCREASE_DATA_FAUILER,
  CART_INCREASE_DATA_LOADING,
  CART_INCREASE_DATA_REMOVE,
  CART_INCREASE_DATA_SUCCESS,
} from '../../constants/actionTypes';
import axios from '../../helpers/axiosIntersepter';
import {decrease_Product, increase_Product} from '../api';
import {Alert, ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  TEXT_ERROR,
  TEXT_PLEASE_RELOGIN,
  TEXT_PRODUCT_DECRESED,
  TEXT_PRODUCT_INCRESED,
  TEXT_PRODUCT_NOT_DECRESED,
  TEXT_PRODUCT_NOT_INCRESED,
  TEXT_TOKEN_CHANGE,
} from '../../constants/strings';
import {setLogout} from './Actions';

export const Increase_Product = data => async dispatch => {
  dispatch({type: CART_INCREASE_DATA_LOADING});
  try {
    const token = await AsyncStorage.getItem('USER_jwtToken');
    await axios
      .post(
        increase_Product,
        {cartItemId: data},
        {
          headers: {
            Authorization: token,
          },
        },
      )
      .then(response => {
        dispatch({
          type: CART_INCREASE_DATA_SUCCESS,
          payload: response,
        });
        ToastAndroid.show(
          TEXT_PRODUCT_INCRESED,
          ToastAndroid.BOTTOM,
          ToastAndroid.SHORT,
        );
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
      Alert.alert(TEXT_ERROR, TEXT_PRODUCT_NOT_INCRESED);
      dispatch({type: CART_INCREASE_DATA_FAUILER, payload: error});
    }
  }
};

export const Decrease_Product = data => async dispatch => {
  dispatch({type: CART_DECREASE_DATA_LOADING});
  try {
    const token = await AsyncStorage.getItem('USER_jwtToken');
    await axios
      .post(
        decrease_Product,
        {cartItemId: data},
        {
          headers: {
            Authorization: token,
          },
        },
      )
      .then(response => {
        dispatch({
          type: CART_DECREASE_DATA_SUCCESS,
          payload: response,
        });
        ToastAndroid.show(
          TEXT_PRODUCT_DECRESED,
          ToastAndroid.BOTTOM,
          ToastAndroid.SHORT,
        );
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
      Alert.alert(TEXT_ERROR, TEXT_PRODUCT_NOT_DECRESED);
      dispatch({type: CART_DECREASE_DATA_FAUILER, payload: error});
    }
  }
};

export const Remove_Increase_In_Remove = data => dispatch => {
  dispatch({type: CART_INCREASE_DATA_REMOVE});
};

export const Remove_Decrease_In_Remove = data => dispatch => {
  dispatch({type: CART_DECREASE_DATA_REMOVE});
};
