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

import * as soma from './soma.js'

soma.default(4)