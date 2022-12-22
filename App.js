import React, { useState } from "react"
import { Text, View, TextInput, TouchableOpacity, StatusBar } from "react-native"
import styles from "./Security/styles"
import RadioButton from "./Security/components/RadioButton"
import cipherAlgorithm from "./Security/Algorithms/Cipher"
import vigenereAlgorithm from "./Security/Algorithms/Vigenere"
import affineAlgorithm from "./Security/Algorithms/Affine"
import Algorithms from "./Security/AlgorithmsTypes"

const App = () => {
    const [currentAlgorithm, setCurrentAlgorithm] = useState(Algorithms.CIPHER)
    const [wordToEncrypt, setWordToEncrypt] = useState("")
    const [wordDecrypted, setWordDecrypted] = useState(null)

    const encryptAlgorithm = () => {
        let filteredWord = wordToEncrypt.trim().replace(/ /g, "")
        if (!regularEx.test(filteredWord)) {
            alert("Enter a valid value to be encrypted")
            setWordDecrypted(null)
            return;
        }

        filteredWord = filteredWord.toLocaleLowerCase()

        switch (currentAlgorithm) {
            case Algorithms.CIPHER:
                setWordDecrypted(cipherAlgorithm(filteredWord, STRING))
                break;
            case Algorithms.VIGENERE:
                setWordDecrypted(vigenereAlgorithm(filteredWord, STRING))
                break;
            case Algorithms.AFFINE:
                setWordDecrypted(affineAlgorithm(filteredWord, STRING))
                break;
            default:
                console.log("error")
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={"red"} />
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Welcome to our software security project</Text>
            </View>
            <View style={styles.radioContainer} >
                {ALGORITHMS.map((item) =>
                    <RadioButton name={item.name}
                        onPress={() => {
                            setCurrentAlgorithm(item.value)
                        }}
                        state={currentAlgorithm} value={item.value} />
                )}
            </View>
            <TextInput style={styles.input}
                value={wordToEncrypt}
                onChangeText={(value) => setWordToEncrypt(value)} />
            <Text style={styles.result} >{wordDecrypted ?? "----"}</Text>
            <TouchableOpacity style={styles.submitButton} onPress={() => encryptAlgorithm()} >
                <Text style={styles.text} >Submit</Text>
            </TouchableOpacity>

        </View>
    )
}
export default App



const STRING = "abcdefghijklmnopqrstuvwxyz"
const regularEx = /^[a-zA-Z]+$/
const ALGORITHMS = [
    { name: "Affine", value: Algorithms.AFFINE },
    { name: "Vigenere", value: Algorithms.VIGENERE },
    { name: "Caeser", value: Algorithms.CIPHER },

]


