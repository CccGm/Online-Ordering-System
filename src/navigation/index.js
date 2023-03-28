import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import DashboardNavigator from './DashboardNavigator';

const AppRoute = () => {
  return (
    <NavigationContainer>
      {/* <AuthNavigator /> */}
      <DashboardNavigator />
    </NavigationContainer>
  );
};

export default AppRoute;
