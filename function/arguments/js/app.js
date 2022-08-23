function add() {

    let soma = 0

    for(let i = 0; i < arguments.length; i++) {

        soma += arguments[i]
    }

    return soma
}

console.log(add(1, 2));
console.log(add(1, 2, 3, 4, 5));