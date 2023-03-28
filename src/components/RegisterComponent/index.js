import React, {useState} from 'react';
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

const RegisterComponent = () => {
  const {navigate} = useNavigation();
  const [data, setData] = useState({
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const [form, setForm] = useState(null);

  const textInputChange = ({name, val}) => {
    setForm({...form, [name]: val});
  };

  const Submit_RegisterData = () => {
    if (form != null) {
      if (!form.Name) {
        Alert.alert('Alert', 'Pleaser Insert Name');
      }
      if (!form.Mo_No) {
        Alert.alert('Alert', 'Pleaser Insert Mo Number');
      }
      if (!form.Email) {
        Alert.alert('Alert', 'Pleaser Insert Email');
      }
      if (!form.Password) {
        Alert.alert('Alert', 'Pleaser Insert Password');
      }
      if ((form.Name && form.Email && form.Mo_No && form.Password) != '') {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.Email)) {
          Alert.alert('Success', 'Data Submited!');
          navigate(OTPVERIFY);
        } else {
          Alert.alert('Alert', 'email not valid');
        }
      }
    } else {
      Alert.alert('Alert', 'Pleaser Insert All Data');
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
        <Text style={styles.text_header}>Register here!</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <ScrollView>
          <Text style={styles.text_footer}>Name</Text>
          <View style={styles.action}>
            <FontAwesome name={'user-o'} color="#05375a" size={20} />
            <TextInput
              placeholder="Your Name"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => textInputChange({name: 'Name', val})}
            />
            {/* 
          <Animatable.View animation={'bounceIn'}>
            <Feather name="check-circle" color="green" size={20} />
          </Animatable.View> */}
          </View>
          <Text style={styles.text_footer}>Mobile Noumber</Text>
          <View style={styles.action}>
            <FontAwesome name={'user-o'} color="#05375a" size={20} />
            <TextInput
              placeholder="Your Noumber"
              style={styles.textInput}
              keyboardType="number-pad"
              autoCapitalize="none"
              onChangeText={val => textInputChange({name: 'Mo_No', val})}
            />
            {/* <Animatable.View animation={'bounceIn'}>
            <Feather name="check-circle" color="green" size={20} />
          </Animatable.View> */}
          </View>
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
            {/* {data.check_textInputChange ? (
            <Animatable.View animation={'bounceIn'}>
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null} */}
          </View>
          <Text style={[styles.text_footer]}>Password</Text>
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
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => Submit_RegisterData()}>
              <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={styles.signIn}>
                <Text style={[styles.textSign, {color: '#fff'}]}>Sign Up</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate(LOGIN)}
              style={[
                styles.signIn,
                {borderColor: '#009387', marginTop: 15, borderWidth: 1},
              ]}>
              <Text style={[styles.textSign, {color: '#009387'}]}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default RegisterComponent;
