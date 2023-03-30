import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import DashboardNavigator from './DashboardNavigator';
import {useDispatch, useSelector} from 'react-redux';
import {restoreStatus} from '../redux/action/Actions';
import SplashScreen from '../screens/SplashScreen';

const AppRoute = () => {
  const {isLogin, loading} = useSelector(state => state.LoginReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreStatus());
  }, [restoreStatus]);
  return (
    <NavigationContainer>
      {loading ? (
        <SplashScreen screen={true} />
      ) : isLogin == true ? (
        <DashboardNavigator />
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
};

export default AppRoute;
