import {
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = props => {
  const [userInfo, setUserInfo] = useState({});
  const navigation = useNavigation();
  const _clearAll = async () => {
    try {
      await AsyncStorage.clear();
      console.log('Done');
    } catch (error) {
      console.log(error);
    }
  };
  logoutFunction = () => {
    Alert.alert('Alert Title', 'Do you want to logout', [
      {
        text: 'NO',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'YES',
        onPress: () => {
          _clearAll();
          navigation.replace('network');
        },
      },
    ]);
  };
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    AsyncStorage.getItem('user').then(data => {
      setUserInfo(JSON.parse(data));
    });
  };
  console.log('userInfo ======>', userInfo);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'lightblue'}}>
      <Text style={styles.MainText}>Data are:</Text>
      <Text style={styles.text}>Name Is:{userInfo?.name}</Text>
      <Text style={styles.text}>Email Is:{userInfo?.email}</Text>
      <Text style={styles.text}> Phone Number is:{userInfo?.phone}</Text>
      <Text style={styles.text}>password is:{userInfo?.password}</Text>
      <TouchableOpacity style={styles.button} onPress={logoutFunction}>
        <Text style={{color: 'white'}}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  MainText: {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 50,
    color: 'black',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  inputView: {
    borderRadius: 30,
    width: '90%',
    height: 55,
    marginBottom: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  textInput: {
    height: 50,
    flex: 1,
    padding: 20,
  },
  button: {
    width: 200,
    height: 50,
    borderRadius: 30,
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 50,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button1: {
    width: 200,
    height: 50,
    borderRadius: 30,
    position: 'absolute',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    left: 20,
  },
});

export default HomeScreen;

// onPress={() => {
//     navigation.navigate('network');
//   }}>

// const newObj = {...obj}
// newObj.obj1.val1 = 10;
// console.log(obj.obj1.val1);
// const obj = {
//   name: "Himanshu",
//   age: 28,
//   obj1: {
//     val1: 1,
//     val2: 2
//   }
// }
