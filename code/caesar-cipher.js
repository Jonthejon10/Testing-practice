function cipher (word, key) {
    const decryptedArr = []
    let decryptedString
    [...word].forEach(letter => {
        if (/\s/.test(letter)) {
            decryptedArr.push(letter)
        } else if (!letter.match(/^[0-9a-z]+$/)) {
            decryptedArr.push(letter)
        } else {
            const encryptedLetter = letter.charCodeAt(0) - 97 + key
            decryptedArr.push(String.fromCharCode(97 + encryptedLetter))
            decryptedString = decryptedArr.join('')
        }
    })
    return decryptedString.toLowerCase()
}

module.exports = cipher