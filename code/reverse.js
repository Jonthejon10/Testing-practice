function reverse (string) {
    let splitString = string.split('')
    let reverseArray = splitString.reverse()
    let joinArray = reverseArray.join('')
    return joinArray
}

module.exports = reverse