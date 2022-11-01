import {SafeAreaView, Text, FlatList, Image, View,TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import React,{useRef,useState, useCallback} from 'react';
import BackButton from './BackButton';
import InputB from './InputB';

const DATA = [
    {
      id: 101,
      imageUrl: 'https://source.unsplash.com/1600x900/?beach',
    },
    {
      id: 102,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 103,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 104,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 105,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 106,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 107,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 108,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 109,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 110,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 111,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 112,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 113,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 114,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 115,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 116,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 117,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 118,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 119,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 120,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 121,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 122,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 123,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 124,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 125,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 126,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 127,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 128,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 129,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 130,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 131,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 132,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 133,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 134,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 135,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 136,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 137,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 138,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 139,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 140,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
  ];

const FunctionalAssignment = () => {
const [text,setText]=useState('');
const [buton,setButon]=useState(false);

// const [ref, setRef] = useState(null);

  let flatref=useRef(null).current;
  // const buttonHandler=()=>{
  //   this.flatref.scrollToOffset({0, true });
  // }
  console.log(text);
  const GoTo=()=>{
    const id = DATA.findIndex((item) => item.id === text);
    flatref.scrollToIndex({
      index:id,
      animated: false
     });
     setText('')
  }
  const chngeValue=()=>{
setButon(true)
  }
  const BackToGo=()=>{
    flatref.scrollToOffset({
      offset:20,
      animated:true

    })
    setButon(false)
  }
  const onScrollEvent = ({contentOffset}) => {
    console.log(contentOffset.y);
    return contentOffset.y <= 10487
  };

  const _getItemLayout = useCallback((_, index) => ({
    length: 270,
    offset: 270 * index,
    index,
  }));

  return (
    <SafeAreaView style={{flex:1}}>
    <InputB text = {text} setText = {setText} goToFunction = {GoTo} />
      <FlatList
     onEndReached={chngeValue}
      ref={(ref) => {
        flatref = ref;
      }}
        style={styles.flatView}
        getItemLayout = {_getItemLayout}
        data={DATA} 
        keyExtractor = {(item, index) => `${index + item.id}`}
        onScroll={({nativeEvent}) => {
          if(onScrollEvent(nativeEvent)){
            setButon(false)
          }
        }}
        renderItem={({item, index}) => {
          return (
            <View key={index} style={styles.mainView}>
              <View>
                <Text
                  style={styles.mainText}>
                  {item.id}
                </Text>
              </View>
              <View>
               <Image
                  source={{uri: item.imageUrl}}
                  style={styles.mainImage}
                />
              </View>
            </View>
          );
        }}
        
      />
    {buton   &&(<BackButton BackToFunction={BackToGo}/>)}
                
    </SafeAreaView>
    
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgb(90,128,236)',
    width: "90%",
    marginTop: 50,
    marginLeft: 20,
   
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    padding: 15,
  },
    button1: {
      backgroundColor: 'rgb(90,128,236)',
      marginTop:30,
      height:30,
      width:70,
      //    marginHorizontal:10,
    },
    buttonText1: {
      fontSize: 15,
      color: "#fff",
      textAlign: "center",
      marginTop:6,
    },
    mainText:
    {
      paddingVertical: 10,
      fontSize: 15,
      paddingStart: 5,
      paddingEnd: 16,
      color: 'black',
      textAlign:'center'
    },
    mainImage:{
      height: 200, width: 200, alignSelf:'center', margin:10,
    },
    mainView:{
      backgroundColor: '#529FF3', margin: 10, justifyContent:'center'
    },
    flatView:{
      flex: 1,backgroundColor:'grey'
    }
  });

export default FunctionalAssignment;
