function reverterString(str) {
    let stringRev = ''

    for(let index = str.length; index >= 0; index--) {
        stringRev = stringRev + str.charAt(index)
    }
    return stringRev
}
console.log(reverterString('Ola'));