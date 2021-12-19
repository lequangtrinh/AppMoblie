import { StatusBar } from 'react-native';
import React from 'react';
import { View } from 'react-native-animatable';
import Router from './src/config/Router'
import Types from './src/scenes/types'
import {NavigationContainer} from '@react-navigation/native'
export default function App() {
  return (
 
  <View style={{flex:1}}>
 
  <Router></Router>
  </View>
  );
}
