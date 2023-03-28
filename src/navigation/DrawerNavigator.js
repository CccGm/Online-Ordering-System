import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DASHBOARD, LIKE, PROFILE} from '../constants/routeName';
import DashboardScreen from '../screens/DashboardScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LikeScreen from '../screens/LikeScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={DASHBOARD} component={DashboardScreen} />
      <Drawer.Screen name={LIKE} component={LikeScreen} />
      <Drawer.Screen name={PROFILE} component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
