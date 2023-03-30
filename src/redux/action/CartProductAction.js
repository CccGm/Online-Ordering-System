import {
  CART_DECREASE_DATA_FAUILER,
  CART_DECREASE_DATA_LOADING,
  CART_DECREASE_DATA_SUCCESS,
  CART_INCREASE_DATA_FAUILER,
  CART_INCREASE_DATA_LOADING,
  CART_INCREASE_DATA_SUCCESS,
} from '../../constants/actionTypes';
import axios from '../../helpers/axiosIntersepter';
import {decrease_Product, increase_Product} from '../api';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const Increase_Product = data => async dispatch => {
  dispatch({type: CART_INCREASE_DATA_LOADING});
  try {
    const token = await AsyncStorage.getItem('USER_jwtToken');
    await axios
      .get(increase_Product, {
        headers: {
          Authorization: token,
        },
      })
      .then(response => {
        dispatch({
          type: CART_INCREASE_DATA_SUCCESS,
          payload: response.data.data,
        });
      });
  } catch (error) {
    Alert.alert('Error', 'data not get ');
    dispatch({type: CART_INCREASE_DATA_FAUILER, payload: error});
  }
};

export const Decrease_Product = data => async dispatch => {
  dispatch({type: CART_DECREASE_DATA_LOADING});
  try {
    const token = await AsyncStorage.getItem('USER_jwtToken');
    await axios
      .get(decrease_Product, {
        headers: {
          Authorization: token,
        },
      })
      .then(response => {
        dispatch({
          type: CART_DECREASE_DATA_SUCCESS,
          payload: response.data.data,
        });
      });
  } catch (error) {
    Alert.alert('Error', 'data not get ');
    dispatch({type: CART_DECREASE_DATA_FAUILER, payload: error});
  }
};
