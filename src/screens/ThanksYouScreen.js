import React from 'react';
import {View} from 'react-native';
import ThankYou from '../components/common/ThankYou';
import {COLORS} from '../assets/theme/colors';

const ThankYouScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <ThankYou />
    </View>
  );
};

export default ThankYouScreen;
