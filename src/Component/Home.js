import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class Home extends React.Component {
  render() {
      return (
          <View style={styles.main} >
              <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Animation1')} navigation={this.props.navigation} >
                  <Text style={styles.buttonText}>ANIMATION_ASSIGNMENT1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Animation2')} navigation={this.props.navigation} >
                  <Text style={styles.buttonText}>ANIMATION_ASSIGNMENT2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('functionA')} navigation={this.props.navigation} >
                  <Text style={styles.buttonText}>REACT_HOOKS</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() =>{
                AsyncStorage.getItem('user').then((data) => {
                    if(data){
                        this.props.navigation.navigate('networkPart')
                    }else{
                        this.props.navigation.navigate('network')
                    }
                }).catch(() => {})
              }} navigation={this.props.navigation} >
                  <Text style={styles.buttonText}>PERSISTANCE NETWORK CALLS</Text>
              </TouchableOpacity>
              </View>
              )
      }}
      const styles = StyleSheet.create({

        main: {
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: "column",
            textAlign: 'center',
        },
        button: {
            textAlign: 'center',
            backgroundColor: 'rgb(90,128,236)',
            width: "65%",
            height: 60,
            margin: 10,
            justifyContent: 'center'
            //    marginHorizontal:10,
        },
        buttonText: {
            textAlign: 'center',
            color: 'white',
        },
    });