function dec2Bin (decNum) {
    let restStack = [],
    rest,
    binaryString = ''

    while (decNum > 0) {
        rest = Math.floor(decNum % 2)
        restStack.push(rest)
        decNum = Math.floor(decNum / 2)
    }

    while (restStack.length > 0) {
        binaryString += restStack.pop().toString()
    }

    return binaryString
}

console.log(dec2Bin(23))
