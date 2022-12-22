export default function affineAlgorithm(word: string, string: string) {
    let m = 7
    let k = 10
    let affineEncryptedWord = ""
    let inverse = 0
    if (!checkGcd(string.length, 7))
        return "Gcd is not available"


    /// encryption

    for (let i = 0; i < word?.length; i++) {
        let letterIndex = string.indexOf(word[i])
        let encryptedLetterIndex = ((m * letterIndex) + k) % string.length
        affineEncryptedWord += string.charAt(encryptedLetterIndex)

    }

    // calculate inverse
    for (let i = 0; i < string.length; i++) {
        let flag = (m * i) % string.length;
        if (flag == 1) {
            inverse = i;
        }

    }


    /// decryption
    let plainText = ''

    for (let i = 0; i < affineEncryptedWord?.length; i++) {
        let letterIndex = string.indexOf(affineEncryptedWord[i])
        let encryptedLetterIndex = ((inverse * (letterIndex - k)) % string.length)
        let encryptedLetterRealIndex = encryptedLetterIndex >= 0 ? encryptedLetterIndex : encryptedLetterIndex + string.length
        plainText += string.charAt(encryptedLetterRealIndex)

    }
    return "Cypher word is " + affineEncryptedWord + " " + "Plain text is " + plainText

}

function checkGcd(a: number, b: number) {
    if (b === 0)
        return a
    else
        return checkGcd(b, a % b)
}