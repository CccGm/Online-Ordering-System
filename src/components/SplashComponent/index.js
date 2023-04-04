import React from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../constants/routeName';
import {
  TEXT_GET_STARTED,
  TEXT_SIGN_IN_WITH_ACCOUNT,
  TEXT_SPLASH_SCREEN_STAY_CONNECTION,
} from '../../constants/strings';

const SplashComponent = () => {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.title}>{TEXT_SPLASH_SCREEN_STAY_CONNECTION}</Text>
        <Text style={styles.text}>{TEXT_SIGN_IN_WITH_ACCOUNT}</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigate(LOGIN)}>
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}>
              <Text style={styles.textSign}>{TEXT_GET_STARTED}</Text>
              <Icon name="navigate-next" color="#fff" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SplashComponent;
