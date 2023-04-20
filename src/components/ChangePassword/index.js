import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  Change_Password,
  Remove_Change_Password_data,
} from '../../redux/action/ForgotPassword';
import {
  TEXT_BOTH_PASSWORD_NOT_SAME,
  TEXT_CHANGE_PASSWORD,
  TEXT_CONFIRM_PASSWORD,
  TEXT_ENTER_ALL_CREDENCIALS,
  TEXT_ENTER_CONFROM_PASSWORD,
  TEXT_ENTER_NEW_PASSWORD,
  TEXT_GO_BACK,
  TEXT_NEW_PASSWORD,
  TEXT_WARNING,
} from '../../constants/strings';
import {setLogout} from '../../redux/action/Actions';
import {COLORS} from '../../assets/theme/colors';

const ChangePassword = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const chagePass = useSelector(state => state.ChangePasswordReducer);
  const [data, setData] = useState({
    check_textInputChange: false,
    secureTextEntry: true,
  });
  const [Lform, setForm] = useState(null);

  useEffect(() => {
    if (chagePass.data.status == 1 && chagePass.loading == false) {
      dispatch(setLogout());
      dispatch(Remove_Change_Password_data());
    }
  }, [chagePass]);

  const textInputChange = ({name, val}) => {
    setForm({...Lform, [name]: val});
  };

  const Submit_LoginData = () => {
    if (Lform != null) {
      if (!Lform.OldPassword || !Lform.NewPassword) {
        if (!Lform.OldPassword) {
          Alert.alert(TEXT_WARNING, TEXT_ENTER_NEW_PASSWORD);
        } else {
          Alert.alert(TEXT_WARNING, TEXT_ENTER_CONFROM_PASSWORD);
        }
      } else {
        if (Lform.OldPassword == Lform.NewPassword) {
          dispatch(
            Change_Password({
              newPass: Lform.OldPassword,
              confirmPass: Lform.NewPassword,
            }),
          );
        } else {
          Alert.alert(TEXT_WARNING, TEXT_BOTH_PASSWORD_NOT_SAME);
        }
      }
    } else {
      Alert.alert(TEXT_WARNING, TEXT_ENTER_ALL_CREDENCIALS);
    }
  };

  const updateSecurityTextEntry = () => {
    setData({
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.aqua_Blue} barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>{TEXT_CHANGE_PASSWORD}</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.text_footer}>{TEXT_NEW_PASSWORD}</Text>
        <View style={styles.action}>
          <Feather name={'lock'} color={COLORS.dark_Blue} size={20} />
          <TextInput
            placeholder={TEXT_NEW_PASSWORD}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => textInputChange({name: 'OldPassword', val})}
          />
        </View>
        <Text style={[styles.text_footer, {marginTop: 35}]}>
          {TEXT_CONFIRM_PASSWORD}
        </Text>
        <View style={styles.action}>
          <Feather name={'lock'} color={COLORS.dark_Blue} size={20} />
          <TextInput
            placeholder={TEXT_CONFIRM_PASSWORD}
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => textInputChange({name: 'NewPassword', val})}
          />
          <TouchableOpacity onPress={() => updateSecurityTextEntry()}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => Submit_LoginData()}>
            <LinearGradient
              colors={[COLORS.btn_linear_1_up, COLORS.btn_linear_2_down]}
              style={styles.signIn}>
              <Text style={[styles.textSign, {color: COLORS.white}]}>
                {TEXT_CHANGE_PASSWORD}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[
              styles.signIn,
              {borderColor: COLORS.aqua_Blue, marginTop: 15, borderWidth: 1},
            ]}>
            <Text style={[styles.textSign, {color: COLORS.aqua_Blue}]}>
              {TEXT_GO_BACK}
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default ChangePassword;
