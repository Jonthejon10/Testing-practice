const calculator = {
    add (...args) {
        const arr = [...args]
        let sum = 0
        arr.forEach(nmb => {
            sum += parseInt(nmb)
        })
        return sum
    },
    subtract (...args) {
        const arr = [...args]
        let res = args[0]
        const newArr = arr.slice(1)
        newArr.forEach(nmb => {
            res -= parseInt(nmb)
        })
        return res
    },
    multiply (...args) {
        const arr = [...args]
        let res = 1
        arr.forEach(nmb => {
            res *= nmb
        })
        return res
    },
    divide (...args) {
        const arr = [...args]
        let res = args[0]
        const newArr = arr.slice(1)
        newArr.forEach(nmb => {
            res /= nmb
        })
        return res
    }

}
module.exports = calculator
