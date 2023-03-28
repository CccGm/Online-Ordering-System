import React from 'react';
import {View} from 'react-native';
import CartComponent from '../components/CartComponent';

const CartScreen = () => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <CartComponent />
    </View>
  );
};

export default CartScreen;
