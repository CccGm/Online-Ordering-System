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

const ForgotPassword = () => {
  const navigation = useNavigation();
  const passwordData = useSelector(state => state.ForgotPasswordReducer);
  const dispatch = useDispatch();
  console.log(passwordData.data.status, 'forgot ----------');
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
      Alert.alert('Warning', 'Enter Valid Email');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Forgot Password !</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name={'user-o'} color="#05375a" size={20} />
          <TextInput
            placeholder="Your Email"
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
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}>
              <Text style={[styles.textSign, {color: '#fff'}]}>Send OTP</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[
              styles.signIn,
              {borderColor: '#009387', marginTop: 15, borderWidth: 1},
            ]}>
            <Text style={[styles.textSign, {color: '#009387'}]}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default ForgotPassword;
