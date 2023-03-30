import React from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import * as Animatable from 'react-native-animatable';

const Splash = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duration={500}
          source={require('../../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Splash;
