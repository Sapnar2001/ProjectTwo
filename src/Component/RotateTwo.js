import { Text, View, Animated, StyleSheet, Dimensions } from 'react-native'
import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class RotateTwo extends Component {

    constructor() {
        super();
        this.state = {
            xAxis: new Animated.Value(0),
            yAxis: new Animated.Value(0),
            xAxisOne: new Animated.Value(0),
            FirstYAxis: new Animated.Value(0),
            SecondXAxis: new Animated.Value(0),
            SecondYAxis: new Animated.Value(0),
            ThirdXAxis: new Animated.Value(0),
            ThirdYAxis: new Animated.Value(0),
            fadeText: new Animated.Value(0),
            fadeTextSpin: new Animated.Value(0),
        };
    }

    InitialWidth = Dimensions.get('screen').width;

    InitialHeight = Dimensions.get('screen').height;

    componentDidMount = () => {

        Animated.loop(Animated.timing(this.state.xAxis, {
            toValue: this.InitialWidth - 133,
            duration: 5000,
            useNativeDriver: false
        })).start();

        Animated.loop(Animated.timing(this.state.yAxis, {
            toValue: this.InitialHeight - 160,
            duration: 5000,
            useNativeDriver: false
        })).start();

        Animated.loop(Animated.timing(this.state.xAxisOne, {
            toValue: -this.InitialWidth + 140,
            duration: 5000,
            useNativeDriver: false,
        })).start();

        Animated.loop(Animated.timing(this.state.FirstYAxis, {
            toValue: this.InitialHeight - 160,
            duration: 5000,
            useNativeDriver: false
        })).start();

        Animated.loop(Animated.timing(this.state.SecondXAxis, {
            toValue: this.InitialWidth-143,
            duration: 5000,
            useNativeDriver: false,
        })).start();

        Animated.loop(Animated.timing(this.state.SecondYAxis, {
            toValue: -this.InitialHeight+155,
            duration: 5000,
            useNativeDriver: false
        })).start();

        Animated.loop(Animated.timing(this.state.ThirdXAxis, {
            toValue: -this.InitialWidth+143,
            duration: 5000,
            useNativeDriver: false,
        })).start();

        Animated.loop(Animated.timing(this.state.ThirdYAxis, {
            toValue: -this.InitialHeight+155,
            duration: 5000,
            useNativeDriver: false
        })).start();

       Animated.loop(Animated.timing(this.state.fadeText, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: false
        })).start();

        Animated.loop(Animated.timing(this.state.fadeTextSpin, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: false
        })).start();
    }


    render() {
        return (
            <View style={styles.main}>
                {/* <TouchableOpacity onPress={crossText}> */}

                <Animated.View style={[styles.textOne,{ opacity: this.state.fadeText }]}>
                    <Animated.Text style={[styles.mainText, {
                        transform: [
                            { translateX: this.state.xAxis },
                            { translateY: this.state.yAxis },
                            {
                                rotate: this.state.fadeTextSpin.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ['0deg', '2520deg'],
                                })
                            },

                        ]
                    }]}>
                        Task 1
                    </Animated.Text>
                </Animated.View>

                <Animated.View style={[styles.textTwo,{ opacity: this.state.fadeText }]}>
                    <Animated.Text style={[styles.mainText, {
                        transform: [
                            { translateX: this.state.xAxisOne },
                            { translateY: this.state.FirstYAxis },
                            {
                                rotate: this.state.fadeTextSpin.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ['0deg', '2520deg'],
                                })
                            },

                        ]
                    }]}>
                        Task 2
                    </Animated.Text>
                </Animated.View>

                <Animated.View style={[styles.textThree,{ opacity: this.state.fadeText }]}>
                    <Animated.Text style={[styles.mainText, {
                        transform: [
                            { translateX: this.state.SecondXAxis },
                            { translateY: this.state.SecondYAxis },
                            {
                                rotate: this.state.fadeTextSpin.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ['0deg', '2520deg'],
                                })
                            },
                        ]
                    }]}>
                        Task 3
                    </Animated.Text>
                </Animated.View>

                <Animated.View style={[styles.textFour,{ opacity: this.state.fadeText }]}>
                    <Animated.Text style={[styles.mainText, {
                        transform: [
                            { translateX: this.state.ThirdXAxis },
                            { translateY: this.state.ThirdYAxis },
                            {
                                rotate: this.state.fadeTextSpin.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ['0deg', '2520deg'],
                                })
                            },
                        ]
                    }]}>
                        Task 4
                    </Animated.Text>
                </Animated.View> 
                {/* </TouchableOpacity> */}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    textOne:{
        position:'absolute',
        left:0,
    },
    textTwo:{
        position:'absolute',
        right:0,
    },
    textThree:{
        position:'absolute',
        bottom:10,
        left:3,
    },
    textFour:{
        position:'absolute',
        bottom:10,
        right:3,
    },
    mainText: {
        color: 'red',
        fontSize: 30,
    },
});