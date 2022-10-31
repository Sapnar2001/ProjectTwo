import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

const BackButton = () => {
    // var Flatref=useRef(Null).current;
  return (
    <View>
    <TouchableOpacity style={styles.button} onPress={()=>{
        flatref=1
      }
      }>
                    <Text style={styles.buttonText}>Back to top</Text>
                </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
button: {
  backgroundColor: 'rgb(90,128,236)',
  width: "90%",
  marginTop: 50,
  marginLeft: 20,
  //    marginHorizontal:10,
},
buttonText: {
  fontSize: 18,
  color: "#fff",
  textAlign: "center",
  padding: 15,
}
});
export default BackButton