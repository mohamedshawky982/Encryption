import { StyleSheet, Dimensions, Appearance } from "react-native"
const { width, height } = Dimensions.get("screen")
const isDarkMode = Appearance.getColorScheme() === "dark"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        width: "90%",
        height: 60,
        borderWidth: 1,
        borderColor: isDarkMode ? "white" : "#8888",
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        paddingLeft: 10
    }, submitButton: {
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: "red",
        marginTop: 30
    },
    text: {
        color: "white",
        fontSize: 18,
        fontWeight: "800"
    },
    radioContainer: {
        flexDirection: "row",
        marginVertical: 30
    },
    result: {
        color: isDarkMode ? "white" : "black",
        fontSize: 18,
        fontWeight: "800",
        marginVertical: 20,
        marginTop: 30
    },
    headerContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20
    },
    headerText: {
        color: isDarkMode ? "white" : "black",
        fontSize: 16,
        fontWeight: "900"

    }
})

export default styles