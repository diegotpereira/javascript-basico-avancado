// ordenação de números
let numeros = [0, 1, 2, 3, 10, 20, 30]
numeros.sort(function(a, b) {

    if(a > b) return 1
    if(a < b) return -1

    return 0
})

console.log(numeros);

// Ordenando um array de strings
let animais = [
    'gato', 'cachorro', 'elefante', 'urso', 'anta'
]

animais.sort()

console.log(animais);

// Ordenando um array de objetos por uma propriedade específica
// Ordenando objetos por uma propriedade numérica

let colaboradores = [
    {
        nome: 'João',
        salario: 9000,
        contratacao: '1 Julho, 2010'
    },
    {
        nome: 'Davi',
        salario: 7500,
        contratacao: '15 Agosto, 2009'
    },
    {
        nome: 'Ana',
        salario: 8000,
        contratacao: '12 Dezembro, 2011'
    }
]

// classificar por salário
colaboradores.sort(function(x, y) {

    return x.salario - y.salario
})

console.table(colaboradores)

// Ordenando objetos por uma propriedade string
colaboradores.sort(function(x, y){

    let a = x.nome.toUpperCase(),
        b = y.nome.toUpperCase()

        return a == b ? 0 : a > b ? 1 : -1
})

console.table(colaboradores)