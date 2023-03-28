import React, {useState} from 'react';
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

const ChangePassword = () => {
  const navigation = useNavigation();
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
      if (!Lform.OldPassword || !Lform.NewPassword) {
        if (!Lform.OldPassword) {
          Alert.alert('Warning', 'Please Enter Old Password');
        } else {
          Alert.alert('Warning', 'Please Enter New Password');
        }
      } else {
        if (Lform.OldPassword == Lform.NewPassword) {
          Alert.alert('Alert', 'New Password Not Same as Old Password !');
        } else {
          Alert.alert('Sucess', 'Password Updated');
        }
      }
    } else {
      Alert.alert('Warning', 'Please Enter All Credentials');
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
        <Text style={styles.text_header}>Change Password !</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.text_footer}>New Password</Text>
        <View style={styles.action}>
          <Feather name={'lock'} color="#05375a" size={20} />
          <TextInput
            placeholder="Your Old Password"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => textInputChange({name: 'OldPassword', val})}
          />
        </View>
        <Text style={[styles.text_footer, {marginTop: 35}]}>New Password</Text>
        <View style={styles.action}>
          <Feather name={'lock'} color="#05375a" size={20} />
          <TextInput
            placeholder="Your New Password"
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
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}>
              <Text style={[styles.textSign, {color: '#fff'}]}>
                Change Password
              </Text>
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

export default ChangePassword;
