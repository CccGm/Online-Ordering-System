import React from 'react';
import {View} from 'react-native';
import Header from '../components/common/Header';
import LikeComponent from '../components/LikeComponent';

const LikeScreen = () => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <Header title={'Like Product'} />
      <LikeComponent />
    </View>
  );
};

export default LikeScreen;
