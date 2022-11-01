import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

const BackButton = (props) => {
    // var Flatref=useRef(Null).current;
  return (
    <View  style={{alignItems:'center'}}>
    <TouchableOpacity style={styles.button}  onPress={props.BackToFunction}>
                    <Text style={styles.buttonText}>Back to top</Text>
                </TouchableOpacity>
                </View>
  )
}
const styles = StyleSheet.create({
button: {
  backgroundColor: 'rgb(90,128,236)',
  marginTop: 10,
  position:'absolute',
  bottom:10,
},
buttonText: {
  fontSize: 18,
  color: "#fff",
  textAlign: "center",
  padding: 10,
}
});
export default BackButton