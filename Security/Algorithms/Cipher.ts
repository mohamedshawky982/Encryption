export default function cipherAlgorithm(word:string, string:string) {
    let encryptedWord = ''
    let key = 3

    for (let i = 0; i < word.length; i++) {
        let indexOfLetter = string.indexOf(word[i])
        let cipherLetter = (indexOfLetter + key) % string.length
        encryptedWord += string.charAt(cipherLetter)
    }


    word = ""
    for (let i = 0; i < encryptedWord.length; i++) {
        let indexOfLetter = string.indexOf(encryptedWord[i])
        let cipherLetter = (indexOfLetter - key) % string.length
        word += string.charAt(cipherLetter)
    }


    return "Cypher word is " + encryptedWord + " " + "Plain text is " + word
}

