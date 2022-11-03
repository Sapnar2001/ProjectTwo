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
import NetworkAssign  from './src/Component/NetworkAssign';
import HomeScreen from './src/Component/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator();



  export default class App extends React.Component{
    constructor(props) {
      super(props);
      this.state = {value : false};
    }
    render(){

     
  return (
    
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="networkPart" component={HomeScreen} />
        <Stack.Screen name="network" component={NetworkAssign} />
        <Stack.Screen name="Animation1" component={Rotate} />
        <Stack.Screen name="Animation2" component={RotateTwo} />
        <Stack.Screen name="functionA" component={FunctionalAssignment} />
        </Stack.Navigator>
        </NavigationContainer>
    
  );
}
    }