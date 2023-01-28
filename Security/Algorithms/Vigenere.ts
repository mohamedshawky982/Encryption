
export default function vigenereAlgorithm(word:string,string:string) {
    //  Encryption
    let vigenereWord = word
    let vigenereKey = "iteam"
    let vigenereEncryptedWord = ""
    let lastKeyIndex = -1

    
    // this loop handles key to be suitable to word (with the same length)
    for (let i = 0; i < vigenereWord.length; i++) {
        if (!(vigenereWord[i] && vigenereKey[i]))
            vigenereKey += vigenereKey[++lastKeyIndex]
    }

    for (let i = 0; i < vigenereWord.length; i++) {
        let letterIndexInLettersString = string.indexOf(vigenereWord[i])
        let keyLetterIndexInLettersString = string.indexOf(vigenereKey[i])
        let encryptedLetter = string.charAt((letterIndexInLettersString + keyLetterIndexInLettersString) % string.length)
        vigenereEncryptedWord += encryptedLetter
    }

    // Decryption
    vigenereWord = ''
    for (let i = 0; i < vigenereEncryptedWord.length; i++) {
        let letterIndexInLettersString = string.indexOf(vigenereEncryptedWord[i])
        let keyLetterIndexInLettersString = string.indexOf(vigenereKey[i])
        let encryptedLetterIndex = (letterIndexInLettersString - keyLetterIndexInLettersString)
        let encryptedLetterRealIndex = encryptedLetterIndex >= 0 ? encryptedLetterIndex : encryptedLetterIndex + string.length
        let encryptedLetter = string.charAt(encryptedLetterRealIndex % string.length)
        vigenereWord += encryptedLetter

    }

    return "Cypher word is " + vigenereEncryptedWord + " " + "Plain text is " + vigenereWord

}
