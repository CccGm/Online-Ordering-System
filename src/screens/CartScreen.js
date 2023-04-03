import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CartComponent from '../components/CartComponent';
import ActivityLoader from '../components/common/ActivityLoader';
import NoDataFound from '../components/common/NoDataFound';
import {Cart_Data_Get} from '../redux/action/CartAction';

const CartScreen = () => {
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.GetCartReducer);

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      {cartData.loading != false ? (
        <ActivityLoader />
      ) : cartData.data.length == 0 ? (
        <NoDataFound />
      ) : (
        <CartComponent />
      )}
    </View>
  );
};

export default CartScreen;
