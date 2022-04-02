import { transform } from "@babel/core";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Animated, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { png } from '../assets/images/index';

const { width, height } = Dimensions.get('window');


const Login = ({navigation}) => {
    const [text, setText] = useState("")
    const [fullText, setFullText] = useState(
        "Wellcom Back pleace Sign in"
      )
    const [index, setIndex] = useState(0)
    
    // var typed = new Typed(text1, {
    //     strings: [ "Web Developer", "Designer", "Front End Development"],
    //     typeSpeed: 100,
    //     backSpeed: 60,
    //     loop: true
    // });
    const [moveAnimat, setMoveAnimat] = useState(new Animated.Value(
        Dimensions.get('window').width - 392));
    const [btn, setBtn] = useState(new Animated.Value(
        Dimensions.get('window').width));
    const [lbtn, setlBtn] = useState(new Animated.Value(
        Dimensions.get('window').width - 392))

    const leftToRight = () => {
        Animated.parallel([
            Animated.timing(moveAnimat, {
                toValue: Dimensions.get('window').width - 650,
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
        ]).start();
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
        ]).start();
    };
    const submit=()=>{
        navigation.navigate('Home');
        Right()
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white',
                justifyContent: 'flex-end'
            }}
        >
            <Animated.View
                style={{
                    ...StyleSheet.absoluteFill,
                    transform: [{ translateY: moveAnimat }]
                }}
            >
                <Image
                    source={png}
                    style={{ flex: 1, height: null, width: null }}
                />
            </Animated.View>
            <Animated.View style={{ height: height / 3, justifyContent: 'center', top: lbtn }}>
                <TouchableOpacity
                    onPress={() => leftToRight()}
                    style={{marginHorizontal:30}}
                    >
                    <LinearGradient
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 0.5, y: 2 }}
                        colors={['#9c0420', '#602dd4']}
                        style={
                            {
                                height: 50,
                                justifyContent:'center',
                                alignItems:'center',
                                borderRadius:15
                        }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                            {text}
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </Animated.View>
            <Animated.View style={{ height: height / 3, justifyContent: 'center', right: btn }}>
                <View>
                    <TextInput
                        placeholder="Phone"
                        placeholderTextColor='#9c0420'
                        style={{
                            borderColor:'#9c0420',
                            marginHorizontal: 20,
                            fontSize: 18,
                            fontWeight: 'bold',
                            borderRadius: 10,
                            marginVertical: 20,
                            borderWidth:1,
                            paddingHorizontal:10
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
                    style={{marginHorizontal:80 }}
                    >
                    <LinearGradient
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 0.5, y: 2 }}
                        colors={['#9c0420', '#602dd4']}
                        style={
                            {
                                height: 50,
                                justifyContent:'center',
                                alignItems:'center',
                                borderRadius:15
                        }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                            SIGN
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </Animated.View>
        </View>
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