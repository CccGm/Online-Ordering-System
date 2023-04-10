import {StackActions, useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../../assets/theme/colors';
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
          backgroundColor: primary ? COLORS.primary : COLORS.white,
        },
      ]}>
      {title && (
        <Text
          style={[
            styles.title,
            {color: primary ? COLORS.white : COLORS.blackaa},
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
          <Icon name={'arrow-back-outline'} size={25} color={COLORS.blackaa} />
        </TouchableOpacity>
      )}

      {rightOptionMenu && (
        <View style={styles.rightOptions}>{rightOptionMenu}</View>
      )}
    </View>
  );
};

export default Header;
