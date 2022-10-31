import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Home from './src/Component/Home';
import Rotate from './src/Component/Rotate'
import FunctionalAssignment from './src/Component/FunctionalAssignment';
import RotateTwo from './src/Component/RotateTwo';
const Stack = createNativeStackNavigator();



  export default class App extends React.Component{
    render(){
  return (
    
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Animation1" component={Rotate} />
        <Stack.Screen name="Animation2" component={RotateTwo} />
        <Stack.Screen name="functionA" component={FunctionalAssignment} />
        </Stack.Navigator>
        </NavigationContainer>
    
  );
}
  }