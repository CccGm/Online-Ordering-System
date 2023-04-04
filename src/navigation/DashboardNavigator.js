import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetails from '../components/common/ProductCardDetails';
import DrawerNavigator from './DrawerNavigator';
import TabNavigator from './TabNavigator';
import {
  CHANGEPASSWORD,
  DRAWER_TAB_N,
  HISTORY,
  LIKE,
  PRODUCTDETAILS,
} from '../constants/routeName';
import ChangePassword from '../components/ChangePassword';
import LikeScreen from '../screens/LikeScreen';
import HistoryScreen from '../screens/HistoryScreen';

const Stack = createNativeStackNavigator();

const DashboardNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={DRAWER_TAB_N}
        component={(DrawerNavigator, TabNavigator)}
      />
      <Stack.Screen name={PRODUCTDETAILS} component={ProductDetails} />
      <Stack.Screen name={CHANGEPASSWORD} component={ChangePassword} />
      <Stack.Screen name={LIKE} component={LikeScreen} />
      <Stack.Screen name={HISTORY} component={HistoryScreen} />
    </Stack.Navigator>
  );
};

export default DashboardNavigator;
