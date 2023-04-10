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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import {OTPFORGOTPASSWORD, OTPVERIFY} from '../../constants/routeName';
import {useDispatch, useSelector} from 'react-redux';
import {
  Forgot_Password,
  Remove_Password_data,
} from '../../redux/action/ForgotPassword';
import {
  TEXT_ALERT,
  TEXT_ENTER_EMAIL,
  TEXT_ENTER_VALIDE_EMAIL,
  TEXT_GO_BACK,
  TEXT_SEND_OTP,
} from '../../constants/strings';
import {COLORS} from '../../assets/theme/colors';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const passwordData = useSelector(state => state.ForgotPasswordReducer);
  const dispatch = useDispatch();
  const [email, setEmail] = useState(null);

  useEffect(() => {
    if (passwordData.loading == false) {
      if (passwordData.data.status == 200) {
        navigation.navigate(OTPFORGOTPASSWORD);
        dispatch(Remove_Password_data());
      }
    }
  }, [passwordData]);

  const Submit_Data = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      dispatch(Forgot_Password(email));
    } else {
      Alert.alert(TEXT_ALERT, TEXT_ENTER_VALIDE_EMAIL);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.aqua_Blue} barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Forgot Password !</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name={'user-o'} color={COLORS.dark_Blue} size={20} />
          <TextInput
            placeholder={TEXT_ENTER_EMAIL}
            style={styles.textInput}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={val => setEmail(val)}
          />
        </View>

        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn} onPress={() => Submit_Data()}>
            <LinearGradient
              colors={[COLORS.btn_linear_1_up, COLORS.btn_linear_2_down]}
              style={styles.signIn}>
              <Text style={[styles.textSign, {color: COLORS.white}]}>
                {TEXT_SEND_OTP}
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

export default ForgotPassword;
