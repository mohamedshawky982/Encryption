import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Appearance } from "react-native"
const CONTAINER_SIZE = 20
const INNER_SIZE = 13
const isDarkMode = Appearance.getColorScheme() === "dark"
const RadioButton = ({ onPress, value, state, name }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{name}</Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={onPress} >
                <View style={[styles.innerContainer, { backgroundColor: value === state ? "red" : null }]} />
            </TouchableOpacity>
        </View>
    )
}

export default RadioButton

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginVertical: 7,
        marginHorizontal: 10
    },

    buttonContainer: {
        width: CONTAINER_SIZE,
        height: CONTAINER_SIZE,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#dddd",
        borderRadius: CONTAINER_SIZE / 2,
        marginLeft: 5
    },
    innerContainer: {
        width: INNER_SIZE,
        height: INNER_SIZE,
        borderRadius: INNER_SIZE / 2,
    },
    text: {
        color: isDarkMode ? "white" : "black"
    }
})