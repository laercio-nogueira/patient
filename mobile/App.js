import React, { Fragment } from 'react';
import { View } from 'react-native';
import StatusBar from 'react-native-custom-statusbar'
import Router from './src/routers'

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#0e5895" />
      <Router />
    </View>
  );
}