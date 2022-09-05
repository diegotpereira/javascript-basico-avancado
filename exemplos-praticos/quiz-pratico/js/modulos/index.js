// import minhaConta from './contar.js'

// minhaConta += 1

// console.log(minhaConta) // C: Error

// // A: 10
// // B: 11
// // C: Error
// // D: NaN

// // Qual é a saída?
// console.log('rodando index.js');
// import { soma } from './soma.js'

// console.log(soma(1, 2)) // B: rodando soma.js, rodando index.js, 3

// // A: rodando index.js, rodando soma.js, 3
// // B: rodando soma.js, rodando index.js, 3
// // C: rodando soma.js, 3, rodando index.js
// // D: rodando index.js, undefined, rodando soma.js


// // Qual é a saída?
// import * as data from './module.js'

// console.log(data)

// // A: { default: function default(), nome: "Bob" }
// // B: { default: function default() }
// // C: { default: "Ola mundo", nome: "Bob" }
// // D: Global object of module.js

// // Qual é a saída?
// class Pessoa {
//     constructor(nome) {
//         this.nome = nome
//     }
// }

// const membro = new Pessoa('Joao')
// console.log(typeof membro) // C: "object"

// // A: "class"
// // B: "function"
// // C: "object"
// // D: "string"


// // Qual é a saída?
// let novaLista = [1, 2, 3].push(4)

// console.log(novaLista.push(5)) // D: Error

// // A: [1, 2, 3, 4, 5]
// // B: [1, 2, 3, 5]
// // C: [1, 2, 3, 4]
// // D: Error


//  Qual é a saída?
function dePizzaBob() {
    return 'Aqui está a pizza!'
}

const deChocolateBob = () => "Aqui está o chocolate... agora vá para a academia já."

console.log(dePizzaBob.prototype)
console.log(deChocolateBob.prototype)