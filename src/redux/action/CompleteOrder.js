import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert, ToastAndroid} from 'react-native';
import {
  CHECKOUT_PRODUCT_FAUILER,
  CHECKOUT_PRODUCT_LOADING,
  CHECKOUT_PRODUCT_REMOVE,
  CHECKOUT_PRODUCT_SUCCESS,
  HISTORY_PRODUCT_GET_FAUILER,
  HISTORY_PRODUCT_GET_LOADING,
  HISTORY_PRODUCT_GET_SUCCESS,
} from '../../constants/actionTypes';
import axios from '../../helpers/axiosIntersepter';
import {get_All_History_Data, place_Order} from '../api';
import {
  TEXT_CART_DATA_NOT_ADD,
  TEXT_ERROR,
  TEXT_HISTORY_DATA_NOT_ADD,
  TEXT_PLEASE_RELOGIN,
  TEXT_TOKEN_CHANGE,
} from '../../constants/strings';
import {setLogout} from './Actions';

export const History_Data_Get = data => async dispatch => {
  dispatch({type: HISTORY_PRODUCT_GET_LOADING});
  try {
    const token = await AsyncStorage.getItem('USER_jwtToken');
    await axios
      .get(get_All_History_Data, {
        headers: {
          Authorization: token,
        },
      })
      .then(response => {
        dispatch({
          type: HISTORY_PRODUCT_GET_SUCCESS,
          payload: response.data.data,
        });
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
      Alert.alert(TEXT_ERROR, TEXT_HISTORY_DATA_NOT_ADD);
      dispatch({type: HISTORY_PRODUCT_GET_FAUILER, payload: error});
    }
  }
};

export const CheckOut_Data_Add = data => async dispatch => {
  dispatch({type: CHECKOUT_PRODUCT_LOADING});

  try {
    const token = await AsyncStorage.getItem('USER_jwtToken');
    await axios
      .post(
        place_Order,
        {cartId: data.cart_id, cartTotal: data.Total},
        {
          headers: {
            Authorization: token,
          },
        },
      )
      .then(response => {
        dispatch({type: CHECKOUT_PRODUCT_SUCCESS, payload: response});
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
      Alert.alert(TEXT_ERROR, TEXT_CART_DATA_NOT_ADD);
      dispatch({type: CHECKOUT_PRODUCT_FAUILER, payload: error});
    }
  }
};

export const Remove_CheckOut_Data_Add = data => async dispatch => {
  dispatch({type: CHECKOUT_PRODUCT_REMOVE});
};
