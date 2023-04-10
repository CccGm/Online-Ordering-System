import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import CartComponent from '../components/CartComponent';
import ActivityLoader from '../components/common/ActivityLoader';
import NoDataFound from '../components/common/NoDataFound';
import {COLORS} from '../assets/theme/colors';

const CartScreen = () => {
  const cartData = useSelector(state => state.GetCartReducer);

  return (
    <View style={{backgroundColor: COLORS.white, flex: 1}}>
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
