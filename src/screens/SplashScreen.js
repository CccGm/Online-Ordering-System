import React from 'react';
import {View} from 'react-native';
import Splash from '../components/common/Splash';
import SplashComponent from '../components/SplashComponent';

const SplashScreen = ({screen}) => {
  return (
    <View style={{flex: 1}}>
      {screen == true ? <Splash /> : <SplashComponent />}
    </View>
  );
};

export default SplashScreen;
