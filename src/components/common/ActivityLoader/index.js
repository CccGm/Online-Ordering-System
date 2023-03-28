import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const ActivityLoader = () => (
  <View
    style={{
      width: 90,
      alignItems: 'center',
      justifyContent: 'center',
      height: 90,
      backgroundColor: '#fff',
      borderRadius: 20,
    }}>
    <ActivityIndicator size={50} color="#0202f379" />
  </View>
);

export default ActivityLoader;
