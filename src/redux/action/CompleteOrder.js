import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {
  CHECKOUT_PRODUCT_FAUILER,
  CHECKOUT_PRODUCT_LOADING,
  CHECKOUT_PRODUCT_SUCCESS,
  HISTORY_PRODUCT_GET_FAUILER,
  HISTORY_PRODUCT_GET_LOADING,
  HISTORY_PRODUCT_GET_SUCCESS,
} from '../../constants/actionTypes';
import axios from '../../helpers/axiosIntersepter';
import {get_All_History_Data, get_All_Product_Data, place_Order} from '../api';

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
    Alert.alert('Error', 'Histoy data not get ');
    dispatch({type: HISTORY_PRODUCT_GET_FAUILER, payload: error});
  }
};

export const CheckOut_Data_Add = data => async dispatch => {
  dispatch({type: CHECKOUT_PRODUCT_LOADING});

  console.log(data, 'checkout data-----------');

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
        console.log(response, 'completed order---------');
        //dispatch({type: CHECKOUT_PRODUCT_SUCCESS, payload: response});
      });
  } catch (error) {
    Alert.alert('Error', 'cart data not add ');
    dispatch({type: CHECKOUT_PRODUCT_FAUILER, payload: error});
  }
};
