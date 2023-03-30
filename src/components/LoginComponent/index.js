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

const LoginComponent = () => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const loginData = useSelector(state => state.LoginReducer);
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
          Alert.alert('Warning', 'Please Enter Email');
        } else {
          Alert.alert('Warning', 'Please Enter Password');
        }
      } else {
        if (
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Lform.Email) &&
          Lform.Password != ''
        ) {
          dispatch(Login_User(Lform));
        } else {
          Alert.alert('Warning', 'Enter Valid Email');
        }
      }
    } else {
      Alert.alert('Warning', 'Please Enter Login Credentials');
    }
  };

  const updateSecurityTextEntry = () => {
    setData({
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome back !</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
            <FontAwesome name={'user-o'} color="#05375a" size={20} />
            <TextInput
              placeholder="Your Email"
              style={styles.textInput}
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={val => textInputChange({name: 'Email', val})}
            />
          </View>
          <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
          <View style={styles.action}>
            <Feather name={'lock'} color="#05375a" size={20} />
            <TextInput
              placeholder="Your Password"
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
          <TouchableOpacity
            onPress={() => navigate(FORGOTPASSWORD)}
            style={{marginTop: 15, alignItems: 'flex-end', paddingRight: 10}}>
            <Text style={{fontSize: 16, color: '#009387'}}>
              Forgot Password !
            </Text>
          </TouchableOpacity>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => Submit_LoginData()}>
              <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={styles.signIn}>
                <Text style={[styles.textSign, {color: '#fff'}]}>Sign In</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate(REGISTER)}
              style={[
                styles.signIn,
                {borderColor: '#009387', marginTop: 15, borderWidth: 1},
              ]}>
              <Text style={[styles.textSign, {color: '#009387'}]}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default LoginComponent;
