import {StackActions, useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
const Header = ({title, hideBackBtn, primary, rightOptionMenu}) => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View
      style={[
        styles.wrapper,
        {
          backgroundColor: primary ? colors.primary : colors.white,
        },
      ]}>
      {title && (
        <Text
          style={[
            styles.title,
            {color: primary ? colors.white : colors.black},
          ]}>
          {title}
        </Text>
      )}
      {!hideBackBtn && (
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(StackActions.pop(1));
          }}
          style={styles.backBtn}>
          <Icon name={'arrow-back-outline'} size={25} color={'#000000bb'} />
        </TouchableOpacity>
      )}

      {rightOptionMenu && (
        <View style={styles.rightOptions}>{rightOptionMenu}</View>
      )}
    </View>
  );
};

export default Header;
