import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ActivityLoader from '../components/common/ActivityLoader';
import DashbordComponent from '../components/DashboardComponent';
import {Product_Data} from '../redux/action/DashBoardAction';
import {GET_USERDATA} from '../constants/actionTypes';
import {Cart_Data_Get} from '../redux/action/CartAction';
import {Favorite_Data_Get} from '../redux/action/FavoriteAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DashboardScreen = () => {
  const dispatch = useDispatch();
  const productData = useSelector(state => state.GetProductReducer);

  console.log(productData.loading);

  const check = async () => {
    let n = await AsyncStorage.getItem('USER_jwtToken');
    if (n != undefined && n != null) {
      dispatch(Product_Data());
      dispatch({type: GET_USERDATA});
      dispatch(Cart_Data_Get());
      dispatch(Favorite_Data_Get());
    } else {
      check();
    }
  };

  useEffect(() => {
    check();
  }, []);

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      {productData.loading != false ? (
        <ActivityLoader />
      ) : (
        <DashbordComponent />
      )}
    </View>
  );
};

export default DashboardScreen;
