import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {
  PRODUCT_DATA_FAUILER,
  PRODUCT_DATA_LOADING,
  PRODUCT_DATA_SUCCESS,
} from '../../constants/actionTypes';
import axios from '../../helpers/axiosIntersepter';
import {get_All_Product_Data} from '../api';

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
    Alert.alert('Error', 'home data not get ');
    dispatch({type: PRODUCT_DATA_FAUILER, payload: error});
  }
};
