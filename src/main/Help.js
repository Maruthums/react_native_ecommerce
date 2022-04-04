import React, { Component } from "react";
import {
    Animated,
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image
} from "react-native";
import {
    fruitsApple,
    img1,
    img,
    img3,
    img4,
    img5
} from '../assets/images/index';
import AppBar from "../component/Appbar";

const SCREEN_WIDTH = Dimensions.get("window").width;

const xOffset = new Animated.Value(0);
const data = [
    {
        name: 'data',
        img: img1
    },
    {
        name: 'data',
        img: img1
    },
    {
        name: 'data',
        img: img1
    },
    {
        name: 'data',
        img: img1
    },
    {
        name: 'data',
        img: img1
    },
]

const Screen = (props) => {
    return (
        <View style={styles.scrollPage}>
            <Animated.View style={[styles.screen, transitionAnimation(props.index)]}>
                <Image source={props.data.img}
                    style={{
                        // width:100
                    }} />
            </Animated.View>
        </View>
    );
};

const transitionAnimation = index => {
    return {
        transform: [
            { perspective: 800 },
            {
                scale: xOffset.interpolate({
                    inputRange: [
                        (index - 1) * SCREEN_WIDTH,
                        index * SCREEN_WIDTH,
                        (index + 1) * SCREEN_WIDTH
                    ],
                    outputRange: [0.25, 1, 0.25]
                })
            },
            {
                rotateX: xOffset.interpolate({
                    inputRange: [
                        (index - 1) * SCREEN_WIDTH,
                        index * SCREEN_WIDTH,
                        (index + 1) * SCREEN_WIDTH
                    ],
                    outputRange: ["45deg", "0deg", "45deg"]
                })
            },
            {
                rotateY: xOffset.interpolate({
                    inputRange: [
                        (index - 1) * SCREEN_WIDTH,
                        index * SCREEN_WIDTH,
                        (index + 1) * SCREEN_WIDTH
                    ],
                    outputRange: ["-45deg", "0deg", "45deg"]
                })
            }
        ]
    };
};

const Help = () => {

    return (
        <View>
            <AppBar screenName='Cart' />
            <Animated.ScrollView
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: xOffset } } }],
                    { useNativeDriver: true }
                )}
                horizontal
                pagingEnabled
                style={styles.scrollView}
            >
                {data.map((item, index) =>
                    <Screen data={item} index={index} />
                )}
            </Animated.ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flexDirection: "row",
    },
    scrollPage: {
        width: SCREEN_WIDTH,
        padding: 20
    },
    screen: {
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        backgroundColor: "white"
    },
    text: {
        fontSize: 45,
        fontWeight: "bold",
        color: '#000'
    }
});

export default Help;