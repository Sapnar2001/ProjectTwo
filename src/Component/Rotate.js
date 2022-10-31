import React, { Component } from 'react';  
import {StyleSheet,Text, View,Animated,Easing} from 'react-native';  
  
export default class Rotate extends Component {  
    constructor () {  
        super();
        this.spinValue = new Animated.Value(0)
        this.fadeAnim = new Animated.Value(0)
    }  
    componentDidMount () {  
        this.spin()  
        this.fade()
    }   
    fade () {  
        this.fadeAnim.setValue(0)
        Animated.timing(    
            this.fadeAnim,
            {          
                toValue: 1, 
                duration: 1000, 
            }  
        ).start(() => this.fade())  
    }   
    spin () {  
        this.spinValue.setValue(0)
        Animated.timing(    
            this.spinValue,
            {          
                toValue: 1, 
                duration: 1000,
            }  
        ).start(() => this.spin())  
    }  
    render () {  
        
        const spin = this.spinValue.interpolate({  
            inputRange: [0,0.2,0.3,0.4,0.5,0.7,1],  
            outputRange: ['0deg', '190deg', '140deg','160deg', '-110deg', '-180deg', '360deg']  
        })  
        const textSize = this.spinValue.interpolate({  
            inputRange: [0, 1],  
            outputRange: [10, 100]  
        })  
        return (  
            <View style={styles.container}>  
                <Animated.View 
                    style={{
                        opacity:this.fadeAnim,
                    }
                    }
                > 
                <Animated.Text style={{
                    fontSize: textSize,
                    color: 'red',
                    transform: [{rotate: spin}],
                    }}>Task1</Animated.Text>
                </Animated.View> 
            </View>  
        )  
    }  
}  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center'  
    }  
})  
