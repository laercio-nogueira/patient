import React, { Fragment } from 'react';
import { View } from 'react-native';
import StatusBar from 'react-native-custom-statusbar'
import Router from './src/routers'

export default function App() {
  return (
    <Fragment>
      <StatusBar backgroundColor="#0e5895" />
      <Router />
    </Fragment>
  );
}