/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import AppRoute from './src/navigation';
import {Store} from './src/redux/Store';

function App(): JSX.Element {
  return (
    <Provider store={Store}>
      <SafeAreaView style={{flex: 1}}>
        <AppRoute />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
