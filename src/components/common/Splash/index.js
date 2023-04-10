import React from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import * as Animatable from 'react-native-animatable';
import {COLORS} from '../../../assets/theme/colors';

const Splash = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.aqua_Blue} barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require('../../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Splash;
