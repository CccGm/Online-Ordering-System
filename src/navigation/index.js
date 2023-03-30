import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import DashboardNavigator from './DashboardNavigator';
import {useDispatch, useSelector} from 'react-redux';
import {restoreStatus} from '../redux/Actions';
import {ActivityIndicator} from 'react-native-paper';

const AppRoute = () => {
  const {isLogin, loading} = useSelector(state => state.LoginReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreStatus());
  }, [restoreStatus]);
  return (
    <NavigationContainer>
      {loading ? (
        <ActivityIndicator />
      ) : isLogin == true ? (
        <DashboardNavigator />
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
};

export default AppRoute;
