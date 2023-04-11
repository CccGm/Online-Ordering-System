import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {COLORS} from '../../../assets/theme/colors';

const ActivityLoader = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.info,
    }}>
    <View
      style={{
        width: 90,
        alignItems: 'center',
        justifyContent: 'center',
        height: 90,

        backgroundColor: COLORS.white,
        borderRadius: 20,
      }}>
      <ActivityIndicator size={50} color={COLORS.blue} />
    </View>
  </View>
);

export default ActivityLoader;
