import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {
  ADD_FAVORITE_PRODUCT_FAUILER,
  ADD_FAVORITE_PRODUCT_LOADING,
  ADD_FAVORITE_PRODUCT_REMOVE,
  ADD_FAVORITE_PRODUCT_SUCCESS,
  FAVORITE_PRODUCT_GET_FAUILER,
  FAVORITE_PRODUCT_GET_LOADING,
  FAVORITE_PRODUCT_GET_SUCCESS,
  REMOVE_FAVORITE_PRODUCT_FAUILER,
  REMOVE_FAVORITE_PRODUCT_LOADING,
  REMOVE_FAVORITE_PRODUCT_REMOVE,
  REMOVE_FAVORITE_PRODUCT_SUCCESS,
} from '../../constants/actionTypes';
import axios from '../../helpers/axiosIntersepter';
import {
  get_All_Favorite_Product,
  add_Favorite_Product,
  remove_Favorite_Product,
} from '../api';

export const Favorite_Data_Get = data => async dispatch => {
  dispatch({type: FAVORITE_PRODUCT_GET_LOADING});
  try {
    const token = await AsyncStorage.getItem('USER_jwtToken');
    await axios
      .get(get_All_Favorite_Product, {
        headers: {
          Authorization: token,
        },
      })
      .then(response => {
        dispatch({type: FAVORITE_PRODUCT_GET_SUCCESS, payload: response.data});
      });
  } catch (error) {
    Alert.alert('Error', 'Favorite data not get ');
    dispatch({type: FAVORITE_PRODUCT_GET_FAUILER, payload: error});
  }
};

export const Favorite_Data_Add = data => async dispatch => {
  dispatch({type: ADD_FAVORITE_PRODUCT_LOADING});
  console.log(data, 'data -          ---------');

  try {
    const token = await AsyncStorage.getItem('USER_jwtToken');
    await axios
      .post(
        add_Favorite_Product,
        {productId: data},
        {
          headers: {
            Authorization: token,
          },
        },
      )
      .then(response => {
        dispatch({type: ADD_FAVORITE_PRODUCT_SUCCESS, payload: response});
      });
  } catch (error) {
    Alert.alert('Error', 'Favorite data not add ');
    dispatch({type: ADD_FAVORITE_PRODUCT_FAUILER, payload: error});
  }
};

export const Favorite_Data_Remove = data => async dispatch => {
  dispatch({type: REMOVE_FAVORITE_PRODUCT_LOADING});
  try {
    const token = await AsyncStorage.getItem('USER_jwtToken');
    await axios
      .post(
        remove_Favorite_Product,
        {wathListItemId: data},
        {
          headers: {
            Authorization: token,
          },
        },
      )
      .then(response => {
        dispatch({type: REMOVE_FAVORITE_PRODUCT_SUCCESS, payload: response});
      });
  } catch (error) {
    Alert.alert('Error', 'Favorite not remove');
    dispatch({type: REMOVE_FAVORITE_PRODUCT_FAUILER, payload: error});
  }
};

export const Remove_Favorite_Data_In_Add = data => dispatch => {
  dispatch({type: ADD_FAVORITE_PRODUCT_REMOVE});
};

export const Remove_Favorite_Data_In_Remove = data => dispatch => {
  dispatch({type: REMOVE_FAVORITE_PRODUCT_REMOVE});
};
