import React from "react";
import {View, StyleSheet } from "react-native";

const styles = StyleSheet.creat({
    container: {
        flex: 1
    },
    conatainerLight: {
        backgroundColor: "#fff"

    },
    containerDark: {
        backgroundColor: "#212121"
    }
});

export default ({children, style}) => {
    return <View style={[styles.container, style]}>{children}</View>
}
