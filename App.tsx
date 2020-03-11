import React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {TopNavigatorConnected} from './src/navigation/Navigator';
import {store} from './src/state/store';

const App: React.SFC = () => (
  <Provider store={store}>
    <StatusBar barStyle="dark-content" />
    <TopNavigatorConnected />
  </Provider>
);

export default App;
