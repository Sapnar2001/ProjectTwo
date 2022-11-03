import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
// let list=[];

const NetworkAssign = props => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const navigation = useNavigation();

  const change = (val, key) => {
    setUserInfo({
      ...userInfo,
      [key]: val,
    });
  };

  const inputView = [
    {
      type: 'name',
      imageUri: 'https://cdn-icons-png.flaticon.com/512/747/747376.png',
      Txt: 'Name',
    },
    {
      type: 'email',
      imageUri: 'https://cdn-icons-png.flaticon.com/128/646/646094.png',
      Txt: 'Email',
    },
    {
      type: 'phone',
      imageUri: 'https://cdn-icons-png.flaticon.com/128/3415/3415074.png',
      Txt: 'Phone',
    },
    {
      type: 'password',
      imageUri: 'https://cdn-icons-png.flaticon.com/128/25/25215.png',
      Txt: 'Password',
    },
    {
      type: 'confirmPassword',
      imageUri: 'https://cdn-icons-png.flaticon.com/128/25/25215.png',
      Txt: 'Confirm Password',
    },
  ];

  const saveName = async () => {
    if(userInfo.name==''&&userInfo.phone==''&& userInfo.email==''&& userInfo.password=='')
    {
      alert('please add all the field')
    }
    else{
    await AsyncStorage.setItem('user', JSON.stringify(userInfo));
    try {
      navigation.replace('networkPart');
    } catch (err) {
      console.log(err);
    }
  }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'grey'}}>
      <View style={styles.mainView}>
        <View style={styles.space} />
        <View style={styles.mainContainer}>
          <View style={styles.space} />
          <View style={styles.header}>
            <Text style={styles.headerTxt}>Let's Get Started!</Text>
            <Text style={styles.headerInfoTxt}>
              Create an account to Q Allure to get all features
            </Text>
          </View>
          <View style={styles.form}>
            {inputView.map(item => {
              return (
                <View style={styles.inputSection}>
                  <Image
                    style={styles.inputIcon}
                    source={{uri: item.imageUri}}
                  />
                  <TextInput
                    style={styles.textInput}
                    placeholder={item.Txt}
                    onChangeText={val => {
                      change(val, item.type);
                    }}
                  />
                </View>
              );
            })}
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={styles.createBtn} onPress={saveName}>
              <Text style={styles.createText}>CREATE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  createBtn: {
    height: 50,
    width: '50%',
    backgroundColor: 'blue',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 30,
  },
  createText: {
    alignItems: 'center',
    color: 'white',
  },
  mainContainer: {
    // borderWidth: 1,
    marginHorizontal: 20,
    // marginVertical:20,
    backgroundColor: '#e5e4e2',
    borderRadius: 30,
  },
  space: {
    height: 80,
  },
  header: {
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerInfoTxt: {
    fontSize: 14,
    color: 'rgb(159,159,159)',
  },
  form: {
    alignItems: 'center',
    marginTop: 25,
  },
  inputSection: {
    flexDirection: 'row',
    // borderWidth:1,
    borderRadius: 30,
    width: '90%',
    height: 55,
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: 'white',
  },
  inputIcon: {
    height: 20,
    width: 20,
    marginHorizontal: 25,
  },
});

export default NetworkAssign;
