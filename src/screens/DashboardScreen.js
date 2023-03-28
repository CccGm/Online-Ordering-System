import React from 'react';
import {View} from 'react-native';
import ProductCardDetails from '../components/common/ProductCardDetails';
import DashbordComponent from '../components/DashboardComponent';

const DashboardScreen = () => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <DashbordComponent />
    </View>
  );
};

export default DashboardScreen;
