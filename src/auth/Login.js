import { transform } from "@babel/core";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Animated, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { png } from '../assets/images/index';

const { width, height } = Dimensions.get('window');


const Login = ({ navigation }) => {
    const [text, setText] = useState("")
    const [fullText, setFullText] = useState(
        "Wellcom Back please Sign in"
    )
    const [index, setIndex] = useState(0)

    // var typed = new Typed(text1, {
    //     strings: [ "Web Developer", "Designer", "Front End Development"],
    //     typeSpeed: 100,
    //     backSpeed: 60,
    //     loop: true
    // });
    const [img, setImg] = useState(new Animated.Value(
        Dimensions.get('window').width - 392));
    const [moveAnimat, setMoveAnimat] = useState(new Animated.Value(
        Dimensions.get('window').width - 392));
    const [btn, setBtn] = useState(new Animated.Value(
        Dimensions.get('window').width));
    const [lbtn, setlBtn] = useState(new Animated.Value(
        Dimensions.get('window').width - 392))
const [top, setTop] = useState(new Animated.Value(
        Dimensions.get('window').width))
const [isSkip, setSkip] = useState(false);
let rotateValueHolder = new Animated.Value(0);
const startImageRotateFunction = () => {
  rotateValueHolder.setValue(0);
  Animated.timing(rotateValueHolder, {
    toValue: 1,
    duration: 3000,
    easing: Easing.linear,
    useNativeDriver: false,
  }).start(() => startImageRotateFunction());
};

const rotateData = rotateValueHolder.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg'],
});
    const leftToRight = () => {
        Animated.parallel([
            Animated.timing(moveAnimat, {
                toValue: Dimensions.get('window').width - 600,
                duration: 1000,
                useNativeDriver: false,
            }),
            Animated.timing(btn, {
                toValue: Dimensions.get('window').width - 392,
                duration: 1000,
                useNativeDriver: false,
            }),
            Animated.timing(lbtn, {
                toValue: Dimensions.get('window').width * 1.2,
                duration: 1000,
                useNativeDriver: false,
            }),
            Animated.timing(img, {
                toValue: Dimensions.get('window').width,
                duration: 1000,
                useNativeDriver: false,
            }),
            // Animated.timing(top, {
            //     toValue: Dimensions.get('window').width - 392,
            //     duration: 1000,
            //     useNativeDriver: false,
            // }),
        ]).start();
        setSkip(true);
    };

    useEffect(() => {
        if (index < fullText.length) {
            setTimeout(() => {
                setText(text + fullText[index])
                setIndex(index + 1)
            }, 40)
        }
    }, [index])
    const Right = () => {
        Animated.parallel([
            Animated.timing(moveAnimat, {
                toValue: new Animated.Value(
                    Dimensions.get('window').width - 392),
                duration: 1000,
                useNativeDriver: false,
            }),
            Animated.timing(btn, {
                toValue: Dimensions.get('window').width,
                duration: 1000,
                useNativeDriver: false,
            }),
            Animated.timing(lbtn, {
                toValue: new Animated.Value(
                    Dimensions.get('window').width - 392),
                duration: 1000,
                useNativeDriver: false,
            }),
            Animated.timing(img, {
                toValue: Dimensions.get('window').width - 392,
                duration: 1000,
                useNativeDriver: false,
            }),
            // Animated.timing(top, {
            //     toValue: Dimensions.get('window').width,
            //     duration: 1000,
            //     useNativeDriver: false,
            // }),
        ]).start();
        setSkip(false);
    };
    const submit = () => {
        navigation.navigate('Home');
    }

    return (
        <LinearGradient
                        start={{ x: 1.0, y: 0.2 }}
                        end={{ x: 0.5, y: 2 }}
                        colors={['#9c0420', '#602dd4']}s
            style={{
                flex: 1,
                justifyContent: 'flex-end'
            }}
        >
            <Animated.View
                style={{
                    ...StyleSheet.absoluteFill,
                    transform: [{ translateY: moveAnimat }]
                }}
            >
                <Animated.Image
                    source={png}
                    style={{ flex: 1, height: null, width: null, borderBottomRightRadius: img, borderBottomLeftRadius: img }}
                />
               {isSkip == true ?  <Animated.View style={{
                    justifyContent:'center',
                    alignItems:'center',
                    left:top
                }}>
                    <TouchableOpacity onPress={Right}>
                    <LinearGradient
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 0.5, y: 2 }}
                        colors={['#9c0420', '#602dd4']}
                        style={
                            {
                                height: 40,
                                width: 40,
                                justifyContent: 'center',
                                borderRadius: 50,
                                bottom: 20,
                            }}>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Animated.Text style={{
                                color: '#fff',
                                fontSize: 18,
                                fontWeight: 'bold',
                                transform: [{rotate: rotateData}]
                            }}>
                                X
                            </Animated.Text>
                        </View>
                    </LinearGradient>
                    </TouchableOpacity>
                </Animated.View>
                : null
                }
                {/* <Animated.View
                    style={{
                        paddingVertical:10,
                        backgroundColor:'#000',
                        zIndex:1030,
                    }}
                /> */}
            </Animated.View>
            <Animated.View style={{ height: height / 3, justifyContent: 'center', top: lbtn }}>
                <TouchableOpacity
                    onPress={() => leftToRight()}
                    style={{ marginHorizontal: 30 }}
                >
                    <LinearGradient
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 0.5, y: 2 }}
                        colors={['#9c0420', '#602dd4']}
                        style={
                            {
                                height: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 15
                            }}>
                        <Animated.Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' ,
                    }}>
                            {text}
                        </Animated.Text>
                    </LinearGradient>
                </TouchableOpacity>
            </Animated.View>
            <Animated.View style={{ height: height / 3, justifyContent: 'center', right: btn }}>
                <View>
                    <TextInput
                        placeholder="Phone"
                        placeholderTextColor='#9c0420'
                        style={{
                            borderColor: '#9c0420',
                            marginHorizontal: 20,
                            fontSize: 18,
                            fontWeight: 'bold',
                            borderRadius: 10,
                            marginVertical: 20,
                            borderWidth: 1,
                            paddingHorizontal: 10
                        }} />
                </View>
                {/* <View>
                <TextInput 
                placeholder=""
                style={{
                    backgroundColor:'#2E71DC',
                    marginHorizontal:20,
                    fontSize: 18,
                    fontWeight: 'bold',
                    borderRadius:10
                }}/>
            </View> */}
                <TouchableOpacity
                    onPress={submit}
                    style={{ marginHorizontal: 80 }}
                >
                    <LinearGradient
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 0.5, y: 2 }}
                        colors={['#9c0420', '#602dd4']}
                        style={
                            {
                                height: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 15
                            }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                            SIGN
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </Animated.View>
        
            </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: 'white',
        height: 70,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
    }
});
export default Login;