import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ActivityLoader from '../components/common/ActivityLoader';
import ProductCardDetails from '../components/common/ProductCardDetails';
import DashbordComponent from '../components/DashboardComponent';
import {Product_Data, set_fcmToken} from '../redux/action/DashBoardAction';

const DashboardScreen = () => {
  const dispatch = useDispatch();
  const productData = useSelector(state => state.ProductDataReducer);

  console.log(productData.loading);

  useEffect(() => {
    dispatch(Product_Data());
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
