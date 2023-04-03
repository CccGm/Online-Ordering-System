import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CART, DASHBOARD, PROFILE} from '../constants/routeName';
import DashboardScreen from '../screens/DashboardScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const cartData = useSelector(state => state.GetCartReducer);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconNmae;
          if (route.name === DASHBOARD) {
            iconNmae = focused ? 'home' : 'home-outline';
            size = focused ? 25 : 20;
            color = focused ? '#de3434' : '#555';
          } else if (route.name === CART) {
            iconNmae = focused ? 'cart' : 'cart-outline';
            size = focused ? 25 : 20;
            color = focused ? '#de3434' : '#555';
          } else if (route.name === PROFILE) {
            iconNmae = focused
              ? 'person-circle-sharp'
              : 'person-circle-outline';
            size = focused ? 25 : 20;
            color = focused ? '#de3434' : '#555';
          }
          return <Ionicons name={iconNmae} size={size} color={color} />;
        },
        headerShown: false,
        activeTintColor: '#de3434',
        inactiveTintColor: '#555',
        activeBackgroundColor: '#fff',
        inactiveBackgrondColor: '#999',
        labelStyle: {fontSize: 20},
      })}>
      <Tab.Screen name={DASHBOARD} component={DashboardScreen} />
      <Tab.Screen
        name={CART}
        component={CartScreen}
        options={{tabBarBadge: cartData.data.length}}
      />
      <Tab.Screen name={PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
