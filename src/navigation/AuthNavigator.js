import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import {
  CHANGEPASSWORD,
  FORGOTPASSWORD,
  LOGIN,
  OTPFORGOTPASSWORD,
  OTPVERIFY,
  REGISTER,
  SPLASH,
} from '../constants/routeName';
import SplashScreen from '../screens/SplashScreen';
import ForgotPassword from '../components/ForgotPassword';
import OTPVerify from '../components/OTPVerify';
import ChangePassword from '../components/ChangePassword';
import OTPForgotPassword from '../components/OTPForgotPassword';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SPLASH} component={SplashScreen} />
      <Stack.Screen name={LOGIN} component={LoginScreen} />
      <Stack.Screen name={REGISTER} component={RegisterScreen} />
      <Stack.Screen name={FORGOTPASSWORD} component={ForgotPassword} />
      <Stack.Screen name={OTPFORGOTPASSWORD} component={OTPForgotPassword} />
      <Stack.Screen name={OTPVERIFY} component={OTPVerify} />
      <Stack.Screen name={CHANGEPASSWORD} component={ChangePassword} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
