import React, { Fragment } from 'react';
import { View } from 'react-native';
import StatusBar from 'react-native-custom-statusbar'
import { Provider } from 'react-redux'
import Router from './src/routers'
import store from './src/store'

export default function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#0e5895" />
        <Router />
      </View>
    </Provider>
  );
}