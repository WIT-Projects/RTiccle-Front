import React, { useState, useEffect } from "react";
import { View, Text, Animated, Easing, StyleSheet } from "react-native";

const Loading = () => {
    const [spinAnim, setSpinAnim] = useState(new Animated.Value(0));
    const spin = spinAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "3600deg"],
    });

    useEffect(() => {
        Animated.loop(
            Animated.timing(spinAnim, {
                toValue: 1,
                duration: 10000,
                easing: Easing.ease,
                useNativeDriver: true,
            })
        ).start();
    }, []);

    return (
        <View style={styles.container}>
            <Animated.Image
                source={require("../../../assets/images/icon/icon_loading.png")}
                style={{ ...styles.img, transform: [{ rotate: spin }] }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        marginVertical: 10,
    },
    img:{
        width: 50,
        resizeMode: "contain",
    },
});

export default Loading;
