function reverterString(str) {

    // string vazia
    let novaString = ""

    for(let i = str.lenght - 1; i >= 0; i--) {

        novaString += str[i]
    }
    return novaString
}

// receber entrada do usuário
const string = prompt('Digite uma string: ')
console.log(string);

const resultado = reverterString(string)

console.log(resultado);
