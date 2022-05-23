var numeros = [0,1,2,3,4,5,6]
var total = numeros.reduce((acumulador, numero, indice, original) => {
    console.info(`${acumulador} total até o momento`)
    console.log(`${numero} valor atual`)
    console.log(`${indice} indice atual`)
    console.log(`${original} array original`)

    return acumulador += numero 
}, 0)
console.warn('acabou')
console.log(total)

// exemplo 2
const a = [1, 2, 3, 4, 5], b = [6, 7, 8, 9, 10]
var ab = a.reduce((acumulador, elemento) => acumulador += elemento,
         b.reduce((acumulador, elemento) => acumulador += elemento, 0))

console.log(ab);

// array de objetos 
animais = [

    {
        nome: 'Fumaça',
        idade: 3,
        tipo: 'cao'
    },
    {
        nome: 'Tobby',
        idade: 6,
        tipo: 'cao'
    },
    {
        nome: 'Laminha',
        idade: 1,
        tipo: 'gato'
    },
    {
        nome: 'Nutella',
        idade: 3,
        tipo: 'cao'
    }
]

// filter para filtrar
cachorroIdadeSoma = animais.filter((animal) => animal.tipo === 'cao')
// map para realizar calculo em cada elemento
.map((cao) => cao.idade *= 7)
// reduce para somar tudo
.reduce((total, cao) => total += cao)

console.log(cachorroIdadeSoma);

// dentro de um único reduce
cachorrosIdadeSoma = animais.reduce((total, elemento) => {
    if (elemento.tipo === 'cao') return total += (elemento.idade *= 7)

    else return total }, 0)
console.log(cachorrosIdadeSoma);

// string
const sons = ['auau', 'miau', 'cócóricó']
const sonsHtml = sons.reduce((acc, som) => {

    return (acc += `<li>${som}</li>`)
}, "")

// ou 
const sonstwoHtml = sons.reduce((acc, som)=> acc += `<li>${som}</li>`, "")

// indexar lista de objetos pelo id
const lista = [

    {
        id: 1, nome: 'gol'
    },
    {
        id: 2, nome: 'ferrari'
    },
    {
        id: 3, nome: 'camaro'
    }
]
const callback = (acumulador, valor) => {
    acumulador[valor.id] = valor.nome 

    return acumulador
}
const valorInicial = {}

const carrosIndexadosPorId = lista.reduce(callback, valorInicial)

console.log(carrosIndexadosPorId[3]);
