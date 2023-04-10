import React, {useState} from 'react';
import {
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  ScrollView,
} from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import {FORGOTPASSWORD, REGISTER} from '../../constants/routeName';
import {useDispatch, useSelector} from 'react-redux';
import {Login_User} from '../../redux/action/Actions';
import {
  TEXT_ALERT,
  TEXT_EMAIL,
  TEXT_ENTER_ALL_CREDENCIALS,
  TEXT_ENTER_EMAIL,
  TEXT_ENTER_PASSWORD,
  TEXT_ENTER_VALIDE_EMAIL,
  TEXT_FORGOT_PASSWORD,
  TEXT_PLEASE_ENTER_EMAIL,
  TEXT_PLEASE_ENTER_PASSWORD,
  TEXT_SIGN_IN,
  TEXT_SIGN_UP,
  TEXT_WELCOME_BACK,
} from '../../constants/strings';
import {COLORS} from '../../assets/theme/colors';

const LoginComponent = () => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    check_textInputChange: false,
    secureTextEntry: true,
  });
  const [Lform, setForm] = useState(null);

  const textInputChange = ({name, val}) => {
    setForm({...Lform, [name]: val});
  };

  const Submit_LoginData = () => {
    if (Lform != null) {
      if (!Lform.Password || !Lform.Email) {
        if (!Lform.Email) {
          Alert.alert(TEXT_ALERT, TEXT_PLEASE_ENTER_EMAIL);
        } else {
          Alert.alert(TEXT_ALERT, TEXT_PLEASE_ENTER_PASSWORD);
        }
      } else {
        if (
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Lform.Email) &&
          Lform.Password != ''
        ) {
          dispatch(Login_User(Lform));
        } else {
          Alert.alert(TEXT_ALERT, TEXT_ENTER_VALIDE_EMAIL);
        }
      }
    } else {
      Alert.alert(TEXT_ALERT, TEXT_ENTER_ALL_CREDENCIALS);
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
        <Text style={styles.text_header}>{TEXT_WELCOME_BACK}</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.text_footer}>{TEXT_EMAIL}</Text>
          <View style={styles.action}>
            <FontAwesome name={'user-o'} color={COLORS.dark_Blue} size={20} />
            <TextInput
              placeholder={TEXT_ENTER_EMAIL}
              style={styles.textInput}
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={val => textInputChange({name: 'Email', val})}
            />
          </View>
          <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
          <View style={styles.action}>
            <Feather name={'lock'} color={COLORS.dark_Blue} size={20} />
            <TextInput
              placeholder={TEXT_ENTER_PASSWORD}
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => textInputChange({name: 'Password', val})}
            />
            <TouchableOpacity onPress={() => updateSecurityTextEntry()}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color={COLORS.grey} size={20} />
              ) : (
                <Feather name="eye" color={COLORS.grey} size={20} />
              )}
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigate(FORGOTPASSWORD)}
            style={{marginTop: 15, alignItems: 'flex-end', paddingRight: 10}}>
            <Text style={{fontSize: 16, color: COLORS.aqua_Blue}}>
              {TEXT_FORGOT_PASSWORD}
            </Text>
          </TouchableOpacity>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => Submit_LoginData()}>
              <LinearGradient
                colors={[COLORS.btn_linear_1_up, COLORS.btn_linear_2_down]}
                style={styles.signIn}>
                <Text style={[styles.textSign, {color: COLORS.white}]}>
                  {TEXT_SIGN_IN}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate(REGISTER)}
              style={[
                styles.signIn,
                {
                  borderColor: COLORS.aqua_Blue,
                  marginTop: 15,
                  borderWidth: 1,
                },
              ]}>
              <Text style={[styles.textSign, {color: COLORS.aqua_Blue}]}>
                {TEXT_SIGN_UP}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default LoginComponent;
