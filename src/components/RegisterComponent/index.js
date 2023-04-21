import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  View,
} from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import {LOGIN, OTPVERIFY} from '../../constants/routeName';
import {useDispatch, useSelector} from 'react-redux';
import {Register_User} from '../../redux/action/Actions';
import {
  TEXT_ALERT,
  TEXT_EMAIL,
  TEXT_ENTER_ALL_CREDENCIALS,
  TEXT_ENTER_EMAIL,
  TEXT_ENTER_MO_NO,
  TEXT_ENTER_NAME,
  TEXT_ENTER_PASSWORD,
  TEXT_ENTER_VALIDE_EMAIL,
  TEXT_MOBILE_NO,
  TEXT_NAME,
  TEXT_PASSWORD,
  TEXT_REGISTER_HERE,
  TEXT_SIGN_IN,
  TEXT_SIGN_UP,
} from '../../constants/strings';
import {COLORS} from '../../assets/theme/colors';

const RegisterComponent = () => {
  const dispatch = useDispatch();
  const registerData = useSelector(state => state.RegisterReducer);
  const {navigate} = useNavigation();
  const [data, setData] = useState({
    check_textInputChange: false,
    secureTextEntry: true,
  });

  useEffect(() => {
    if (registerData.loading == false) {
      if (registerData.data.status == 1) {
        navigate(OTPVERIFY);
      }
    }
  }, [registerData]);

  const [form, setForm] = useState(null);

  const textInputChange = ({name, val}) => {
    setForm({...form, [name]: val});
  };

  const Submit_RegisterData = () => {
    if (form != null) {
      if (!form.Name) {
        Alert.alert(TEXT_ALERT, TEXT_ENTER_NAME);
      } else if (!form.Mo_No) {
        Alert.alert(TEXT_ALERT, TEXT_ENTER_MO_NO);
      } else if (!form.Email) {
        Alert.alert(TEXT_ALERT, TEXT_ENTER_EMAIL);
      } else if (!form.Password) {
        Alert.alert(TEXT_ALERT, TEXT_ENTER_PASSWORD);
      } else if (
        (form.Name && form.Email && form.Mo_No && form.Password) != ''
      ) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.Email)) {
          dispatch(Register_User(form));
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
        <Text style={styles.text_header}>{TEXT_REGISTER_HERE}</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <ScrollView>
          <Text style={styles.text_footer}>{TEXT_NAME}</Text>
          <View style={styles.action}>
            <FontAwesome name={'user-o'} color={COLORS.dark_Blue} size={20} />
            <TextInput
              placeholder={TEXT_ENTER_NAME}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => textInputChange({name: 'Name', val})}
            />
          </View>
          <Text style={styles.text_footer}>{TEXT_MOBILE_NO}</Text>
          <View style={styles.action}>
            <FontAwesome name={'user-o'} color={COLORS.dark_Blue} size={20} />
            <TextInput
              placeholder={TEXT_ENTER_MO_NO}
              style={styles.textInput}
              keyboardType="number-pad"
              autoCapitalize="none"
              onChangeText={val => textInputChange({name: 'Mo_No', val})}
            />
          </View>
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
          <Text style={[styles.text_footer]}>{TEXT_PASSWORD}</Text>
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
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => Submit_RegisterData()}>
              <LinearGradient
                colors={[COLORS.btn_linear_1_up, COLORS.btn_linear_2_down]}
                style={styles.signIn}>
                <Text style={[styles.textSign, {color: COLORS.white}]}>
                  {TEXT_SIGN_UP}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate(LOGIN)}
              style={[
                styles.signIn,
                {borderColor: COLORS.aqua_Blue, marginTop: 15, borderWidth: 1},
              ]}>
              <Text style={[styles.textSign, {color: COLORS.aqua_Blue}]}>
                {TEXT_SIGN_IN}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default RegisterComponent;
