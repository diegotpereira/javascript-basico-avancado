function transformPrimeiraLetra(str) {
    let arr = str.split(" ")

    for(var index = 0; index < arr.length; index++) {
        arr[index] = arr[index].charAt(0).toUpperCase() + arr[index].slice(1)
    }
    return arr.join(" ")
}
console.log(transformPrimeiraLetra('ola mundo'));