import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {
  CART_ADD_DATA_FAUILER,
  CART_ADD_DATA_LOADING,
  CART_ADD_DATA_SUCCESS,
  CART_DATA_FAUILER,
  CART_DATA_LOADING,
  CART_DATA_SUCCESS,
  CART_REMOVE_DATA_FAUILER,
  CART_REMOVE_DATA_LOADING,
  CART_REMOVE_DATA_SUCCESS,
  CART_REMOVE_DATA_REMOVE,
  CART_ADD_DATA_REMOVE,
} from '../../constants/actionTypes';
import axios from '../../helpers/axiosIntersepter';
import {
  add_Product_In_Cart,
  get_Cart_Data,
  remove_Product_In_Cart,
} from '../api';

export const Cart_Data_Get = data => async dispatch => {
  dispatch({type: CART_DATA_LOADING});
  try {
    const token = await AsyncStorage.getItem('USER_jwtToken');
    await axios
      .get(get_Cart_Data, {
        headers: {
          Authorization: token,
        },
      })
      .then(response => {
        console.log(response.data, 'Hiii ---------------');

        dispatch({type: CART_DATA_SUCCESS, payload: response.data});
      });
  } catch (error) {
    Alert.alert('Error', 'cart data not get ');
    dispatch({type: CART_DATA_FAUILER, payload: error});
  }
};

export const Cart_Data_Add = data => async dispatch => {
  dispatch({type: CART_ADD_DATA_LOADING});
  console.log(data, 'data -          ---------');

  try {
    const token = await AsyncStorage.getItem('USER_jwtToken');
    await axios
      .post(
        add_Product_In_Cart,
        {productId: data},
        {
          headers: {
            Authorization: token,
          },
        },
      )
      .then(response => {
        dispatch({type: CART_ADD_DATA_SUCCESS, payload: response});
      });
  } catch (error) {
    Alert.alert('Error', 'cart data not add ');
    dispatch({type: CART_ADD_DATA_FAUILER, payload: error});
  }
};

export const Cart_Data_Remove = data => async dispatch => {
  dispatch({type: CART_REMOVE_DATA_LOADING});
  try {
    const token = await AsyncStorage.getItem('USER_jwtToken');
    await axios
      .post(
        remove_Product_In_Cart,
        {cartItemId: data},
        {
          headers: {
            Authorization: token,
          },
        },
      )
      .then(response => {
        dispatch({type: CART_REMOVE_DATA_SUCCESS, payload: response});
      });
  } catch (error) {
    Alert.alert('Error', 'product not remove');
    dispatch({type: CART_REMOVE_DATA_FAUILER, payload: error});
  }
};

export const Remove_Data_In_Add = data => dispatch => {
  dispatch({type: CART_ADD_DATA_REMOVE});
};

export const Remove_Data_In_Remove = data => dispatch => {
  dispatch({type: CART_REMOVE_DATA_REMOVE});
};
