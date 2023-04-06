import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './Styles';
import {useNavigation} from '@react-navigation/native';
import {DASHBOARD} from '../../../constants/routeName';
import {
  TEXT_CONTINUE_SHOPING,
  TEXT_CONTINUE_TO_HOME_SCREEN,
  TEXT_THANKS_FOR_SHOPING,
} from '../../../constants/strings';

const ThankYou = () => {
  const {navigate} = useNavigation();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../../../assets/images/shop1.png')}
        style={{width: 230, height: 250}}
      />
      <Text style={styles.text}>{TEXT_THANKS_FOR_SHOPING}</Text>
      <Text style={styles.text}>{TEXT_CONTINUE_TO_HOME_SCREEN}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigate(DASHBOARD);
        }}>
        <Text style={styles.btntext}>{TEXT_CONTINUE_SHOPING}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ThankYou;
