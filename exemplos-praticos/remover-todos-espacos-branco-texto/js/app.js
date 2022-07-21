// usando split() e join()

// programa para cortar uma string
const string = '      Ola Mundo    '

const resultado = string.split(' ').join('')

console.log(resultado);

// Usando Expressão Regular

// programa para cortar uma string
function cortarString(x) {
    const resultado1 = x.replace(/\s/g,'')

    return resultado1
}
const resultado1 = cortarString('   Ola Mundo    ')

console.log(resultado1);