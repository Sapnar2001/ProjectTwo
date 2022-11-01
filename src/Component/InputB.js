import { View, Text,TextInput,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import BackButton from './BackButton'

const InputB = (props) => {
  return (
    <View style={{flexDirection:'row',  justifyContent:'space-around'}}>
       <View style={{padding: 10 , margin:20}}>
      <TextInput
        style={styles.InputBox}
        placeholder="Type a Id"
        onChangeText= {(text) => props.setText(parseInt(text))}
        value=  {props.text}
      />
    </View>
    <View>
    <TouchableOpacity style={styles.button} onPress={props.goToFunction} >
                    <Text style={styles.buttonText}>Go</Text>
                </TouchableOpacity>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
    InputBox:{
        // borderRadius: 5,
        // width: 300,
        // padding:30,
        borderWidth: 5,
        borderColor:'black',
        width: "100%",
        borderWidth: 1,
        height:30,
        width:200,
        textAlign:'center',
        // margin:40,
    },
        button: {
          backgroundColor: 'rgb(90,128,236)',
          marginTop:30,
          height:30,
          width:70,
          //    marginHorizontal:10,
        },
        buttonText: {
          fontSize: 15,
          color: "#fff",
          textAlign: "center",
          marginTop:6,
        }
})

export default InputB
{/* <View style={{flexDirection:'row',  justifyContent:'space-around'}}>
       <View style={{padding: 10 , margin:20}}>
      <TextInput
        style={styles.InputBox}
        value={text}
        placeholder="Type a Id"
        onChangeText={(text)=>{
          setText(text)
        }}
      />
    </View>
    <View>
    <TouchableOpacity style={styles.button1}  onPress={GoTo}>
                    <Text style={styles.buttonText1}>Go</Text>
                </TouchableOpacity>
    </View>
    </View> */}