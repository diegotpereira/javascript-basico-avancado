// Base para projeto https://github.com/lydiahallie/javascript-questions

// // Qual é a saída?
// function digaOla() {

//     console.log(nome);
//     console.log(idade);

//     var nome = 'Lidia'
//     let idade = 21
// }

// digaOla() // undefined e ReferenceError

// // Qual é a saída?
// for(var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1) // 3 3 3
// }

// for(let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i),) // 0 1 2
// }

// // Qual é a saída?
// const forma = {
//     radius: 10,
//     diametro() {
//         return this.radius * 2
//     },
//     perimetro: () => 2 * Math.PI * this.radius 
// }

// console.log(forma.diametro()) // 20
// console.log(forma.perimetro()) // NaN

// // Qual é a saída?
// console.log(+true ) // 1
// console.log(!'Lidia') // false

// // Qual deles é o verdadeiro?
// const passaro = {
//     tamanho: 'pequeno'
// }

// const rato = {
//     nome: 'Mickey',
//     pequeno: true
// }

// // A: rato.passaro.tamanho não é válido
// // B: rato[passaro.tamanho] não é válido
// // C: rato[passaro["tamanho"]] não é válido
// // D: Todas são válidas
// // Resposta A

// // Qual é a saída?
// let c = { bemvindo: 'Oi!'}
// let d

// d = c 

// c.bemvindo = 'Ola'

// console.log(d.bemvindo) // Ola


// // Qual é a saída?
// let a = 3
// let b = new Number(3)
// let c = 3

// console.log(a == b) // true (verdadeiro)
// console.log(a === b) // false (falso)
// console.log(b === c) // false (falso)

// // Qual é a saída?
// class Camaleao {

//     static alterarCor(novaCor) {
//         this.novaCor = novaCor

//         return this.novaCor
//     }

//     constructor({ novaCor = 'green'} = {}) {
//         this.novaCor = novaCor
//     }
// }

// const fred = new Camaleao({ novaCor: 'purple'})
// console.log(fred.alterarCor('orange')) // TypeError


// // Qual é a saída?
// let saudacao
// saudacaoo = {}
// console.log(saudacaoo) // A obs: para evitar isso 'use strict

// // O que acontece quando fazemos isso?
// function latido() {
//     console.log('woof!');
// }
// latido.animal = 'cachorro'

// A: Nada, isso é totalmente bom!
// B: SyntaxError. Você não pode adicionar propriedades a uma função dessa maneira
// C: "Woof"é registrado.
// D: ReferenceError

// // Qual é a saída?
// function Pessoa(nome, sobrenome) {
//     this.nome = nome 
//     this.sobrenome = sobrenome
// }
// const membro = new Pessoa('Bob', 'Marley')
// Pessoa.getNomeCompleto = function() {
//     return `${this.nome} ${this.sobrenome}`
// }
// console.log(membro.getNomeCompleto()) // A 
// // obs: se você quiser que um método esteja disponível 
// // para todas as instâncias do objeto, você deve adicioná-lo à propriedade prototype: Pessoa.prototype.getNomeCompleto

// // A: TypeError
// // B: SyntaxError
// // C: Bob Marley
// // D: undefined undefined


// // Qual é a saída?
// function Pessoa(nome, sobrenome) {
//     this.nome = nome 
//     this.sobrenome = sobrenome
// }

// const bob = new Pessoa('Bob', 'Marley') // Pessoa {nome: "Bob", sobrenome: "Marley"}
// const peter = Pessoa('Peter', 'Tosh') // undefined

// console.log(bob)
// console.log(peter)

// // A: Pessoa {nome: "Bob", sobrenome: "Marley"} e undefined
// // B: Pessoa {nome: "Bob", sobrenome: "Marley"} e  Pessoa {nome: "Peter", sobrenome: "Tosh"}
// // C: Pessoa {nome: "Bob", sobrenome: "Marley"} e {}
// // D: Pessoa {nome: "Bob", sobrenome: "Marley"} e ReferenceError

// Quais são as três fases da propagação do evento?
// A: Alvo > Captura > Bolha
// B: Bolha > Alvo > Captura
// C: Alvo > Bolha > Captura
// D: Captura > Alvo > Bolha

// Resposta D

// Todos os objetos têm protótipos (prototypes)?
// A: true
// B: false // Todos os objetos possuem protótipos, exceto o objeto base.

// // Qual é a saída?
// function soma(a, b) {
//     return a + b
// }

// soma(1, '2') // 12

// // A: NaN
// // B: TypeError
// // C: "12"
// // D: 

// // Qual é a saída?
// let numero = 0
// console.log(numero++) // O operador pós ++ retorna valor 0
// console.log(++numero) //o operador prefixo ++ incrementa valor agora é 2
// console.log(numero) // C -- retorna valor 2

// // A: 1 1 2
// // B: 1 2 2
// // C: 0 2 2
// // D: 0 1 2

// // Qual é a saída?
// function getPessoaInfo(um, dois, tres) {
//     console.log(um)
//     console.log(dois)
//     console.log(tres);;
// }
// const pessoa = 'Bob'
// const idade = 21 

// getPessoaInfo`${pessoa} tem ${idade} anos de idade` // B

// // A: "Bob" 21 ["", " tem ", " anos de idade"]
// // B: ["", " tem ", " anos de idade"] "Bob" 21
// // C: "Bob" ["", " tem ", " anos de idade"] 21

// // Qual é a saída?
// function verificarIdade(data) {

//     if (data === {idade: 18}) {
//         console.log('Você é um adulto!')

//     } else if (data == {idade: 18}) {
//         console.log('Você ainda é um adulto')

//     } else {
//         console.log(`Hmm.. Você não tem idade, eu acho`);
//     }
// }

// verificarIdade({ idade: 18 }) // Hmm.. Você não tem idade, eu acho

// // A: Você é um adulto!
// // B: Você ainda é um adulto.
// // C: Hmm.. Você não tem idade, eu acho

// // Qual é a saída?
// function getIdade(...args) {
//     console.log(typeof args);
// }

// getIdade(21) // D: Objeto
// // obs: O parâmetro rest ( ...args) nos permite "coletar" 
// // todos os argumentos restantes em um array. Um array é um objeto, então typeof argsretorna"object"

// // A: "number"
// // B: "array"
// // C: "object"
// // D: "NaN"

// // Qual é a saída?
// function getIdade() {
//     'use strict'

//     idade = 21 
//     console.log(idade);
// }

// getIdade()

// // A: 21 
// // B: undefined
// // C: ReferenceError
// // D: TypeError

// // Qual o valor da soma?
// const soma = eval('10 * 10 + 5')
// console.log(soma) // A - evalavalia códigos que são passados ​​como uma string. Se for uma expressão, como neste caso, ele avalia a expressão

// // A: 105
// // B: "105"
// // C: TypeError
// // D: "10*10+5"

// // Por quanto tempo o segredo_legal fica acessível?
// sessionStorage.setItem('segredo_legal', 123) // B Os dados armazenados sessionStoragesão removidos após o fechamento da guia.

// // A: Para sempre, os dados não se perdem.
// // B: Quando o usuário fecha a aba.
// // C: Quando o usuário fecha o navegador inteiro, não apenas a aba.
// // D: Quando o usuário desliga o computador.

// // Qual é a saída?
// var num = 8
// var num = 10

// console.log(num) // B Com var você pode declarar várias variáveis ​​com o mesmo nome. A variável então manterá o valor mais recente.

// // A: 8
// // B: 10
// // C: SyntaxError
// // D: ReferenceError

// // Qual é a saída?
// const obj = {1: 'a', 2: 'b', 3: 'c'}
// const set = new Set([1, 2, 3, 4, 5])

// obj.hasOwnProperty('1') //true
// obj.hasOwnProperty(1) // true 
// set.has('1') // false 
// set.has(1) // true


// // A: false true false true
// // B: false true true true
// // C: true true false true
// // D: true true true true

// // Qual é a saída?
// const obj = {a: 'um', b: 'dois', a: 'tres'}
// console.log(obj) // C Se você tiver duas chaves com o mesmo nome, a chave será substituída. Ele ainda estará em sua primeira posição, mas com o último valor especificado.

// // A: { a: "um", b: "dois" }
// // B: { b: "dois", a: "tres" }
// // C: { a: "tres", b: "dois" }
// // D: SyntaxError

// O contexto de execução global do JavaScript cria duas coisas para você: o objeto global e a palavra-chave "this".

// A: true // O contexto de execução base é o contexto de execução global: é o que está acessível em qualquer lugar do seu código.
// B: false
// C: isso depende

// // Qual é a saída?
// for(let i = 1; i < 5; i++) {
//     if(i === 3) continue;
//     console.log(i) // C A instrução continue pula uma iteração se uma determinada condição for retornada true.
// }

// // A: 1 2
// // B: 1 2 3
// // C: 1 2 4
// // D: 1 3 4

// // Qual é a saída?
// String.prototype.dePizzaBob = () => {
//     return 'Basta dar pizza para Bob já!'
// }

// const nome = 'Bob'

// console.log(nome.dePizzaBob()) // A 

// // A: "Basta dar pizza para Bob já!"
// // B: TypeError: not a function
// // C: SyntaxError
// // D: undefined

// // Qual é a saída?
// const a = {}
// const b = { key: 'b' }
// const c = { key: 'c' }

// a[b] = 123 
// a[c] = 456 

// console.log(a[b]) // B

// // A: 123
// // B: 456
// // C: undefined
// // D: ReferenceError

// // Qual é a saída?
// const foo = () => console.log('Primeiro') // 1°
// const bar = () => setTimeout(() => console.log('Segundo')) // 3°
// const baz = () => console.log('Terceiro') // 2°

// foo()
// bar()
// baz()

// // A: Primeiro Segundo Terceiro
// // B: Primeiro Terceiro Segundo
// // C: Segundo Primeiro Terceiro
// // D: Segundo Terceiro Primeiro

// Qual é o event.target ao clicar no botão?
{/* <div onclick="console.log('primeira div')">
  <div onclick="console.log('segunda div')">
    <button onclick="console.log('botao')">
      Click!
    </button>
  </div>
</div> */}

// A: Externa div
// B: Interna div
// C: button
// D: Uma matriz de todos os elementos aninhados.
// Resposta: C: Button

// // Quando você clica no parágrafo, qual é a saída registrada?
// <div onclick="console.log('div')">
//   <p onclick="console.log('p')">
//     Click here!
//   </p>
// </div>

// // A: p div
// // B: div p
// // C: p
// // D: div
// Resposta A: p div

// // Qual é a saída?
// const pessoa = { nome: 'Bob' }

// function digaOi(idade) {
//     return `${this.nome} é ${idade}`
// }
// console.log(digaOi.call(pessoa, 21)) // Bob tem 21
// console.log(digaOi.bind(pessoa, 21)) // function

// // A: undefined tem 21 Bob tem 21
// // B: function function
// // C: Bob tem 21 Bob tem 21
// // D: Bob tem 21 function

// // // Qual é a saída?
// function digaOi() {
//     return (() => 0)()
// }
// console.log(typeof digaOi()) // B: number

// // A: "object"
// // B: "number"
// // C: "function"
// // D: "undefined"

// // Quais desses valores são falsos?
// 0;
// new Number(0);
// ('');
// (' ');
// new Boolean(false);
// undefined;

// // A: 0, '', undefined
// // B: 0, new Number(0), '', new Boolean(false), undefined
// // C: 0, '', new Boolean(false), undefined
// // D: Todos eles são falsos
// // Resposta A

// // Qual é a saída?
// console.log(typeof typeof 1) // B: string obs: typeof 1 retorna "number". typeof "number" retorna "string"

// // A: "number"
// // B: "string"
// // C: "object"
// // D: "undefined"

// // Qual é a saída?
// const numeros = [1, 2, 3]
// numeros[10] = 11
// console.log(numeros) // // C: [1, 2, 3, empty x 7, 11]

// // A: [1, 2, 3, null x 7, 11]
// // B: [1, 2, 3, 11]
// // C: [1, 2, 3, empty x 7, 11]
// // D: SyntaxError// 


// // Qual é a saída?
// (() => {
//   let x, y 

//   try {
//     throw new Error()
//   } catch (x) {
//     (x = 1), (y = 2)
//     console.log(x) // 1
//   }
//   console.log(x) // undefined
//   console.log(y) // 2
// })()


// // A: 1 undefined 2
// // B: undefined undefined undefined
// // C: 1 1 2
// // D: 1 undefined undefined// 

//// Tudo em JavaScript é um...

//// A: primitivo ou objeto
//// B: função ou objeto
//// C: pergunta capciosa! apenas objetos
//// D: número ou objeto
//// Resposta A 
//// Obs: Os tipos primitivos são boolean, null, undefined, bigint, number, string, e symbol.


// // Qual é a saída?
// const saida = [[0, 1], [2, 3]].reduce(
//   (acc, cur) => {
//     return acc.concat(cur)
//   },
//   [1, 2]
// )

// console.log(saida) // C: [1, 2, 0, 1, 2, 3]

// // A: [0, 1, 2, 3, 1, 2]
// // B: [6, 1, 2]
// // C: [1, 2, 0, 1, 2, 3]
// // D: [1, 2, 6]


// // Qual é a saída?
// console.log(!!null) // null é falso. !null retorna true. !true retorna false.
// console.log(!!'') // "" é falso. !"" retorna true. !true retorna false.
// console.log(!!1) // 1 é true. !1 retorna false. !false retorna true.


// // O que o método setInterval retorna no navegador?
// setInterval(() => console.log('Ola'), 1000) // A: um id unico

// // A: um id unico
// // B: a quantidade de milissegundos especificada
// // C: a função passada
// // D: undefined


// // O que isso retorna?
// console.log([...'Bob']) // A: ["B", "o", "b"] Uma string é um iterável. O operador spread mapeia cada caractere de um iterável para um elemento.

// // A: ["B", "o", "b"]
// // B: ["Bob"]
// // C: [[], "Bob"]
// // D: [["B", "o", "b"]]



// // Qual é a saída?
// function* gerador(i) {

//   // usada para pausar e resumir uma generator function
//   yield i;
//   yield i * 2;
// }

// const gen = gerador(10)

// console.log(gen.next().value) // 10
// console.log(gen.next().value) // 20

// // A: [0, 10], [10, 20]
// // B: 20, 20
// // C: 10, 20
// // D: 0, 10 e 10, 20

// // O que isso retorna?
// const primeiraPromisse = new Promise((res, rej) => {
//   setTimeout(res, 500, 'um')
// })

// const segundaPromisse = new Promise((res, rej) => {
//   setTimeout(res, 100, 'dois')
// })

// // race retorna uma promise que resolve ou rejeita assim que uma das promises no iterável resolver ou rejeitar, com o valor ou razão daquela promise.
// Promise.race([primeiraPromisse, segundaPromisse]).then(res => console.log(res)) // B: "dois"

// // A: "um"
// // B: "dois"
// // C: "dois" "um"
// // D: "um" "dois"


// // Qual é a saída?
// let pessoa = { nome: 'Bob'}
// const membros = [ pessoa ]

// pessoa = null 

// console.log(membros) // D: [{ nome: "Bob" }]

// // A: null
// // B: [null]
// // C: [{}]
// // D: [{ nome: "Bob" }]

// // Qual é a saída?
// const pessoa = {
//   nome: 'Bob',
//   idade: 21
// }

// for(const item in pessoa) {
//   console.log(item) // B: "nome", "idade"
// }


// // A: { nome: "Bob" }, { idade: 21 }
// // B: "nome", "idade"
// // C: "Bob", 21
// // D: ["nome", "Bob"], ["idade", 21]


// // Qual é a saída?
// console.log(3 + 4 + '5') //B: "75"

// //A: "345"
// //B: "75"
// //C: 12
// //D: "12"

// // Qual o valor de num?
// const num = parseInt('7 * 6', 10)

// console.log(num) // C: 7 Apenas os primeiros números na string são retornados.

// // A: 42
// // B: "42"
// // C: 7
// // D: NaN

// // Qual é a saída?
// const mapa = [1, 2, 3].map(num => {

  
//   if(typeof num === 'number')  return 

//   return num * 2
  
// })

// console.log(mapa) // C: [undefined, undefined, undefined]

// // A: []
// // B: [null, null, null]
// // C: [undefined, undefined, undefined]
// // D: [ 3 x empty ]


// // Qual é a saída?
// function getInfo(membro, ano) {

//   membro.nome = 'Bob'
//   ano = '1998'
// }

// const pessoa = { nome: 'Peter'}
// const nascimento = '1997'


// getInfo(pessoa, nascimento)

// console.log(pessoa, nascimento) // A: { nome: "Bob" }, "1997"

// // A: { nome: "Bob" }, "1997"
// // B: { nome: "Peter" }, "1998"
// // C: { nome: "Bob" }, "1998"
// // D: { nome: "Peter" }, "1997"


// // Qual é a saída?
// function saudacao() {
//   throw 'Ola Mundo!'
// }

// function digaOi() {
//   try {

//     const data = saudacao()
//     console.log('Funcionou!')

//   } catch (e) {

//     console.log('Ah, não, um erro:', e)
//   }
// }

// digaOi()

// // A: Funcionou! Ola Mundo!
// // B: Ah, não, um erro: undefined
// // C: SyntaxError: can only throw Error objects
// // D: Ah, não, um erro: Ola Mundo!
// // Resposta D: Ah, não, um erro: Ola Mundo!


// // Qual é a saída?
// function Carro() {
//   this.faca = 'Lamborghini'

//   return {
//     faca: 'Maserati  '
//   }
// }

// const meuCarro = new Carro()

// console.log(meuCarro.faca) // B: "Maserati"

// // A: "Lamborghini"
// // B: "Maserati"
// // C: ReferenceError
// // D: TypeError



// // Qual é a saída?
// (() => {
//   let x = (y = 10)
// })()

// console.log(typeof x)
// console.log(typeof y)

// // A: "undefined", "number"
// // B: "number", "number"
// // C: "object", "number"
// // D: "number", "undefined"


// // Qual é a saída?
// class Cachorro {
//   constructor(nome) {
//     this.nome = nome 
//   }
// }

// Cachorro.prototype.latido = function() {
  
//   console.log(`Woof Eu sou ${this.nome}`)
// }

// const pet = new Cachorro('Scooby')

// pet.latido() // "Woof Eu sou Scooby"

// delete Cachorro.prototype.latido

// pet.latido() // TypeError

// // A: "Woof Eu sou Scooby", TypeError
// // B: "Woof Eu sou Scooby", "Woof Eu sou Scooby"
// // C: "Woof Eu sou Scooby", undefined
// // D: TypeError, TypeError
// // Resposta A: "Woof Eu sou Scooby", TypeError


// // Qual é a saída?
// const set = new Set([ 1, 1, 2, 3, 4 ])

// console.log(set) // D: {1, 2, 3, 4}

// // A: [1, 1, 2, 3, 4]
// // B: [1, 2, 3, 4]
// // C: {1, 1, 2, 3, 4}
// // D: {1, 2, 3, 4}


// // Qual é a saída?
// const nome = 'Bob'
// idade = 21

// console.log(delete nome) // false (false)
// console.log(delete idade) // true (verdadeiro)

// // A: false, true
// // B: "Bob", 21
// // C: true, true
// // D: undefined, undefined


// // Qual é a saída?
// const numeros = [1, 2, 3, 4, 5]
// const[y] = numeros 

// console.log(y) // C: 1

// // A: [[1, 2, 3, 4, 5]]
// // B: [1, 2, 3, 4, 5]
// // C: 1
// // D: [1]


// // Qual é a saída?
// const usuario = { nome: 'Bob', idade: 21 }
// const admin = { admin: 'true', ...usuario}

// console.log(admin) // B: { admin: true, nome: "Bob", idade: 21 }

// // A: { admin: true, usuario: { nome: "Bob", idade: 21 } }
// // B: { admin: true, nome: "Bob", idade: 21 }
// // C: { admin: true, usuario: ["Bob", 21] }
// // D: { admin: true }

// // Qual é a saída?
// const pessoa = { nome: 'Bob'}
// // define uma nova propriedade diretamente em um objeto, 
// // ou modifica uma propriedade já existente em um objeto, e retorna o objeto.
// Object.defineProperty(pessoa, 'idade', { value: 21 }) 

// console.log(pessoa) // { nome: "Bob", idade: 21 }

// // retorna um array de propriedades enumeraveis de um determinado objeto
// console.log(Object.keys(pessoa)) // ["nome"]
// // A: { nome: "Bob", idade: 21 },["nome", "idade"]
// // B: { nome: "Bob", idade: 21 },["nome"]
// // C: { nome: "Bob"},["nome", "idade"]
// // D: { nome: "Bob"},["idade"]
// //Resposta B: { nome: "Bob", idade: 21 },["nome"]


// // Qual é a saída?
// const definicoes = {
//   usuarionome: 'Peter',
//   nivel: 19,
//   vida: 90
// }

// const data = JSON.stringify(definicoes, ['nivel', 'vida'])

// console.log(data) // A: "{"nivel":19, "vida":90}"

// // A: "{"nivel":19, "vida":90}"
// // B: "{"usuarionome": "Peter"}"
// // C: "["nivel", "vida"]"
// // D: "{"usuarionome": "Peter", "nivel":19, "vida":90}"


// // Qual é a saída?
// let num = 10

// const incrementaNumero = () => num++
// const incrementaNumeroPassado = numero => numero++

// const num1 = incrementaNumero()
// const num2 = incrementaNumeroPassado(num1)

// console.log(num1) // 10
// console.log(num2) // 10

// // A: 10, 10
// // B: 10, 11
// // C: 11, 11
// // D: 11, 12


// // Qual é a saída?
// const valor = { numero: 10 }

// const multiplicar = (x = {...valor }) => {
//   console.log((x.numero *= 2))
// }

// multiplicar() // 20
// multiplicar() // 20
// multiplicar(valor) // 20
// multiplicar(valor) // 40

// // A: 20, 40, 80, 160
// // B: 20, 40, 20, 40
// // C: 20, 20, 20, 40
// // D: NaN, NaN, 20, 40
// // Resposta C: 20, 20, 20, 40


// // Qual é a saída?
// [1, 2, 3, 4].reduce((x, y) => console.log(x, y)) // D: 1 2 e undefined 3 e undefined 4

// // A: 1 2 e 3 3 e 6 4
// // B: 1 2 e 2 3 e 3 4
// // C: 1 undefined e 2 undefined e 3 undefined e 4 undefined
// // D: 1 2 e undefined 3 e undefined 4


// // Com qual construtor podemos estender a classe Cachorro com sucesso?
// class Cachorro {
//   constructor(nome) {
//     this.nome = nome
//   }
// }
// class Labrador extends Cachorro {

//     // 1
//     constructor(nome, tamanho) {
//       this.tamanho = tamanho;
//     }
//     // 2
//     constructor(nome, tamanho) {
//       super(nome);
//       this.tamanho = tamanho;
//     }
//     // 3
//     constructor(tamanho) {
//       super(nome);
//       this.tamanho = tamanho;
//     }
//     // 4
//     constructor(nome, tamanho) {
//       this.nome = nome;
//       this.tamanho = tamanho;
//     }
// } 

// // A: 1
// // B: 2
// // C: 3
// // D: 4
// // Resposta B: 2


// // Qual é a saída?
// console.log(Number(2) === Number(2)) // true (verdadeiro)
// console.log(Boolean(false) === Boolean(false)) // true (verdadeiro)
// console.log(Symbol('foo') === Symbol('foo')) // false (falso) // Cada Symbol é inteiramente único.

// // A: true, true, false
// // B: false, true, false
// // C: true, false, true
// // D: true, true, true
// //Resposta A: true, true, false

// // Qual é a saída?
// const nome =  'Bob Marley'

// // preenche a string original com um determinado caractere, 
// // ou conjunto de caracteres, (várias vezes, se necessário) até que a string resultante atinja o comprimento fornecido.
// console.log(nome.padStart(13)) // " Bob Marley"
// console.log(nome.padStart(2)) // "Bob Marley"

// // A: "Bob Marley", "Bob Marley"
// // B: " Bob Marley", " Bob Marley" ("[13x espaço em branco]Bob Marley", "[2x espaço em branco]Bob Marley")
// // C: " Bob Marley", "Bob Marley" ("[1x espaço em branco]Bob Marley", "Bob Marley")
// // D: "Bob Marley", "Bob"
// //Resposta C: " Bob Marley", "Bob Marley" ("[1x espaço em branco]Bob Marley", "Bob Marley")

// // Qual é a saída?
// console.log('🥑' + '💻') // A: "🥑💻"

// // A: "🥑💻"
// // B: 257548
// // C: Uma string contendo seus pontos de código
// // D: Error


// // Como podemos registrar os valores comentados após a instrução console.log?
// function* iniciarJogo() {
//   const responda = yield 'Você goste de JavaScript?'

//   if (responda !== 'Sim') {
    
//     return 'Oh não... Acho que erramos aqui'
//   }
//   return 'JavaScript te ama de volta ❤️'
// }

// const jogo = iniciarJogo()

// console.log(/* 1 */) // jogo.next().value
// console.log(/* 2 */) // jogo.next("Sim").value

// // A: jogo.next("Sim").value e jogo.next().value
// // B: jogo.next.value("Sim") e jogo.next.value()
// // C: jogo.next().value e jogo.next("Sim").value
// // D: jogo.next.value() e jogo.next.value("Sim")

// // Qual é a saída?
// console.log(String.raw`Ola\nmundo`) // C: Ola\nmundo

// // A: Ola mundo!
// // B: Ola
//   //    mundo
// // C: Ola\nmundo
// // D: Ola\n
//   //    mundo


// // Qual é a saída?
// async function getDado() {
//   return await Promise.resolve('Eu sou isso!')
// }
// const dado = getDado()

// console.log(dado) // C: Promise {<pending>}

// // A: "Eu sou isso!"
// // B: Promise {<resolved>: "Eu sou isso!"}
// // C: Promise {<pending>}
// // D: undefined



// // Qual é a saída?
// function addNaLista(item, lista) {
//   return lista.push(item)
// }

// const resultado = addNaLista('maca', ['banana'])

// console.log(resultado) // B: 2

// // A: ['maca', 'banana']
// // B: 2
// // C: true
// // D: undefined


// // Qual é a saída?
// const caixa = { x: 10, y: 20 }

// Object.freeze(caixa)

// const forma = caixa

// forma.x = 100

// console.log(forma) // B: { x: 10, y: 20 }

// // A: { x: 100, y: 20 }
// // B: { x: 10, y: 20 }
// // C: { x: 100 }
// // D: ReferenceError


// // Qual é a saída?
// const { nome: meuNome } = { nome: 'Bob'}

// console.log(nome ) // D: ReferenceError

// // A: "Bob"
// // B: "meuNome"
// // C: undefined 
// // D: ReferenceError
// // Rever essa resposta pois apresenta resultado diferente do original (C: undefined )


// // Esta é uma função pura?
// function soma(a, b) {
//   return a + b
// }

// // A: Sim
// // B: Não
// // Resposta A: Sim


// // Qual é a saída?
// const add = () => {
//   const cache = {}

//   return num => {

//     // num é igual a 10 ainda não foi armazenado em cache
//     // falso
//     // Na segunada vez é true (verdadeiro)
//     // Na terceira vez 5 * 2 = 10 Do Cache retorna 10
//     if (num in cache) {
      
//       // Na segunda vez Do cache vale 20
//       // Na terceira vez Do Cache retorna 20 já anteriormente registrado
//       return `Do Cache! ${cache[num]}`

//     } else {

//       // então executa o cache 
//       const resultado = num + 10

//       // cache é igual a { 10: 20 }
//       cache[num] = resultado

//       return `Calculado! ${resultado}`
//     }
//   }
// }

// const addFuncao = add()

// console.log(addFuncao(10)) // 
// console.log(addFuncao(10));
// console.log(addFuncao(5 * 2));

// // A: Calculado! 20 Calculado! 20 Calculado! 20
// // B: Calculado! 20 Do cache! 20 Calculado! 20
// // C: Calculado! 20 Do cache! 20 Do cache! 20
// // D: Calculado! 20 Do cache! 20 Error


// // Qual é a saída?
// const minhaVidaResumida = ['☕', '💻', '🍷', '🍫']

// // loop for-in , podemos iterar sobre propriedades enumeráveis . 
// // Em um array, as propriedades enumeráveis ​​são seus índices.
// for(let item in minhaVidaResumida) {
//   console.log(item) // A: 0 1 2 3
// }

// //  loop for-of , podemos iterar sobre iteráveis.
// // Um array é um iterável. Quando iteramos sobre o array, a variável "item" 
// // é igual ao elemento sobre o qual está iterando no momento.
// for(let item of minhaVidaResumida) {
//   console.log(item) // "☕" "💻" "🍷" "🍫"
// }

// // A: 0 1 2 3 e "☕" "💻" "🍷" "🍫"
// // B: "☕" "💻" "🍷" "🍫" e "☕" "💻" "🍷" "🍫"
// // C: "☕" "💻" "🍷" "🍫" e 0 1 2 3
// // D: 0 1 2 3 e {0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}



// // Qual é a saída?
// const lista = [1 + 2, 1 * 2, 1 / 2]

// console.log(lista) // C: [3, 2, 0.5]

// // A: ["1 + 2", "1 * 2", "1 / 2"]
// // B: ["12", 2, 0.5]
// // C: [3, 2, 0.5]
// // D: [1, 1, 1]




// // Qual é a saída?
// function digaOi(nome) {
//   return `Ola tudo bem, ${nome}`
// }

// console.log(digaOi()) // B: Ola tudo bem, undefined

// // A: Ola tudo bem,
// // B: Ola tudo bem, undefined
// // C: Ola tudo bem, null
// // D: ReferenceError


// // Qual é a saída?
// var status = '😎'

// setTimeout(() => {
//   const status = '😍'

//   const data = {

//     // objeto data é registrada, que é "🥑"
//     status: '🥑',

//     // O método pertence ao objeto data, portanto, "this" refere-se ao objeto data
//     getStatus() {

//       // a palavra-chave "this" se refere ao objeto ao qual o método pertence
//       return this.status
//     }
//   }

//   console.log(data.getStatus()) // B: "🥑" e "😎"

//   // Com o método call, podemos alterar o objeto ao qual a palavra-chave "this" se refere.
//   // Em funções, a palavra-chave "this" refere-se ao objeto ao qual a função pertence.
//   // Declaramos a função setTimeout no objeto global, portanto dentro da função setTimeout, 
//   // a palavra-chave "this" se refere ao objeto global. 
//   // No objeto global, existe uma variável chamada status com o valor de "😎". Ao logar this.status, "😎"fica logado.
//   console.log(data.getStatus.call(this))
// }, 0)


// // A: "🥑" e "😍"
// // B: "🥑" e "😎"
// // C: "😍" e "😎"
// // D: "😎" e "😎"


// // Qual é a saída?
// const pessoa = {
//   nome: 'Bob',
//   idade: 21
// }

// let cidade = pessoa.cidade 
// cidade = 'Fortaleza'

// console.log(pessoa) // A: { nome: "Bob", idade: 21 }

// // A: { nome: "Bob", idade: 21 }
// // B: { nome: "Bob", idade: 21, cidade: "Fortaleza" }
// // C: { nome: "Bob", idade: 21, cidade: undefined }
// // D: "Fortaleza"


// // Qual é a saída?
// function verifiqueIdade(idade) {
//   if (idade < 18) {
//     const mensagem = 'Desculpe, você é muito jovem.'

//   } else {
//     const mensagem = 'Ok! Você tem idade suficiente!'
//   }
//   return mensagem
// }
// console.log(verifiqueIdade(21)) // C: ReferenceError

// // A: "Desculpe, você é muito jovem."
// // B: "Ok! Você tem idade suficiente!"
// // C: ReferenceError
// // D: undefined


// // Que tipo de informação seria registrada?
// fetch('https://www.website.com/api/user/1')
// .then(res => res.json())
// .then(res => console.log(res))

// // A: O resultado do método fetch
// // B: O resultado da segunda invocação do método fetch.
// // C: O resultado do retorno de chamada (callback).then() anterior.
// // D: Seria sempre indefinido.
// // Resposta C: O resultado do retorno de chamada (callback).then() anterior.

// // Qual opção é uma maneira de definir hasName igual a true, desde que você não possa passar true como um argumento?
//   function getNome(nome) {
//     const temNome = ///// !!nome
//}
// // A: !!nome
// // B: nome
// // C: new Boolean(nome)
// // D: nome.length
// // Resposta A: !!nome

// // Qual é a saída?
// console.log('Eu quero pizza'[0]) // B: "E"

// // A: """
// // B: "E"
// // C: SyntaxError
// // D: undefined// 

// // Qual é a saída?
// function soma(num1, num2 = num1) {
//   console.log(num1 +  num2) // B: 20
// }
// soma(10)

// // A: NaN
// // B: 20
// // C: ReferenceError
// // D: undefined


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



// //  Qual é a saída?
// function dePizzaBob() {
//   return 'Aqui está a pizza!'
// }

// const deChocolateBob = () => "Aqui está o chocolate... agora vá para a academia já."

// console.log(dePizzaBob.prototype) // D: { constructor: ...} 
// console.log(deChocolateBob.prototype) // undefined


// // A: { constructor: ...}, { constructor: ...}
// // B: {} { constructor: ...}
// // C: { constructor: ...}, {}
// // D: { constructor: ...}, undefined

// //  Qual é a saída?
// const pessoa = {
//   nome: 'Bob',
//   idade: 21
// }

// // entries() retorna uma array dos próprios pares [key, value] 
// for(const[x, y] of  Object.entries(pessoa)) {
//   console.log(x, y);
// }

// // A: nome Bob e idade 21
// // B: ["nome", "Bob"] e ["idade", 21]
// // C: ["nome", "idade"] e undefined
// // D: Error


// //  Qual é a saída?
// function getItens(frutaLista, ...args, frutaFavorita) {
//   return [...frutaLista, ...args, frutaFavorita]
// }

// getItens(["banana", "maca"], "pera", "laranja") // D: SyntaxError - Um parâmetro rest deve ser o último em uma lista de parâmetros.

// // A: ["banana", "maca", "pera", "laranja"]
// // B: [["banana", "maca"], "pera", "laranja"]
// // C: ["banana", "maca", ["pera"], "laranja"]
// // D: SyntaxError 

// //  Qual é a saída?
// function numeros(a, b) {
//   if(a > b) console.log('a é maior');
//   else (console.log('b é maior'))

//   return 

//   a + b
// }

// console.log(numeros(4, 2)) // a é maior, undefined
// console.log(numeros(1, 2)) // b é maior, undefined

// // A: a é maior, 6 e b é maior, 3
// // B: a é maior, undefined e b é maior, undefined
// // C: undefined e undefined
// // D: SyntaxError
// // Resposta B: a é maior, undefined e b é maior, undefined

// //  Qual é a saída?
// class Pessoa {
//   constructor() {
//     this.nome = 'Bob'
//   }
// }

// Pessoa = class OutraPessoa {
//   constructor() {
//     this.nome = 'Peter'
//   }
// }

// const membro = new Pessoa()

// console.log(membro.nome) // B: "Peter"

// // A: "Bob"
// // B: "Peter"
// // C: Error: cannot redeclare Pessoa
// // D: SyntaxError

// //  Qual é a saída?
// const info = {
//   // Symbol tipo primitivo que armazena um valor único
//   [Symbol('a')]: 'b'
// }

// console.log(info)
// //Object.keys() retorna um array de propriedades enumeraveis de um determinado objeto
// console.log(Object.keys(info))

// // A: {Symbol('a'): 'b'} e ["{Symbol('a')"]
// // B: {} e []
// // C: { a: "b" } e ["a"]
// // D: {Symbol('a'): 'b'} e []

// //  Qual é a saída?
// const getLista = ([x, ...y]) => [x, y]
// const getUsuario = usuario => { nome: usuario.nome; idade: usuario.idade }

// const lista = [1, 2, 3, 4]
// const usuario = { nome: 'Bob', idade: 21}

// console.log(getLista(lista))
// console.log(getUsuario(usuario))

// // A: [1, [2, 3, 4]] e SyntaxError
// // B: [1, [2, 3, 4]] e { nome: "Bob", idade: 21 }
// // C: [1, 2, 3, 4] e { nome: "Bob", idade: 21 }
// // D: Error e { nome: "Bob", idade: 21 }
// // Resposta A: [1, [2, 3, 4]] e SyntaxError (confirmar enunciado e resposta)


// //  Qual é a saída?
// const nome = 'Bob'

// console.log(nome()) // C: TypeError

// // A: SyntaxError
// // B: ReferenceError
// // C: TypeError
// // D: undefined


// // Qual o valor da saída?
// const saida = `${[] && 'Im'}possível! Você deveria ${'' && `n't`} ver um terapeuta depois de tanto JavaScript lol`

// console.log(saida) // B: Impossível! Você deveria ver um terapeuta depois de tanto JavaScript lol
//                    // [] é um valor true, Com o operador &&, o valor do lado direito será retornado 
//                    // se o valor do lado esquerdo for um valor verdadeiro. Nesse caso, o valor da esquerda []
//                    // é um valor verdadeiro, então "Im'é retornado.

// // A: possível! Você deveria ver um terapeuta depois de tanto JavaScript lol
// // B: Impossível! Você deveria ver um terapeuta depois de tanto JavaScript lol
// // C: possível! Você não deveria ver um terapeuta depois de tanto JavaScript lol
// // D: Impossível! Você não deveria ver um terapeuta depois de tanto JavaScript lol


// // Qual é o valor da saída?
// // Com operador ||, podemos retornar o primeiro operando verdadeiro. Se todos os valores forem falsos, o último operando será retornado.
// const um = false || {} || null //  (false || {} || null): o objeto vazio {} é um valor verdadeiro. Este é o primeiro (e único) valor verdadeiro, que é retornado. um é igual a {}.
// const dois = null || false  || '' // (null || false || ""): todos os operandos são valores falsos. Isso significa que o último operando "" é retornado. dois é igual a "".
// const tres = [] || 0 || true  // ([] || 0 || ""): o array vazio [] é um valor verdadeiro. Este é o primeiro valor verdadeiro, que é retornado. tres é igual a [].

// console.log(um, dois, tres) // C: {} "" [] 

// // A: false null []
// // B: null "" true
// // C: {} "" []
// // D: null null true


// // Qual é o valor da saída?
// const minhaPromise = () => Promise.resolve('Eu resolvi!')

// function primeiraFuncao() {
//   minhaPromise().then(res => console.log(res))
//   console.log('segunda');
// }

// async function segundaFuncao() {
//   console.log(await minhaPromise());
//   console.log('segunda');
// }

// primeiraFuncao() // segunda, Eu resolvi!
// segundaFuncao() // Eu resolvi!, segunda

// // A: Eu resolvi!, segunda e Eu resolvi!, segunda
// // B: segunda, Eu resolvi! e segunda, Eu resolvi!
// // C: Eu resolvi!, segunda e segunda, Eu resolvi!
// // D: segunda, Eu resolvi! e Eu resolvi!, segunda


// // Qual é o valor da saída?
// const set = new Set()

// set.add(1)
// set.add('Bob')
// set.add({ nome: 'Bob' })

// for(let item of set) {
//   console.log(item + 2) // C: 3, Bob2, [object Object]2 - O  operador "+" não é usado apenas para adicionar valores numéricos, mas também para concatenar strings.
// }


// // A: 3, NaN, NaN
// // B: 3, 7, NaN
// // C: 3, Bob2, [object Object]2
// // D: "12", Bob2, [object Object]2


// // Qual é o seu valor?
// Promise.resolve(5) // C: Promise {<fulfilled>: 5}

// // A: 5
// // B: Promise {<pending>: 5}
// // C: Promise {<fulfilled>: 5}
// // D: Error


// // Qual é o seu valor?
// function compareMembros(pessoa1, pessoa2 = pessoa) {
//   if (pessoa1 !== pessoa2) {
//     console.log('Não é o mesmo!');
     
//   } else {
//     console.log('Eles são os mesmos!');
//   }
// }

// const pessoa = { nome: 'Bob' }

// compareMembros(pessoa) // B: Eles são os mesmos!

// // A: Não é o mesmo!
// // B: Eles são os mesmos!
// // C: ReferenceError
// // D: SyntaxError// 

// // Qual é o seu valor?
// const corConfig = {
//   vermelho: true,
//   azul: false,
//   verde: true,
//   preto: true,
//   amarelo: false
// }

// const cores = ['rosa', 'vermelho', 'azul']

// console.log(corConfig.cores[1]) // D: TypeError

// // A: true
// // B: false
// // C: undefined
// // D: TypeError


// // Qual é o seu valor?
// console.log('❤️' === '❤️') // A: true

// // A: true
// // B: false

// // Qual desses métodos modifica a matriz original?
// const emojis = ['✨', '🥑', '😍'];

// emojis.map(x => x + '✨');
// emojis.filter(x => x !== '🥑');
// emojis.find(x => x !== '🥑');
// emojis.reduce((acc, cur) => acc + '✨');
// emojis.slice(1, 2, '✨');
// emojis.splice(1, 2, '✨');

// // A: Todos eles
// // B: map reduce slice splice
// // C: map slice splice
// // D: splice
// // Resposta D: splice
// // Com método splice, modificamos o array original excluindo, substituindo ou adicionando elementos.
// // map, filter e slice retorna uma nova matriz, find retorna um elemento e reduce retorna um valor reduzido.

// // Qual é a saída?
// const comida = ['🍕', '🍫', '🥑', '🍔'];
// const info = { comidaFavorita: comida[0]}

// info.comidaFavorita = '🍝';

// console.log(comida) // A: ['🍕', '🍫', '🥑', '🍔']

// // A: ['🍕', '🍫', '🥑', '🍔']
// // B: ['🍝', '🍫', '🥑', '🍔']
// // C: ['🍝', '🍕', '🍫', '🥑', '🍔']
// // D: ReferenceError

// // O que esse método faz?
// JSON.parse() // A: Analisa JSON para um valor JavaScript

// // A: Analisa JSON para um valor JavaScript
// // B: analisa um objeto JavaScript para JSON
// // C: analisa qualquer valor JavaScript para JSON
// // D: analisa JSON apenas para um objeto JavaScript


// // Qual é o valor da saída?
// let nome = 'Bob'

// function getNome() {
//   console.log(nome)

//   let nome = 'Peter'
// }

// getNome() // D: ReferenceError

// // A: Bob
// // B: Peter
// // C: undefined
// // D: ReferenceError

// // Qual é a saída?
// function* geradorUm() {
//   // Com a palavra-chave yield valores em uma função geradora.
//   yield ['a', 'b', 'c']
// }

// function* geradorDois() {
//   // Com a palavra-chave yield*, podemos gerar valores de outra função geradora ou objeto iterável.
//   yield* ['a', 'b', 'c']
// }

// const um = geradorUm()
// const dois = geradorDois()

// console.log(um.next().value)
// console.log(dois.next().value)

// // A: a e a
// // B: a e undefined
// // C: ['a', 'b', 'c'] e a
// // D: a e ['a', 'b', 'c']


// // Qual é a saída?
// console.log(`${(x => x )('Eu amo')} programar`) // A: Eu amo programar

// // A: Eu amo programar
// // B: undefined programar
// // C: ${(x => x)('Eu amo') programar
// // D: TypeError


// // O que vai acontecer?
// let config = {
//   alert: setInterval(() => {
//     console.log('Alerta!') // C: O setInterval retorno de chamada (callback) ainda será chamado a cada segundo
//   }, 1000)
// }

// config = null

// // A: O setInterval retorno de chamada (callback) não será invocado
// // B: O setInterval retorno de chamada (callback) é invocado uma vez
// // C: O setInterval retorno de chamada (callback) ainda será chamado a cada segundo
// // D: Nós nunca invocamos config.alert(), config é null


// // Quais métodos retornarão o valor 'Ola Mundo!'?
// const meuMapa = new Map()
// const minhaFunc = () => 'saudacao'

// meuMapa.set(minhaFunc, 'Ola mundo')

// // 1
// meuMapa.get('saudacao')

// // 2
// meuMapa.get(minhaFunc)

// // 3
// meuMapa.get(() => 'saudacao')

// // A: 1
// // B: 2
// // C: 2 2 3
// // D: Todos eles
// // Resposta B: 2


// // Qual é a saída?
// const pessoa = {
//   nome: 'Bob',
//   idade: 21
// }

// // Ambas as funções alterarIdade alterarIdadeEhNome têm um parâmetro padrão
// // Primeiro, invocamos a alterarIdade função e passamos passoa objeto como seu argumento
// const alterarIdade = (x = { ...pessoa }) => (x.idade += 1)

// // invocamos a função alterarIdadeEhNome, porém não passamos um parâmetro. 
// // Em vez disso, o valor de x é igual a um novo objeto: { ...pessoa }.
// const alterarIdadeEhNome = (x = {...pessoa }) => {
//   x.idade += 1
//   x.nome = 'Peter'
// }
// alterarIdade(pessoa)
// alterarIdadeEhNome()

// console.log(pessoa) // B: Como é um novo objeto, não afeta os valores das propriedades do pessoa objeto.
// // A: {nome: "Peter", idade: 22}
// // B: {nome: "Peter", idade: 23}
// // C: {nome: "Bob", idade: 22}
// // D: {nome: "Bob", idade: 23}



// // Qual das opções a seguir retornará 6 ?
// function somarValues(x, y, z) {
//   return x + y + z
// }

// // A: somarValues([...1, 2, 3])
// // B: somarValues([...[1, 2, 3]])
// // C: somarValues(...[1, 2, 3])
// // D: somarValues([1, 2, 3])
// // Resposta C: somar(...[1, 2, 3])


// // Qual é a saída?
// let num = 1
// const lista = ['🥳', '🤠', '🥰', '🤪']
// // Com operando +=, estamos incrementando o valor de num por 1.
// // num tinha o valor inicial 1, então 1 + 1 é 2.
// // O item no segundo índice na lista matriz é 🥰
// // console.log(lista[2]) imprime🥰
// console.log(lista[num += 1]) // B: 🥰 

// // A: 🤠
// // B: 🥰
// // C: SyntaxError
// // D: ReferenceError


// // Qual é a saída?
// const pessoa = {
//   nome: 'Bob',
//   sobrenome: 'Marley',
//   pet: {
//     nome: 'Scooby',
//     raca: 'Labrador'
//   },
//   getNomeCompleto() {
//     return `${this.nome} ${this.sobrenome}`
//   }
// }

// console.log(pessoa.pet?.nome); // Bob
// console.log(pessoa.pet?.familia?.nome) // undefined
// console.log(pessoa.getNomeCompleto?.()) // Bob Marley 
// console.log(membro.getSobrenome?.()) // ReferenceError

// // Qual é a saída?
// const mantimentos = ['banana', 'maca', 'amendoim']

// if (mantimentos.indexOf('banana')) {
//   console.log('Temos que comprar bananas!');

// } else {
//   console.log(`Não temos que comprar bananas!`) // B: Não temos que comprar bananas!
// }

// // A: Temos que comprar bananas!
// // B: Não temos que comprar bananas!
// // C: undefined
// // D: 1
// // Resposta Passamos a condição mantimentos.indexOf("banana") para a instrução if. 
// // mantimentos.indexOf("banana")retorna 0, que é um valor falso. Como a condição na 
// // instrução if é falsa, o código no bloco else é executado e Não temos que comprar bananas! é registrado.


// // Qual é a saída?
// const config = {
//   linguagens: [],
//   set linguage(lang) {
//     return this.linguagens.push(lang)
//   }
// }

// console.log(config.linguage) // D: undefined

// // A: function linguage(lang) { this.linguagens.push(lang }
// // B: 0
// // C: []
// // D: undefined


// // Qual é a saída?
// const nome = 'Bob Marley'

// console.log(!typeof nome === 'object') // false 
// console.log(!typeof nome === 'string'); // false

// // A: false true
// // B: true false
// // C: false false
// // D: true true
// // Resposta typeof nome retorna "string"
// // A string "string" é um valor verdadeiro, então !typeof nome retorna o valor booleano false.
// // false === "object" e false === "string" ambos retornam false.


// // Qual é a saída?
// const add = x => y => z => {
//   console.log(x, y, z)

//   return x + y + z
// }

// add(4)(5)(6) // A: 4 5 6

// // A: 4 5 6
// // B: 6 5 4
// // C: 4 function function
// // D: undefined undefined 
// // Resposta A função add retorna uma arrow function, 
// ///                   que retorna uma arrow function, 
// //                    que retorna uma arrow function (ainda comigo?). 
// // A primeira função recebe um argumento x com o valor de 4. 
// // Chamamos a segunda função, que recebe um argumento y com o valor 5. 
// // Então invocamos a terceira função, que recebe um argumento z com o valor 6. 
// /// Quando estamos tentando acessar o valor x, y e z dentro da última arrow function, 
// // o mecanismo JS sobe na cadeia de escopo para encontrar os valores para x e de y acordo. Isso retorna 4 5 6.


// // Qual é a saída?
// async function* alcance(inicial, final) {

//   for(let i =  inicial; i <= final; i++) {

//     yield Promise.resolve(i)
//   }
// }

// (async() => {
//   const gen = alcance(1, 3);

//   for await (const item of gen) {
//     console.log(item) // C: 1 2 3
//   }
// })()

// // A: Promise {1} Promise {2} Promise {3}
// // B: Promise {<pending>} Promise {<pending>} Promise {<pending>}
// // C: 1 2 3
// // D: undefined undefined undefined


// // Qual é a saída?
// const minhaFunc = ({ x, y, z }) => {

//   console.log(x, y, z);
// }

// minhaFunc(1, 2, 3) // D: undefined undefined undefined
 
// // A: 1 2 3
// // B: {1: 1} {2: 2} {3: 3}
// // C: { 1: undefined } undefined undefined
// // D: undefined undefined undefined


// // Qual é a saída?
// function getMultar(velocidade, valor) {
//   const formatarVelocidade = new Intl.NumberFormat('pt-BR', {
//     style: 'unit',
//     unit: 'kilometer-per-hour'
//   }).format(velocidade)
//   const formatarValor = new Intl.NumberFormat('pt-BR', {
//     style: 'currency',
//     currency: 'BRL'
//   }).format(valor)

//   return `O motorista dirigiu a ${formatarVelocidade} e tem que pagar ${formatarValor}`
// }

// console.log(getMultar(130, 300)) // B: O motorista dirigiu 130 km/h e tem que pagar R$ 300,00
// // A: O motorista dirigiu 130 e tem que pagar 300
// // B: O motorista dirigiu 130 km/h e tem que pagar R$ 300,00
// // C: O motorista dirigiu indefinido e tem que pagar indefinido
// // D: O motorista dirigiu 130,00 e tem que pagar 300,00



// // Qual é a saída?
// const itensAssustadores = ['👻', '🎃', '🕸'];
// ({ item: itensAssustadores[3]} = { item: '💀'});

// console.log(itensAssustadores) // B: ["👻", "🎃", "🕸", "💀"]

// // A: ["👻", "🎃", "🕸"]
// // B: ["👻", "🎃", "🕸", "💀"]
// // C: ["👻", "🎃", "🕸", { item: "💀" }]
// // D: ["👻", "🎃", "🕸", "[object Object]"]


// // Qual é a saída?
// const nome = 'Bob Marley'
// const idade = 21

// console.log(Number.isNaN(nome)) // false
// console.log(Number.isNaN(idade)) // false

// console.log(isNaN(nome)) // true
// console.log(isNaN(idade)) // false

// // A: true false true false
// // B: true false false false
// // C: false false true false
// // D: false true false true
// // Resposta C: false false true false


// // Qual é a saída?
// const valorAleatorio = 21 
// function getInfo() {
//   console.log(typeof valorAleatorio);

//   const valorAleatorio = 'Bob Marley'

// }

// getInfo()

// // A: "number"
// // B: "string"
// // C: undefined
// // D: ReferenceError
// // Resposta D: ReferenceError - Na linha onde queremos registrar o valor de "typeof valorAleatorio", 
// // a variável valorAleatorio ainda não foi inicializada: a ReferenceErroré lançado!


// // Qual é a saída?
// const minhaPromise = Promise.resolve('hum!!! alguns dados legais');

// (async () => {

//   try {
//     console.log(await minhaPromise);

//   } catch {
    
//     throw new Error('Opa não funcionou')

//   } finally {
//     console.log('Oh finalmente!') // C: hum!!! alguns dados legais Oh finalmente!
//   }
// })()

// // A: hum!!! alguns dados legais
// // B: Oh finalmente!
// // C: hum!!! alguns dados legais Oh finalmente!
// // D: Opa não funcionou Oh finalmente!


// // Qual é a saída?
// const emojis = ['🥑', ['✨', '✨', ['🍕', '🍕']]];

// console.log(emojis.flat(1)) // B: ['🥑', '✨', '✨', ['🍕', '🍕']]


// // A: ['🥑', ['✨', '✨', ['🍕', '🍕']]]
// // B: ['🥑', '✨', '✨', ['🍕', '🍕']]
// // C: ['🥑', ['✨', '✨', '🍕', '🍕']]
// // D: ['🥑', '✨', '✨', '🍕', '🍕']


// // Qual é a saída?
// class Contar {
//   constructor() {
//     this.contar = 0
//   }
//   incrementar() {
//     this.contar++
//   }
// }
// const contarPrimeiro = new Contar()

// contarPrimeiro.incrementar()
// contarPrimeiro.incrementar()

// const contarSegundo = contarPrimeiro
// contarSegundo.incrementar()

// console.log(contarPrimeiro.contar) // D: 3


// // A: 0
// // B: 1
// // C: 2
// // D: 3


// // Qual é a saída?
// const minhaPromise = Promise.resolve('Promise');

// function funcUm() {

//   setTimeout(() => console.log('Timeout 1!'), 0) // 3º Timeout 1!

//   minhaPromise.then(res => res).then(res => console.log(`${res} 1!`)) // 2º Promise 1!
//   console.log('Última linha 1!') // 1º Última linha 1!
// }

// async function funcDois () {
//   const res = await minhaPromise

//   console.log(`${res} 2!`) // 4º Promise 2!

//   setTimeout(() => console.log('Timeout 2!'), 0) // 6º Timeout 2!
//   console.log('Última linha 2!') // 5º Última linha 2!
// }
// funcUm() // 1º Última linha 1! 2º Promise 1! 3º Timeout 1!
// funcDois() // 4º Promise 2! 5º Última linha 2! 6º Timeout 2!

// // A: Promise 1! Última linha 1! Promise 2! Última linha 2! Timeout 1! Timeout 2!
// // B: Última linha 1! Timeout 1! Promise 1! Última linha 2! Promise2! Timeout 2!
// // C: Última linha 1! Promise 2! Última linha 2! Promise 1! Timeout 1! Timeout 2!
// // D: Timeout 1! Promise 1! Última linha 1! Promise 2! Timeout 2! Última linha 2!



// Como podemos invocar soma de soma.js index.js?

// // soma.js
// export default function soma(x) {
//   return x + x;
// }

// // index.js
// import * as soma from './soma';

// // A: soma(4)
// // B: soma.soma(4)
// // C: soma.default(4)
// // D: O padrão não é importado com *, apenas exportações nomeadas
// // Resposta C: soma.default(4)

// // Qual é a saída?
// const manipulador = {
//   set: () => console.log('Adicionado uma nova propriedade!'),
//   get: () => console.log('Acessou a propriedade!'),
// };
// // O objeto Proxy é usado para definir comportamentos customizados para operações fundamentais 
// // (por exemplo, pesquisa de propriedade, atribuição, enumeração, invocação de função, etc.).
// const pessoa = new Proxy({}, manipulador)

// pessoa.nome = 'Bob'
// pessoa.nome 

// // A: Adicionado uma nova propriedade!
// // B: Acessou a propriedade!
// // C: Adicionado uma nova propriedade! Acessou a propriedade!
// // D: Nada é registrado
// // Resposta C: Adicionado uma nova propriedade! Acessou a propriedade!

// // Qual dos seguintes modificará o objeto pessoa?
// const pessoa = { nome: 'Bob'}
// // Object.seal() sela um Objeto, evitando que novas propriedades 
// // sejam adicionadas à ele e marcando todas as propriedades existentes como não configuráveis.
// Object.seal(pessoa) 

// // A: pessoa.nome = "Evan Bacon"
// // B: pessoa.idade = 21
// // C: delete pessoa.nome
// // D: Object.assign(pessoa, { idade: 21 })
// // Resposta // A: pessoa.nome = "Evan Bacon"


// // Qual dos seguintes modificará o objeto pessoa?
// const pessoa = {
//   nome: 'Bob Marley',
//   endereco: {
//     rua: 'rua teste'
//   }
// }
// Object.freeze(pessoa)

// // A: pessoa.nome = "Evan Bacon"
// // B: delete pessoa.endereco
// // C: pessoa.endereco.rua = "av teste"
// // D: pessoa.pet = { nome: "Mara" }
// // Resposta C: pessoa.endereco.rua = "av teste"


// // Qual é a saída?
// const add = x => x + x

// function minhaFunc(num = 2, value = add(num)) {
//   console.log(num, value);
// }
// minhaFunc() // 2 e 4
// minhaFunc(3) // 3 e 6

// // A: 2 4 e 3 6
// // B: 2 NaN e 3 NaN
// // C: 2 Error e 3 6
// // D: 2 4 e 3 Error
// // Resposta A: 2 4 e 3 6


// // Qual é a saída?
// class Contar {
//   #numero = 10

//   incrementa() {
//     this.#numero++
//   }
//   getNum() {
//     return this.#num
//   }
// }
// const contar = new Contar()
// contar.incrementa()

// console.log(contar.#numero) // D: SyntaxError

// // A: 10
// // B: 11
// // C: undefined
// // D: SyntaxError

// // O que está faltando?
// const equipes = [
//   {
//     nome: 'Equipe 1', membros: ['Paulo', 'Lisa']
//   },
//   {
//     nome: 'Equipe 2', membros: ['Laura', 'Time']
//   }
// ]

// function* getMembros(membros) {

//   for(let i = 0; i < membros.length; i++) {
//     yield membros[i]
//   }
// }

// function* getEquipes(equipes) {
//   for(let i = 0; i < equipes.length; i++) {

//   }
// }
// const obj = getEquipes(times)
// obj.next()
// obj.next()

// // A: yield getMembros(times[i].membros)
// // B: yield* getMembros(times[i].membros)
// // C: return getMembros(times[i].membros)
// // D: return yield getMembros(times[i].membros)
// Resposta B: yield* getMembros(times[i].membros)


// // Qual é a saída?
// const pessoa = {
//   nome: 'Bob Marley',
//   hobbies: ['programar']
// }

// function addHobby(hobby, hobbies = pessoa.hobbies) {
//   hobbies.push(hobby)

//   return hobbies
// }

// addHobby('correr', [])
// addHobby('dançar')
// addHobby('cozinhar', pessoa.hobbies)

// console.log(pessoa.hobbies) // C: ["programar", "dançar", "cozinhar"]

// // A: ["programar"]
// // B: ["programar", "dançar"]
// // C: ["programar", "dançar", "cozinhar"]
// // D: ["programar", "correr", "dançar", "cozinhar"]

// // Qual é a saída?
// class Passaro {
//   constructor() {
//     console.log("Eu sou um passaro. 🦢");
//   }
// }

// class Flamingo extends Passaro {
//   constructor() {
//     console.log("Eu sou rosa. 🌸");
//     super()
//   }
// }
// const pet = new Flamingo() // C: Eu sou rosa. 🌸 Eu sou um passaro. 🦢

// // A: Eu sou rosa. 🌸
// // B: Eu sou rosa. 🌸 Eu sou um passaro. 🦢
// // C: Eu sou um passaro. 🦢 Eu sou rosa. 🌸
// // D: Nothing, we didn't call any method// 




// // Qual das opções resulta em erro?
// const emojis = ['🎄', '🎅🏼', '🎁', '⭐'];
// emojis.push('🦌')
// emojis.splice('0, 2')
// emojis = [...emojis, '🥂']
// emojis.length = 0

// // A: 1
// // B: 1 e 2
// // C: 3 e 4
// // D: 3
// // Resposta D: 3



// // O que precisamos adicionar ao objeto pessoa para obter ["Bunny Wailer", 21]como saída de [...pessoa]?
// var pessoa = {
//     nome: 'Bunny Wailer',
//     idade: 21,
    
// }

// console.log(pessoa);
// pessoa[Symbol.iterator] = function* () { 
//      yield 1
//      yield 2
    
// }


// console.log(pessoa);

// // [...pessoa]

// A: Nada, o objeto é iterável por padrão
// B: *[Symbol.iterator]() { for (let x in this) yield* this[x] }
// C: *[Symbol.iterator]() { yield* Object.values(this) }
// D: *[Symbol.iterator]() { for (let x in this) yield this }// 


// // Qual é a saída?
// let contar = 0
// const numeros = [0, 1, 2, 3]

// numeros.forEach(num => {
//     if(num) contar += 1
// })

// console.log(contar) // C: 3

// // A: 1
// // B: 2
// // C: 3
// // D: 4


// // Qual é a saída?
// function getFruta(frutas) {
//     console.log(frutas?.[1]?.[1]) // "?" nos permite acessar opcionalmente propriedades aninhadas mais profundas dentro de objetos.
// }

// getFruta([['🍊', '🍌'], ['🍍']]) // undefined
// getFruta() // undefined
// getFruta([['🍍'], ['🍊', '🍌']]) // 🍌

// // A: null, undefined, 🍌
// // B: [], null, 🍌
// // C: [], [], 🍌
// // D: undefined, undefined, 🍌
// // Resposta D: 🍌



// // Qual é a saída?
// class Calc{
//     constructor() {
//         this.contar = 0
//     }
//     incrementa() {
//         this.contar++
//     }
// }

// const calc = new Calc()
// new Calc().incrementa()

// console.log(calc.contar) // A: 0

// // A: 0
// // B: 1
// // C: undefined
// // D: ReferenceError


// // Qual é a saída?
// const usuario = {
//     email: 'email@email.com',
//     password: '12345'
// }

// const atualizarUsuario = ({ email, password }) => {

//     if (email) {
//         // usado para copiar os valores de todas as propriedades 
//         // próprias enumeráveis de um ou mais objetos de origem para um objeto destino.
//         Object.assign(usuario, { email })
//     }

//     if (password) {
//         usuario.password = password
//     }

//     return usuario
// }

// const atualizadoUsuario = atualizarUsuario({ email: 'novo@email.com'})

// console.log(atualizadoUsuario === usuario) // B: true (Verdadeiro)

// // A: false
// // B: true
// // C: TypeError
// // D: ReferenceError


// // Qual é a saída?
// const fruta = ['🍌', '🍊', '🍎']

// // retorna uma cópia de parte de um array 
// // a partir de um subarray criado entre as posições início e fim
// fruta.slice(0, 1)

// //  altera o conteúdo de uma lista, 
// // adicionando novos elementos enquanto remove elementos antigos.
// fruta.splice(0, 1)

// // adiciona um ou mais elementos no início de um array e 
// // retorna o número de elementos
// fruta.unshift('🍇')
// console.log(fruta) // C: ['🍇', '🍊', '🍎']

// // A: ['🍌', '🍊', '🍎']
// // B: ['🍊', '🍎']
// // C: ['🍇', '🍊', '🍎']
// // D: ['🍇', '🍌', '🍊', '🍎']


// // Qual é a saída?
// const animais = {}
// let cachorro = { emoji: '🐶'}
// let gato = { emoji: '🐈' }

// animais[cachorro] = { ...cachorro, nome: 'Scooby'}
// animais[gato] = { ...gato, nome: 'Galileu'}

// console.log(animais[cachorro]);

// // A: { emoji: "🐶", nome: "Scooby" }
// // B: { emoji: "🐈", nome: "Galileu" }
// // C: undefined
// // D: ReferenceError

// // Qual é a saída?
// const usuario = {
//     email: 'meu@email.com',
//     atualizarEmail: email => {
//         this.email = email
//     }
// }
// usuario.atualizarEmail('nova@email.com')

// console.log(usuario.email) // A: meu@rmail.com

// // A: meu@email.com
// // B: nova@email.com
// // C: undefined
// // D: ReferenceError// 

// // Qual é a saída?
// const promessa1 = Promise.resolve('Primeira')
// const promessa2 = Promise.resolve('Segunda')
// const promessa3 = Promise.reject('Terceira')
// const promessa4 = Promise.resolve('Quarta')

// const rodarPromessas = async () => {

//     // O Promise.all executa as promessas passadas em paralelo.
//     const res1 = await Promise.all([promessa1, promessa2])
//     const res2 = await Promise.all([promessa3, promessa4])

//     // Se uma promessa falhar, o Promise.all rejeita com o valor da promise rejeitada
//     return [res1, res2]
// }

// rodarPromessas()
// // O método then() retorna uma Promise.
// .then(res => console.log(res))
// // catch() retorna uma Promise e lida apenas com casos rejeitados.
// .catch(err => console.log(err))

// A: [['Primeira', 'Seguna'], ['Quarta']]
// B: [['Primeira', 'Seguna'], ['Terceira', 'Quarta']]
// C: [['Primeira', 'Seguna']]
// D: 'Terceira'

// // Qual deve ser o valor do método para registrar { nome: 'Bob', idade: 22 }?
// const chaves = ['nome', 'idade']
// const valores = ['Bob', 22]

// const metodo = 
// Object.[método](chaves.map((_, i) => {
//     return [chaves[i], valores[i]]
// }))
// console.log(metodo) // fromEntries

// // A: entries
// // B: values
// // C: fromEntries
// // D: forEach

// // Qual é a saída?
// const criarMembro = ({ email, endereco = {}}) => {
//     const validaEmail = /.+\@.+\..+/.test(email)

//     if(!validaEmail) throw new Error('email valido por favor')

//     return {
//         email,
//         endereco: endereco ? endereco : null 
//     }
// }

// const membro = criarMembro({ email: 'meu@email.com'})
// console.log(membro) // C : { email: 'meu@rmail.com', endereco: {}}



// // Qual é a saída?
// let valorAleatorio = { nome: 'Bob'}
// valorAleatorio = 23

// if (!typeof valorAleatorio === 'string') {
//     console.log('Não é uma string!');

// } else {
//     console.log('Sim é uma string!') // B: Sim é uma string
// }

// // A: Não é uma string
// // B: Sim é uma string!
// // C: TypeError
// // D: undefined// 

// Qual é a diferença entre indefinido (undefined) e não definido (not undefined) em JavaScript?
// Resposta A diferença é que undefined refere-se ao valor da variável 
// e is not defined é uma mensagem de erro que indica que a variável não existe no programa que está a correr.

// // Para qual valor de x os resultados das seguintes afirmações não são os mesmos?
// if(x <= 100) {}
// if(!(x > 100)) {}

// // Qual será a saída do código a seguir?
// var saida = (function(x) {
//   delete x;
//   return x;
// })(0)

// console.log(saida) // Saida: 0

// // Qual será a saída do código a seguir?
// var x = 1;
// var saida = (function() {
//   delete x;
//   return x;
// })()

// console.log(saida) // Saida:  1

// // Qual será a saída do código a seguir?
// var x = { foo: 1 };
// var saida = (function() {
//   delete x.foo;
//   return x.foo;
// })()

// console.log(saida) // Saida: undefined

// // Qual será a saída do código a seguir?
// var Colaborador = {
//   compania: 'xyz'
// }

// var colaborador1 = Object.create(Colaborador)

// delete colaborador1.compania

// console.log(colaborador1.compania) // Saida: xyz

// // O que está undefined x 1 em JavaScript
// var arvores = ["pau-brasil", "baía", "cedro", "carvalho", "bordo"]
// delete arvores[3]

// console.log(arvores) // ['pau-brasil', 'baía', 'cedro', vazio, 'bordo']


// // Qual será a saída do código a seguir?
// var arvores = ["xyz", "xxxx", "teste", "rian", "maça"]
// delete arvores[3];

// console.log(arvores.length) // 5

// // Qual será a saída do código a seguir?
// var bar = true 

// console.log(bar + 0) // 1
// console.log(bar = "xyz") // xyz
// console.log(bar + true) // xyztrue
// console.log(bar + false) // xyzfalse

// // Qual será a saída do código a seguir?
// var z = 1, y = z = typeof y;
// console.log(y) // undefined

// Qual será a saída do código a seguir?
// var foo = function bar() {
//   return 12;
// }

// typeof bar() // Saida: ReferenceError


// // Qual é a diferença entre declarar uma função nos formatos listados abaixo?
// var foo = function() {

// }

// function bar() {

// }

// // Resposta A principal diferença é que função foo é definida em run-time e é chamada de expressão de função.
// // Enquanto função bar é definida em parse-time e é chamada de instrução de função.


// // Qual é a saída?

// bar();

// (function abc() {
//   console.log('algo') // TypeError: bar(...) is not a function
// })();

// function bar() {
//   console.log('bar foi chamado') // Saida bar foi chamado
// }


// // Qual será a saída do código a seguir?
// var salario = "R$1000";

// (function() {
//   console.log('O salário original era ' + salario) // Saida O salário original era undefined

//   var salario = "R$5000"

//   console.log("Meu novo salario " + salario) // Saida Meu novo salario R$5000
// })()

// Qual é a diferença entre typeofe instanceof?
// É aconselhado utilizar typeof para tipos de dado simples (textos, números e booleanos)
// E o instanceof para dados mais complexos, como instâncias de uma classe.


// //  Calcule o comprimento da matriz associativa
// var contarArray = {
//   A: 3,
//   B: 4
// };

// contarArray["C"] = 1

// var total = Object.keys(contarArray).length;

// console.log(total) // 3

// Diferença entre Function, Method e Constructor chamadas em JavaScript.
// Resposta Métodos em JavaScript nada mais são do que propriedades de objetos que são funções.
// Funções em Javascript são conhecidas como objetos de primeira classe (first-class objects). 
// Isso porque tudo o que você pode fazer com um objeto, você pode fazer com funções. 
// Na realidade uma função é um objeto do tipo Function.
// O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.


// // Qual seria a saída do código a seguir?
// function Usuario(nome) {
//   this.nome = nome || 'Bonny'
// }
// var pessoa = new Usuario("xyz")["localizacao"] = "BRA"

// console.log(pessoa) // Saida BRA 

// O que são Service Workers e quando você pode usá-los?
// Resposta Um service worker é um tipo especial de worker baseado em eventos, o qual é registrado para um determinado path e origem.
// Na prática, ele é um arquivo JavaScript que pode controlar as páginas do site ao qual ele está associado, interceptando e modificando requisições e a navegação em si.

// Descreva o padrão singleton em JavaScript
// O Singleton Pattern diz que você pode ter apenas uma única instância de uma classe (ou, no caso do JavaScript, função construtora). Isso significa que uma vez que a classe for instanciada, 
// você deve sempre retornar esta mesma instância em chamadas subsequentes.


// // Liste os recursos importantes do JavaScript ES6?
// // Resposta : Template Strings
// // Interpolação de Expressões
// // Expressões incorporadas
// // Strings de várias linhas sem hacks
// // Formatação de string
// // Marcação de string para escape HTML seguro, localização e muito mais
// console.log('texto string linha 1\n' + 
//             'texto string linha 2');

// console.log(`texto string linha 1
//            texto string linha 1`);

// //  Interpolação de Expressões
// //  Para encapsular expressões dentro de strings, você precisava utilizar a seguinte sintaxe:
// var a = 5 
// var b = 10 

// console.log('Quinze é ' + (a + b) +  ' e \nnão ' + (2 * a + b) + '.');

// // com template strings, você pode utilizar as substituições sintáticas tornando o código mais legível:
// var c = 5
// var d = 10

// console.log(`Quinze é  ${c + b} e 
//            não ${2 * a + b}`);

// // Tagged template strings
// var e = 5 
// var f = 10

// function tag(strings, ...values) {
//   console.log(strings[0]);
//   console.log(strings[1]);
//   console.log(strings[0]);
//   console.log(strings[1]);

//   return 'Bazinga'
// }

// tag`Ola ${e = f} mundo ${e * f}`

// // Substituição String
// let nome = `Bob Marley`

// console.log(`Olá, ${nome}`);

// // String Multilinha
// let msg = `ola \ 
// mundo`

// console.log(`${msg}`);

// // operador de espalhamento
// // O operador Spread permite que iteráveis ​​(arrays/objects/strings) 
// // sejam expandidos em argumentos/elementos únicos.
// function soma(x, y, z) {
//   return x + y + z
// }
// const numeros = [10, 20, 30]

// // usando operador de espalhamento
// console.log(soma(...numeros));

// // Usando Aplicar (ES5)
// console.log(soma.apply(null, numeros));

// // Copiando uma matriz:
// let frutas = ['maça', 'Laranja', 'Banana']
// let novoArrayFrutas = [...frutas]

// console.log(novoArrayFrutas);

// // Concatenando arrays:
// let arr1 = ['A', 'B', 'C']
// let arr2 = ['X', 'Y', 'Z']

// let resultado = [...arr1, ...arr2]

// console.log(resultado);

// // Espalhando elementos junto com um elemento individual:
// let frutos = ['Maça', 'Laranja', 'Banana']
// let novoFrutos = ['Cereja', ...frutos]

// console.log(novoFrutos);

// // Espalhando elementos em chamadas de função:
// let fruta = ['Maça', 'Laranja', 'Banana']

// const getFrutas = (f1, f2, f3) => {
//   console.log(`Frutas: ${f1}, ${f2} e ${f3}`);
// }
// getFrutas(...fruta)

// // Sintaxe de propagação para literais de objeto:
// var obj1 = { id: 101, nome: 'Bob Marley'}
// var obj2 = { idade: 35, pais: 'BRA'}

// const colaborador = {...obj1, ...obj2}

// console.log(colaborador);


// // O objeto "Set" permite que você armazene valores únicos de qualquer tipo, desde valores primitivos a referências a objetos.
// let numeros = new Set([10, 20, 30, 40, 50])

// console.log(numeros) // { 10, 20, 30, 40 }
// console.log(typeof numeros) // Object

// // valores padrão
// function add(x = 10, y = 20) {
//   console.log(x + y) // 40
// }

// add(10, 30)

// // repeat()
// const msg = 'Olá Mundo \n'

// console.log(`${msg.repeat(3)}`);


// // Arrow Function
// let add = (x, y) => x  + y 

// console.log(add(10, 20)) // 30

// // Arrow Function com this 
// var pessoa = {
//   nome: 'Bob',
//   acoes: ['bicicleta', 'caminhada', 'esqui', 'surf'],
//   printAcoes: function() {
//     var _this = this 

//     this.acoes.forEach((acao) => {
//       var str = _this.nome + " gosta de " + acao 

//       console.log(str);
//     })
//   }
// }
// pessoa.printAcoes()


// // Atribuição via desestruturação

// // Exemplo 
// const telefone = {

//   titulo: 'iPhone',
//   preco: 999,
//   descricao: 'O iPhone é um smartphone desenvolvido pela Apple'
// }

// console.log(telefone.titulo);

// // Exemplo com Atribuição via desestruturação
// const { titulo, preco, descricao } = {
//   titulo: 'iPhone',
//   preco: 999,
//   descricao: 'O iPhone é um smartphone desenvolvido pela Apple'
// }
// console.log(titulo)
// console.log(preco)
// console.log(descricao)


// // Generators
// function* generator(num){
//   yield num + 10
//   yield num + 20
//   yield num + 30
// }

// let gen = generator(10)

// console.log(gen.next().value) // 20
// console.log(gen.next().value) // 30
// console.log(gen.next().value) // 40

// // Symbols
// // Symbol (símbolo) é um tipo primitivo que armazena um valor único.
// // Seu propósito é esse, servir como um identificador único.
// const simbolo = Symbol()
// const simbolo2 = Symbol(42)
// const simbolo3 = Symbol('Ola')

// console.log(typeof simbolo) // simbolo
// console.log(simbolo3.toString()) // simbolo(ola)
// console.log(Symbol('Ola') === Symbol('ola')) // false

// // Iterador
// const titulo = "ES6"
// const iterador = titulo[Symbol.iterator]()

// console.log(iterador.next().value) // E
// console.log(iterador.next().value) // S
// console.log(iterador.next().value) // 6


// // Explique o que é uma função de retorno de chamada e forneça um exemplo simples:

// function modificaArray(arr, callback) {

//   // fazer algo para chegar aqui
//   arr.push(100)

//   // em seguida, execute a função de retorno de chamada que foi passada
//   callback()
// }

// var arr = [1, 2, 3, 4, 5]

// modificaArray(arr, function() {

//   console.log("O array foi modificado", arr);
// })


// // Qual é a saída do código a seguir?

// let obj = {

//   id: "1",
//   nome: "usuario22",
//   idade: "26",
//   trabalho: "programador"
// }

// console.log(Object.keys(obj)); // saída: ['id', 'nome', 'idade', 'trabalho']

// console.log(Object.values(obj)); // saída: ['1', 'usuario22', '26', 'programador']

// console.log(Object.entries(obj)); // saída: ['id', '1']
//                                         //  ['nome', 'usuario22']
//                                         //  ['idade', '26']
//                                         //  ['trabalho', 'programador']



// // Qual é a saída do código a seguir?

// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for(let i = 0; i < 10; i++) {

//   setTimeout(() => console.log(b[i]), 1000) // saída: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// }

// for(var i = 0; i < 10; i++) {

//   setTimeout(() => console.log(b[i]), 1000) // saída: undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined
//  }


// // Qual é a saída do código a seguir?

// const encontrarVogais =  str => {

//   let contar = 0
//   const vogais = ['a', 'e', 'i', 'o', 'u']

//   for(let char of str.toLowerCase()) {

//     if (vogais.includes(char)) {
      
//       contar++
//     }
//   }
//   return contar 
// }

// console.log(encontrarVogais("Valeu"));
// // Qual saída do código?
// var strA = 'olá'
// var strB = strA

// strB = 'Adeus!'

// console.log(strA) // olá

// // Qual saída do código?
// var objA = { prop1: 42}
// var objB = objA

// objB = {}

// console.log(objA) // {prop1: 42}

// // Qual saída do código?
// var arrA = [0, 1, 2, 3, 4, 5]
// var arrB = arrA

// arrB[0] = 42

// console.log(arrA) // [42, 1, 2, 3, 4, 5]


// // Qual saída do código?
// var arrA = [0, 1, 2, 3, 4, 5]
// var arrB = arrA.slice()

// arrB[0] = 42

// console.log(arrA) // [0,1,2,3,4,5]


// // Qual saída do código?
// var arrA = [{ prop1: 'valor da matriz A!!' }, { algumaProp: 'também o valor da matriz A!'}, 3, 4, 5]
// var arrB = arrA.slice()

// arrB[0].prop1 = 42
// arrB[3] = 20

// console.log(arrA) // [{prop1: 42}, {someProp: "also value of array A!"}, 3,4,5]

// // Qual saída do código?
// console.log(colaboradorId) // undefined

// var colaboradorId = '19000'

// // 1. Some Value
// // 2. undefined
// // 3. Type Error
// // 4. ReferenceError: colaboradorId is not defined


// // Qual saída do código?
// var colaboradorId = '1234abe';

// (function() {
//   console.log(colaboradorId) // undefined

//   var colaboradorId = '122345'
// })()

// // 1. '122345'
// // 2. undefined
// // 3. Type Error
// // 4. ReferenceError: colaboradorId is not defined


// // Qual saída do código?
// var colaboradorId = '1234abe';

// (function() {
//   console.log(colaboradorId); // undefined

//   var colaboradorId = '122345';

//   (function() {

//     var colaboradorId = 'abc1234';
//   }())
// }())

// // 1. '122345'
// // 2. undefined
// // 3. '1234abe'
// // 4. ReferenceError: colaboradorId is not defined


// // Qual saída do código?
// (function() {
//   console.log(typeof exibirFunc);

//   var exibirFunc = function() {
//     console.log('Oi estou dentro exibirFunc'); // undefined
//   }
// }())

// // 1. undefined
// // 2. function
// // 3. 'Oi estou dentro exibirFunc'
// // 4. ReferenceError: exibirFunc is not defined


// // Qual seria a saída do código a seguir?

// var colaboradorId = 'abc123';

// function foo() {
//   colaboradorId = '123bcd'

//   return
// }
// foo()

// console.log(colaboradorId) // 1. undefined

// // 1. undefined
// // 2. '123bcd'
// // 3. 'abc123'
// // 4. ReferenceError: colaboradorId is not defined

// // Qual seria a saída do código a seguir?
// var colaboradorId = 'abc123'

// function foo() {
//   colaboradorId = '123bcd'

//   return

//   function colaboradorId() {}
// }
// foo();

// console.log(colaboradorId); // 3. abc123

// // 1.undefined
// // 2. '123bcd'
// // 3. 'abc123'
// // 4. ReferenceError: colaboradorId is not defined


// // Qual seria a saída do código a seguir?
// var colaboradorId = 'abc123'

// function foo() {
//   colaboradorId()

//   return 

//   function colaboradorId() {
//     console.log(typeof colaboradorId);
//   }
// }

// foo()


// // 1. Indefinido
// // 2. função
// // 3. String
// // 4. ReferenceError: colaboradorId não está definido

// Resposta 2. função


// // Qual seria a saída do código a seguir?

// function foo() {

//   colaboradorId()

//   var produto = 'Carro'

//   return 

//   function colaboradorId() {

//     console.log(produto); // undefined
//   }
// }

// foo()

// // 1. undefined
// // 2. Type Error
// // 3. 'Carro'
// // 4. ReferenceError: produto is not defined

// // Resposta 1. undefined

// Resposta 1. undefined


// // Qual seria a saída do código a seguir?

// (function foo() {
//   bar()

//   function bar() {
//     abc()

//     console.log(typeof abc);
//   }

//   function abc() {
//     console.log(typeof bar);
//   }
// }())

// // 1. undefined undefined
// // 2. Type Error
// // 3. function function
// // 4. ReferenceError: bar is not defined

// // Resposta 3. function function


// // Qual seria a saída do código a seguir?
// (function() {

//   'use strict'

//   var pessoa = {
//     nome: 'Joao'
//   }

//   pessoa.salario = 'R$1000'
//   pessoa['pais'] = 'BRA'

//   Object.defineProperty(pessoa, 'telefoneNo', {
//     value: '99999999999',
//     enumerable: false
//   })
//   console.log(Object.keys(pessoa)); // 4. ["nome", "salario", "pais"]
// })()

//   // 1. Type Error
//   // 2. undefined
//   // 3. ["nome", "salario", "pais", "telefoneNo"]
//   // 4. ["nome", "salario", "pais"]

//   // Resposta 4. ["nome", "salario", "pais"] - enumerable é verdadeiro (true) se e somente se esta propriedade aparece durante enumeração das propriedades no objeto correspondente.
                                                  // Valor padrão é false.


// // Qual seria a saída do código a seguir?
// (function() {
//   var objA = {
//     foo: 'foo',
//     bar: 'bar'
//   }
//   var objB = {
//     foo: 'foo',
//     bar: 'bar'
//   }
//   console.log(objA == objB); // false 
//   console.log(objA === objB); // false
// }())                                               

// // 1.false true
// // 2. false false
// // 3. true false
// // 4. true true


// // Qual seria a saída do código a seguir?
// (function() {
//   var objA = new Object({ foo: "foo "})
//   console.log(objA);
//   var objB = new Object({ foo: "foo" })
//   console.log(objB);

//   console.log(objA == objB); // false
//   console.log(objA === objB); // false
// }())

// // 1. false true
// // 2. false false
// // 3. true false
// // 4. true true


// // Qual seria a saída do código a seguir?
// (function() {
//   var objA = Object.create({
//     foo: 'foo'
//   })
//   var objB = Object.create({
//     foo: 'foo'
//   })
//   console.log(objA == objB); // false
//   console.log(objA === objB); // false
// }())

// // 1. false true
// // 2. false false
// // 3. true false
// // 4. true true


// // Qual seria a saída do código a seguir?
// (function() {
//   var objA = Object.create({
//     foo: 'foo'
//   })
//   var objB = Object.create(objA)

//   console.log(objA == objB); // false 
//   console.log(objA === objB); // false
// }())

// // 1. false true
// // 2. false false
// // 3. true false
// // 4. true true


// // Qual seria a saída do código a seguir?
// (function() {
//   var objA = Object.create({
//     foo: 'foo'
//   })
//   var objB = Object.create(objA)

//   console.log(objA.toString() == objB.toString()); // true
//   console.log(objA.toString() === objB.toString()); // true
// }())

// // 1. false true
// // 2. false false
// // 3. true false
// // 4. true true


// // Qual seria a saída do código a seguir?

// (function() {
//   var objA = Object.create({
//     foo: 'foo'
//   })
//   var objB = objA

//   console.log(objA == objB); // true
//   console.log(objA === objB); // true 
//   console.log(objA.toString() == objB.toString()); // true 
//   console.log(objA.toString() === objB.toString()); // true
// }())

// // 1. true true true false
// // 2. true false true true
// // 3. true true true true
// // 4. true true false false


// // Qual seria a saída do código a seguir?
// (function() {
//   var objA = Object.create({
//     foo: 'foo'
//   })
//   var objB = objA

//   objB.foo = 'bar'

//   console.log(objA.foo); // bar
//   console.log(objB.foo); // bar
// }())

// // 1. foo bar
// // 2. bar bar
// // 3. foo foo
// // 4. bar foo


// // Qual seria a saída do código a seguir?

// (function() {
//   var objA = Object.create({
//     foo: 'foo'
//   })
//   var objB = objA

//   objB.foo = 'bar'

//   delete objA.foo;
//   console.log(objA.foo); // foo
//   console.log(objB.foo); // foo

// }())

// // 1. foo bar
// // 2. bar bar
// // 3. foo foo
// // 4. bar foo


// // Qual seria a saída do código a seguir?

// (function() {
// 	var objA = {
// 		foo: 'foo'
// 	};
// 	var objB = objA;
// 	objB.foo = 'bar';

// 	delete objA.foo;
// 	console.log(objA.foo); // undefined
// 	console.log(objB.foo); // undefined
// }());

// // 1. foo bar
// // 2. undefined undefined
// // 3. foo foo
// // 4. undefined bar


// // Qual seria a saída do código a seguir?
// (function() {
//   var array = new Array('100')

//   console.log(array); // ["100"]
//   console.log(array.length); // 1
// }())

// // 1. undefined undefined
// // 2. [undefined × 100] 100
// // 3. ["100"] 1
// // 4. ReferenceError: array is not defined


// // Qual seria a saída do código a seguir?

// (function() {
//   var array1 = []
//   var array2 = new Array(100)
//   var array3 = new Array(['1', '2', '3', 4, 5, 6])

//   console.log(array1); // []
//   console.log(array2); // []
//   console.log(array3); // [Array[5]]
//   console.log(array3.length); // 1
// }())

// // 1. [] [] [Array[5]] 1
// // 2. [] [undefined × 100] Array[5] 1
// // 3. [] [] ['1',2,'3',4,5.6] 5
// // 4. [] [] [Array[5]] 5

// // Resposta 1. [] [] [Array[5]] 1


// // Qual seria a saída do código a seguir?
// (function() {

//   var array = new Array('a', 'b', 'c', 'd', 'e')
  
//   array[10] = 'f'
  

//   delete array[10]

//   console.log(array.length); // 11
// }())

// // 1. 11
// // 2. 5
// // 3. 6
// // 4. undefined


// // Qual seria a saída do código a seguir?
// (function() {
//   var animal = ['vaca', 'cavalo']

//   animal.push('gato')
//   animal.push('cachorro', 'rato', 'cabra')

//   console.log(animal.length); // 6

//   // 1. 4
//   // 2. 5
//   // 3. 6
//   // 4. undefined
// }())


// // Qual seria a saída do código a seguir?
// (function() {
//     var array = [1, 2, 3, 4, 5]

//     console.log(array.indexOf(2)); // 1
//     console.log([{ nome: 'Joao'}, { nome: 'Joao'}].indexOf({ nome: 'Joao'})); // -1
//     console.log([[1], [2], [3], [4]].indexOf([3])); // -1
//     console.log('abcdefg'.indexOf('e')); // 4
// }())

// // 1. 1 -1 -1 4
// // 2. 1 0 -1 4
// // 3. 1 -1 -1 -1
// // 4. 1 undefined -1 4

// // Qual seria a saída do código a seguir?
// (function() {

//   var array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6]

//   console.log(array.indexOf(2)); // 1
//   console.log(array.indexOf(2, 3)); // 6
//   console.log(array.indexOf(2, 10)); // -1
// }())

// // 1. 1 -1 -1
// // 2. 1 6 -1
// // 3. 1 1 -1
// // 4. 1 undefined undefined


// // Qual seria a saída do código a seguir?
// (function() {
//   var numeros = [2, 3, 4, 8, 9, 11, 13, 12, 16]
//   var ate = numeros.filter(function(elemento, index) {
//     return elemento % 2 === 0
//   })

//   console.log(ate); // [ 2, 4, 8, 12, 16 ]

//   var contemDivisivelPor3 = numeros.some(function(elemento, index) {
//     return elemento % 3 === 0
//   })

//   console.log(contemDivisivelPor3); // true
  
// }())

// // 1. [ 2, 4, 8, 12, 16 ] [ 0, 3, 0, 0, 9, 0, 12]
// // 2. [ 2, 4, 8, 12, 16 ] [ 3, 9, 12]
// // 3. [ 2, 4, 8, 12, 16 ] true
// // 4. [ 2, 4, 8, 12, 16 ] false


// // Qual seria a saída do código a seguir?
// (function() {
//   var recipientes = [2, 0, false, "", '12', true]
//   var recipientes = recipientes.filter(Boolean)

//   console.log(recipientes);

//   var recipientes = recipientes.filter(Number)

//   console.log(recipientes);

//   var recipientes = recipientes.filter(String)

//   console.log(recipientes);

//   var recipientes = recipientes.filter(Object)

//   console.log(recipientes);

// }())

// // 1. [ 2, '12', true ] [ 2, '12', true ] [ 2, '12', true ] [ 2, '12', true ]
// // 2. [false, true] [ 2 ] ['12'] [ ]
// // 3. [2,0,false,"", '12', true] [2,0,false,"", '12', true] [2,0,false,"", '12', true] [2,0,false,"", '12', true]
// // 4. [ 2, '12', true ] [ 2, '12', true, false ] [ 2, '12', true,false ] [ 2, '12', true,false]


// // Qual seria a saída do código a seguir?
// (function() {

//   var lista = ['foo', 'bar', 'joao', 'rita']

//   console.log(lista.slice(1)); // ['bar', 'joao', 'rita']
//   console.log(lista.slice(1, 3)); // ['bar', 'joao']
//   console.log(lista.slice()); // ['foo', 'bar', 'joao', 'rita']
//   console.log(lista.slice(2, 2)); // []
//   console.log(lista); // [ 'foo', 'bar', 'joao', 'rita' ]

// }())

// // 1. [ 'bar', 'joao', 'rita' ] [ 'bar', 'joao' ] [ 'foo', 'bar', 'joao', 'rita' ] [] [ 'foo', 'bar', 'joao', 'rita' ]
// // 2. [ 'bar', 'joao', 'rita' ] [ 'bar', 'joao','rita ] [ 'foo', 'bar', 'joao', 'rita' ] [] [ 'foo', 'bar', 'joao', 'rita' ]
// // 3. [ 'joao', 'rita' ] [ 'bar', 'joao' ] [ 'foo', 'bar', 'joao', 'rita' ] [] [ 'foo', 'bar', 'joao', 'rita' ]
// // 4. [ 'foo' ] [ 'bar', 'joao' ] [ 'foo', 'bar', 'joao', 'rita' ] [] [ 'foo', 'bar', 'joao', 'rita' ]


// // Qual seria a saída do código a seguir?
// (function() {
//   var lista = ['foo', 'bar', 'joao']

//   console.log(lista.splice(1)); // [ 'bar', 'john' ]
//   console.log(lista.splice(1, 2)); // []
//   console.log(lista); // ['foo']

// }())

// // 1. [ 'bar', 'john' ] [] [ 'foo' ]
// // 2. [ 'bar', 'john' ] [] [ 'bar', 'john' ]
// // 3. [ 'bar', 'john' ] [ 'bar', 'john' ] [ 'bar', 'john' ]
// // 4. [ 'bar', 'john' ] [] []


// // Qual seria a saída do código a seguir?
// (function() {
//   var arrayNum = [2, 8, 15, 16, 23, 42]

//   arrayNum.sort()

//   console.log(arrayNum); // 3. [ 15, 16, 2, 23, 42, 8 ]
// }())

// // 1. [2, 8, 15, 16, 23, 42]
// // 2. [42, 23, 26, 15, 8, 2]
// // 3. [ 15, 16, 2, 23, 42, 8 ]
// // 4. [ 2, 8, 15, 16, 23, 42 ]


// // Qual seria a saída do seguinte código ?
// function funcA() {

//   console.log("funcA", this);

//   (function internaFuncA1() {
//     console.log("internaFuncA1", this);

//     (function internaFuncA2() {
//       console.log("internaFuncA2", this);
//     }())
//   }())
// }

// console.log(funcA);

// // 1. funcA Window {...} innerFunc1 Window {...} innerFunA2 Window {...}
// // 2. undefined
// // 3. Type Error
// // 4. ReferenceError: this is not defined

// // Resposta 1. funcA Window {...} innerFunc1 Window {...} innerFunA2 Window {...}


// // Qual seria a saída do seguinte código ?
// var obj = {
//   mensagem: "Ola",

//   internaMensagem: !(function() {
//     console.log(this.mensagem); // undefined
//   }())
// }

// console.log(obj.internaMensagem); // true

// // 1. ReferenceError: this.mensagem is not defined
// // 2. undefined
// // 3. Type Error
// // 4. undefined true


// // Qual seria a saída do seguinte código ?
// var obj = {
//   mensagem: "Ola",

//   internaMensagem: function() {
//     return this.mensagem
//   }
// }

// console.log(obj.internaMensagem()); // Ola

// // 1. Ola
// // 2. undefined
// // 3. Type Error
// // 4. ReferenceError: this.message is not defined


// // Qual seria a saída do seguinte código ?

// var obj = {
//   mensagem: 'Ola',
//   internaMensagem: function() {
//     (function() {
//       console.log(this.mensagem); // undefined
//     }())
//   }
// }
// console.log(obj.internaMensagem());


// // 1. Type Error
// // 2. Ola
// // 3. undefined 
// // 4. ReferenceError: this.mensagem is not defined


// // Qual seria a saída do seguinte código ?
// var obj = {
//   mensagem: 'Ola',
//   internaMensagem: function() {

//     var self =  this;

//     (function() {
//       console.log(self.mensagem); // Ola
//     }())
//   }
// }
// console.log(obj.internaMensagem()); 

// // 1. Type Error
// // 2. 'Ola' 
// // 3. undefined 
// // 4. ReferenceError: self.mensagem is not defined


// // Qual seria a saída do seguinte código ?
// function minhaFunc() {
//   console.log(this.mensagem); // undefined
// }

// minhaFunc.mensagem = 'Ola Joao'

// console.log(minhaFunc()); 

// // 1. Type Error
// // 2. 'Hi John'
// // 3. undefined 
// // 4. ReferenceError: this.mensagem is not defined


// Qual seria a saída do seguinte código ?

// function minhaFunc() {
//   console.log(minhaFunc.mensagem); // Ola Joao
// }

// minhaFunc.mensagem = 'Ola Joao'

// console.log(minhaFunc()); 

// // 1. Type Error
// // 2. 'Ola Joao'
// // 3. undefined
// // 4. ReferenceError: this.message is not defined


// // Qual seria a saída do seguinte código ?
// function minhaFunc() {

//   minhaFunc.mensagem = 'Ola Joao'

//   console.log(minhaFunc.mensagem); // Ola Joao
// }

// console.log(minhaFunc()); 

// // 1. Type Error
// // 2. 'Ola Joao'
// // 3. undefined
// // 4. ReferenceError: this.message is not defined


// // Qual seria a saída do seguinte código ?

// function minhaFunc() {
//   console.log(arguments.length);
// }

// console.log(minhaFunc()); // 0
// console.log(minhaFunc("a", "b")); // 2
// console.log(minhaFunc("a","b","c","d")); // 4

// // 1. 2 2 2
// // 2. 0 2 4
// // 3. undefined
// // 4. ReferenceError


// // Qual seria a saída do seguinte código ?

// function Pessoa(nome, idade) {
//   this.nome = nome || "Joao";
//   this.idade = idade || 24;
//   this.exibirNome = function() {
//     console.log(this.nome);
//   }
// }

// Pessoa.nome = "Joao";
// Pessoa.exibirNome = function() {
//   console.log(this.nome);
// }

// var pessoa1 = new Pessoa('Joao');

// pessoa1.exibirNome();

// Pessoa.exibirNome();

// // 1. Joao Pessoa
// // 2. Joao Joao
// // 3. Joao undefined
// // 4. Joao Joao

// // Resposta 1. Joao Pessoa -  VERIFICAR


// // Qual seria a saída do seguinte código ?

// function gerenciadorSenha() {
//   var password = '12345678'
//   this.usuarioNome = 'Joao'

//   return {
//     pwd: password
//   }
// }

// var usuarioInfo = gerenciadorSenha()

// console.log(usuarioInfo.pwd); // 12345678
// console.log(usuarioInfo.usuarioNome); // undefined

// // 1. 12345678 Window
// // 2. 12345678 Joao
// // 3. 12345678 undefined
// // 4. undefined undefined


// // Qual seria a saída do seguinte código ?
// var colaboradorId = 'aq123'

// function Colaborador() {
//   this.colaboradorId = 'bq1uy'
  
// }

// console.log(Colaborador.colaboradorId); // undefined

// // 1. Reference Error
// // 2. aq123
// // 3. bq1uy
// // 4. undefined


// // Qual seria a saída do seguinte código ?

// var colaboradorId = 'aq123'

// function Colaborador() {
//   this.colaboradorId = 'bq1uy'
// }

// console.log(new Colaborador().colaboradorId); // bq1uy

// Colaborador.prototype.colaboradorId = 'kj182'
// Colaborador.prototype.TrabalhoId = '1BJKSJ'

// console.log(new Colaborador().TrabalhoId); // 1BJKSJ
// console.log(new Colaborador().colaboradorId); // bq1uy

// // 1. bq1uy 1BJKSJ bq1uy undefined
// // 2. bq1uy 1BJKSJ bq1uy
// // 3. bq1uy 1BJKSJ kj182
// // 4. undefined 1BJKSJ kj182


// // Qual seria a saída do seguinte código ?

// var colaboradorId = 'aq123';
// (function Colaborador() {
//   try {
//     throw 'foo123';

//   } catch (colaboradorId) {
//     console.log(colaboradorId); // foo123
//   }
//   console.log(colaboradorId); // aq123
// }())

// // 1. foo123 aq123
// // 2. foo123 foo123
// // 3. aq123 aq123
// // 4. foo123 undefined


// // Qual seria a saída do seguinte código ?
// (function() {
//   var saudacao = 'Ola Mundo';
//   var cumprimentar = [].filter.call(saudacao, function(elemento, index) {
//     return index > 5
//   })

//   console.log(cumprimentar); // 4. [ 'n', 'd', 'o' ]
// }())

// // 1. Ola Mundo
// // 2. undefined
// // 3. Mundo
// // 4. [ 'n', 'd', 'o' ]


// // Qual seria a saída do seguinte código ?
// (function() {
//   var fooConta = {
//     nome: 'Joao',
//     quantia: 4000,
//     deduzaQuantia: function(quantia) {
//       this.quantia -= quantia;

//       return 'Total da quantia restante na conta: ' + this.quantia
//     }
//   }
//   console.log(fooConta);

//   var barConta = {
//     nome: 'Joao',
//     quantia: 6000
//   };

//   var retirarValorPor =  function(totalQuantia) {
    
//     return fooConta.deduzaQuantia.bind(barConta, totalQuantia) 
//   }

//   console.log(retirarValorPor(400)()); // Total da quantia restante na conta: 5600 Pegamos 6000 - 400 = 5600
//   console.log(retirarValorPor(300)()); // Total da quantia restante na conta: 5300 Pegamos 5600 - 300 = 5300

// }())

// // 1. Total da quantia restante na conta: 5600 Total da quantia restante na conta: 5300
// // 2. undefined undefined
// // 3. Total da quantia restante na conta: 3600 Total da quantia restante na conta: 3300
// // 4. Total da quantia restante na conta: 5600 Total da quantia restante na conta: 5600


// // Qual seria a saída do código a seguir?

// (function() {

//   var fooConta = {
//     nome: 'Joao',
//     quantia: 4000,
//     deduzaQuantia: function(quantia) {
//       this.quantia -= quantia

//       console.log(quantia);

//       return this.quantia
//     }
//   }
//   var barConta = {
//     nome: 'Joao',
//     quantia: 6000
//   }

//   var retirarValorPor = function(totalQuantia) {

//     console.log(barConta.quantia);
//     return fooConta.deduzaQuantia.apply(barConta, [totalQuantia])
//   }

//   console.log(retirarValorPor(400)); // 5600 Pegamos 6000 - 400 = 5600
//   console.log(retirarValorPor(300)); // 5300 Pegamos 5600 - 300 = 5300
//   console.log(retirarValorPor(200)); // 5100 Pegamos 5300 - 200 = 5100

// }())

// // 1. 5600 5300 5100
// // 2. 3600 3300 3100
// // 3. 5600 3300 5100



//  Qual seria a saída do código a seguir?

// (function saudarNovoCliente() {
//   console.log('Ola ' + this.nome); // A. Ola Joao
// }.bind({
//   nome: 'Joao'
// })())

// // A. Ola Joao
// // Reference Error
// // Window
// // undefined


// //  Qual seria a saída do código a seguir?

// function buscarDadosDoServidor(apiUrl) {
//   var nome = "Joao";

//   return {
//     then: function(fn) {
//       fn(nome)
//     }
//   }
// }

// buscarDadosDoServidor('www.google.com').then(function(nome) {
//   console.log(nome); // Joao
// })

// // A. Joao
// // B. undefined
// // C. Reference Error
// // D. fn is not defined


// //  Qual seria a saída do código a seguir?

// (function() {

//   var arrayNumero = [2, 8, 15, 16, 23, 42]

//   Array.prototype.sort = function(a, b) {
//     return a - b 
//   }

//   arrayNumero.sort()

//   console.log(arrayNumero); // [ 2, 8, 15, 16, 23, 42 ]
// }());

// (function() {

//   var numeroArray = [2, 8, 15, 16, 23, 42]

//   numeroArray.sort(function(a,b) {

//     if (a == b) {
      
//       return 0;

//     } else {
//       return a < b ? -1 : 1;
//     }
//   })

//   console.log(numeroArray); // [ 2, 8, 15, 16, 23, 42 ]
// }());

// (function() {

//   var numeroArray = [2, 8, 15, 16, 23, 42]

//   numeroArray.sort(function(a, b) {

//     return a - b;
//   })

//   console.log(numeroArray); // [ 2, 8, 15, 16, 23, 42 ]
// }());

// // 1. [ 2, 8, 15, 16, 23, 42 ] [ 2, 8, 15, 16, 23, 42 ] [ 2, 8, 15, 16, 23, 42 ]
// // 2 undefined undefined undefined
// // 3. [42, 23, 16, 15, 8, 2] [42, 23, 16, 15, 8, 2] [42, 23, 16, 15, 8, 2]
// // 4. Reference Error


// //  Qual seria a saída do código a seguir?

// (function() {

//   function digaOla() {

//     var nome = "Ola Joao"

//     return {

//       nomeCompleto: nome
//     }
//   }
//   console.log(digaOla().nomeCompleto); // Ola Joao
// })()

// // 1. Ola Joao
// // 2. undefined
// // 3. Reference Error
// // 4. Uncaught TypeError: Cannot read property 'nomeCompleto' of undefined


// //  Qual seria a saída do código a seguir?

// function buscarNumero() {

//   return (2, 4, 5)
// }

// var numero = buscarNumero()

// console.log(numero); // 1. 5

// // 1. 5
// // 2. undefined
// // 3. 2
// // 4. (2,4,5)


// //  Qual seria a saída do código a seguir?
// function buscarNumero() {

//   return;
// }

// var numero = buscarNumero()

// console.log(numero); // undefined


// // 1. null
// // 2. undefined
// // 3. ""
// // 4. 0


// // Qual seria a saída do código a seguir?
// function mul(x) {

//   return function(y) {

//     return [x*y, function(z) {

//       return x * y + z 
//     }]
//   }
// }

// console.log(mul(2)(3)[0]); // 2 * 3 + 0 = 6
// console.log(mul(2)(3)[1](4)); // 2 * 3 * 1 + 4 = 10

// // 1. 6, 10
// // 2. undefined undefined
// // 3. Reference Error
// // 4. 10, 6

// // Resposta 1. 6, 10



// // Qual seria a saída do código a seguir?

// function mul(x) {

//   return function(y) {

//     return {
//       resultado: x * y,
//       soma: function(z) {

//         return x * y + z 
//       }
//     }
//   }
// }

// console.log(mul(2)(3).resultado); // 2 * 3 = 6
// console.log(mul(2)(3).soma(4)); // 2 * 3 + 4 = 10

// // 1. 6, 10
// // 2. undefined undefined
// // 3. Reference Error
// // 4. 10, 6


// // Qual das seguintes palavras-chave é usada para definir uma variável em Javascript?

// A. var 
// B. let 
// C. ambos A e B 
// D. Nenhuma das acima

// Resposta C. As palavras-chave var e let são usadas para definir uma variável em Javascript.


// // Ao encontrar declarações vazias, o que o Javascript Interpreter faz?

// A. Lança um erro.
// B. Ignora as declarações.
// C. Dá um aviso.
// D. Nenhuma das acima.

// Resposta: B. Em Javascript, o interpretador ignorará as instruções vazias sempre que as encontrar.


// Qual será a saída do seguinte trecho de código?

// a = 5 + "9";

// document.write(a); // 59 - o primeiro número é do tipo inteiro e o segundo do tipo string. O trecho de código dá prioridade ao tipo de string e os concatena devido ao operador '+'.

// A. Erro de Compilação
// B. 14
// C. Erro tempo de execução 
// D. 59


// // Qual será a saída do seguinte trecho de código?
// var a = "Escalador"
// var resultado = a.substring(2, 4);

// console.log(resultado); // ca

// // A. al 
// // B. ala
// // C. ca
// // D. calad



// // Qual será a saída do seguinte trecho de código?

// var x = 12;
// var y = 8;
// var res = eval("x + y")

// console.log(res); // 20

// // A. 20
// // B. x + y
// // C. 128 
// // D. Nehuma


// Qual palavra-chave é usada para verificar se uma determinada propriedade é válida ou não?

// 1. in
// 2. is in 
// 3. exists 
// 4. lies 

// Resposta 1. in - A palavra-chave in é usada para verificar se a propriedade fornecida é válida ou não em Javascript.


// Qual é o uso da tag <noscript> em Javascript?

// 1. O conteúdo é exibido por navegadores não baseados em JS>
// 2. Limpa todos os cookies e cache;
// 3. Ambos 1 e 2.
// 4. Nunhuma

// Resposta 1. A tag <noscript> é exibida apenas por navegadores não JavaScript.


// // Qual será a saída do seguinte trecho de código?
// (function() {

//   setTimeout(() => console.log(1), 2000)
//   console.log(2);
//   setTimeout(() => console.log(3), 0)
//   console.log(4);
// })();

// // 1. 1234
// // 2. 2341
// // 3. 2431
// // 4. 4321

// // Resposta 3. 2431 - Primeiro o 2 é impresso com o console.log, então mesmo com um atraso de 0ms, 
//                      // o 4 é impresso antes do 3 porque JS executa setTimeout com a API da Web, 
//                      //  e assim toda a função é executada primeiro. Por último, após um atraso de 2000ms, o 1 é impresso.


// // Qual será a saída do seguinte trecho de código?
// (function(a) {

//   return (function() {

//     console.log(a); // 3. 21 - Mesmo que a seja definido na função externa, devido ao fechamento, as funções internas têm acesso a ela.

//     a = 6;
//   })()
// })(21)

// // 1. 6
// // 2. NaN
// // 3. 21
// // 4. Nenhuma das acima 



// // Qual será a saída do seguinte trecho de código?

// function resolver(arr, rotacoes) {

//   if(rotacoes == 0) return arr 

//   for(let i = 0; i < rotacoes; i++) {

//     let elemento = arr.pop()

//     arr.unshift(elemento)
//   }

//   return arr
// }

// resolver([44, 1, 22, 111], 5)

// 1. [111, 44, 1, 22]
// 2. [44, 1, 22, 111]
// 3. [111, 44, 1, 22]
// 4. [1, 22, 111, 44]



// // Qual será a saída para o seguinte trecho de código?

// function Func() {

//   document.getElementById("exemplo").innerHTML = Math.sqrt(81)
// }

// Func()

// 1. 9
// 2. 81
// 3. Erro 
// 4. 0 

// Resposta 1. 9 - O método sqrt() retorna a raiz quadrada do parâmetro passado, que está em uma função javascript embutida.


// Quando o valor de um operador é NULL, o typeof retornado pelo operador unário é:

// 1. boolean
// 2. undefined
// 3. Object
// 4. Integer

// Resposta 3. Object - Qualquer valor NULL de operador sempre retornará typeof object.


// // Qual será a saída do seguinte trecho de código?

// var a = 1;
// var b = 0;

// while (a <= 3) {
  
//   a++;


//   b += a * 2

//   // print(b)
//   console.log(b);
// }

// // 1. 4 10 18 
// // 2. 1 2 3
// // 3. 1 4 7
// // 4. Nenhuma das acimas

// // Resposta 1. 4 10 18 - O loop será executado 3 vezes, antes de atender à condição de saída. 
//                       // O primeiro valor de b será 2 * 2 = 4, 
//                       //            seguido por 4 + 3 * 2 = 10 e, 
//                      // em seguida, o valor de 10 + 4 * 2 = 18.



// O que a instrução “depurador” do Javascript faz?

// 1. Ele irá depurar todos os erros no progrma em tempo de execução 
// 2. Ele atua como um ponto de interrupção em um programa.
// 3. Ele depurará o erro na instrução atual, se houver.
// 4. Tudo o que precede.

// Resposta 2. A instrução 'debugger' é usada para configurar os pontos de interrupção em prováveis ​
//​pontos de erro no trecho de código, usando a janela do depurador.


// // Qual será a saída do seguinte trecho de código?

// var a = Math.max()
// var b = Math.min()

// console.log(a); // -Infinity
// console.log(b); // Infinity

// 1. -Infinity Infinity
// 2. Infinity -Infinity
// 3. Infinity Infinity
// 4. -Infinity -Infinity

// Resposta 1. -Infinity Infinity - O método Math.max() retorna -Infinity por padrão 
              // e o método Math.min() retorna o valor Infinity por padrão quando passado sem nenhum parâmetro.

            
// // Qual será a saída do seguinte trecho de código?

// var a = Math.max() < Math.min(); 
// var b = Math.max() > Math.min() 

// console.log(a); // verdadeiro (true)
// console.log(b); // falso (false)

// 1. true false 
// 2. false true 
// 3. true true 
// 4. false false 

// Resposta 1. true true - Math.max() é menor que Math.min() porque Math.max() retorna -Infinity e Math.min() retorna Infinity.


// // Qual será a saída do seguinte trecho de código?

// var a = true + true + true * 3;

// console.log(a); // 4. 5 - true é considerado o número 1 quando usado em qualquer expressão aritmética, portanto, a expressão é avaliada como 5.

// // 1. 3
// // 2. 0 
// // 3. Erro 
// // 4. 5


// // Qual é a saída do seguinte trecho de código?

// console.log(NaN === NaN); // 2. falso(false) - NaN não é considerado igual a NaN mesmo depois de usar o operador de igualdade estrita.

// // 1. true
// // 2. false 
// // 3. undefined
// // 4. Erro


// // Qual será a saída do seguinte trecho de código?

// console.log(typeof(NaN)); // 2. Number - é definido para ser do tipo número apesar de seu nome (não um número).

// // 1. Object
// // 2. Number
// // 3. String
// // 4. Nenhuma das acima 


// // O que o método 'toLocateString()' faz em JS?
// 1. Retorna uma representação de objeto localizada.
// 2. Retorna uma string analisada. 
// 3. Retorna uma representação de string localizada de um objeto. 
// 4. Nenhuma das acimas.

// Resposta 3. retorna uma representação de string específica local desse objeto usando a localidade do ambiente.


// O processo no qual um objeto ou estrutura de dados é traduzido em um formato adequado 
// para transferência em uma rede ou armazenamento é chamado?

// 1. Serialização de Objetos. 
// 2. Encapsulamento de Objetos.
// 3. Herança de objeto.
// 4. Nenhuma das acima.

// Resposta 1. A Serialização de Objetos é o processo no qual um objeto ou estrutura de dados é traduzido em um formato adequado para transferência em uma rede ou armazenamento.


// Qual função é usada para serializar um objeto em uma string JSON em Javascript?

// 1. stringify()
// 2. parse()
// 3. convert() 
// 4. Nenhuma das acima 

// Resposta 1. A função JSON.stringify() é usada para converter um objeto JSON em formato de string.


// Os 3 atributos básicos do objeto em Javascript são:

// 1. classe, protótipo, parâmetros dos objetos.
// 2. classe, protótipo, sinalizador extensível do objeto. 
// 3. classe, parâmetros, sinalizador extensível do objeto. 
// 4. classes, objeto nativo e sinalizador extensível de interfaces e objetos. 

// Resposta 2 e 4 - Em geral para objetos em Javascript, os objetos são associados a 3 atributos básicos, Classe, protótipo, sinalizador extensível do objeto.


// // Qual será a saída do seguinte trecho de código?

// let soma = 0;
// const a = [1, 2, 3];

// a.forEach(buscarSoma);

// console.log(soma); // 1. 6 - O trecho de código calcula a soma dos números em uma matriz, usando o método de loops forEach.

// function buscarSoma(elemento) {

//   soma += elemento
// }

// buscarSoma()

// // 1. 6
// // 2. 1
// // 3. 2
// // 4. Nenhuma das acima 


// // Qual será a saída do seguinte trecho de código?

// a = [1, 2, 3, 4, 5];

// console.log(a.slice(2, 4)); // 1. 3, 4

// 1. 3, 4
// 2. 2, 3
// 3. 2, 4, 5
// 4. 2, 3, 4


// // Qual será a saída do seguinte trecho de código?
// console.log(parseInt("123Ola")); // 123
// console.log(parseInt("Ola123")); // NaN 

// // 1. 123 NaN 
// // 2. 123Ola ola123
// // 3. NaN NaN 
// // 4. 123 123

// // Resposta 1. - O método parseInt() converte uma string em um inteiro, se possível. Se a string começar com um número, ela converterá essa parte numérica e a retornará. Caso contrário, ele retornará NaN.


// Quais das seguintes opções são closures em Javascript?

// 1. variaveis 
// 2. Funções 
// 3. Objetos 
// 4. Todos acima são

// Resposta 4. Todos acima são


// // Qual das opções a seguir não é uma framework Javascript?

// 1. Node 
// 2. Vue 
// 3. React 
// 4. Cassandra

// Resposta 4. Cassandra 



// // Qual será a saída do seguinte trecho de código?

// var a = 'hello';
// var soma = 0;

// for(var i = 0; i < a.length; i++) {

//   soma += (a[i] - 'a');
// }

// console.log(soma); // 1. NaN  - o a[i] - 'a' não é tipificado para um tipo inteiro e, portanto, o resultado é NaN.

// // 1. 47 
// // 2. NaN 
// // 3. 0
// // 4. Nenhuma das acima 


// // Qual palavra-chave é usada para declarar uma função assíncrona em Javascript?

// 1. async
// 2. await
// 3. setTimeout
// 4. Nenhuma das acima

// Resposta 1. async


// // Qual será a saída do seguinte trecho de código?

// const set = new Set();

// set.add(5)
// set.add('Ola')
// set.add({nome: 'Escalar'})

// for(let item of set) {

//   console.log(item + 6); // 3. 11 Ola6 [object Object]6 - Os primeiros 2 números são adicionados como números inteiros, 
//   // seguidos pela concatenação de strings. Finalmente, uma vez que ambos não são do tipo string, JS stringifica tanto o objeto quanto o número e os concatena. Quando um objeto é encadeado, ele é lido como [object Object] e então concatenado.
// }

// // 1. 11 NaN NaN 
// // 2. 11 NaN [object Object]
// // 3. 11 Ola6 [object Object]6
// // 4. Nenhuma das acima 

// Como os objetos são comparados quando são verificados com o operador de igualdade estrita?

// 1. O Conteúdo dos objetos é comparado 
// B. Suas referências são comparadas 
// 3. Ambos A e B 
// 4. Nenhuma das acima

// Resposta B. Suas referências são comparadas  - Em Javascript, os objetos são passados ​​por referência e, portanto, o operador de igualdade estrita compara suas referências.


// O que o operador … faz em JS?

// 1. É usado para espalhar iteráveis para elementos individuais.
// 2. É usado para descrever um tipo de dados de tamanho indefinido.dados
// 3. Não existe tal operador 
// 4. Nenhuma das acima 

// Resposta 1. É usado para espalhar iteráveis para elementos individuais. -  O operador … é usado para espalhar iteráveis ​​para elementos individuais em Javascript e também é chamado de operador de propagação.


// // Qual será a saída do seguinte trecho de código?
// const exemplo = ({ a, b, c }) => {

//   console.log(a, b, c);
// }
// exemplo(0, 1, 2)

// // 1. 0 1 2 
// // 2. 0 undefined undefined
// // 3. undefined undefined undefined
// // 4. Nenhuma das acima 

// Resposta 3. undefined undefined undefined - Como estamos passando números individuais em vez de um único objeto para a função, o Javascript inicializará os parâmetros do objeto com seu valor padrão de undefined.


// // Qual será a saída do seguinte trecho de código?

// let a = [1, 2, 3, 4, 5, 6];
// var esquerda = 0, direita = 5;
// var encontrado = false;
// var objetivo = 5;

// while(esquerda <= direita){

//   var meio = Math.floor((esquerda + direita) / 2);

//   console.log(meio);

//   if (a[meio] == objetivo) {
    
//     encontrado = true;
//     break;

//   } else if (a[meio] < objetivo) {
    
//     esquerda = meio + 1;

//   } else {

//     direita = meio - 1
//   }
// }

// if (encontrado) {
  
//   console.log("Sim");

// } else {

//   console.log("Não");
// }

// // 1. Sim 
// // 2. Não 
// // 3. Erro de sintaxe 
// // 4. Nenhuma das acima

// // Resposta 1. Sim - O código acima executa a pesquisa binária para pesquisar o elemento de destino 5 na matriz fornecida. Se for encontrado, imprime SIM senão NÃO.


// // Qual será a saída do seguinte trecho de código?
// let s  = "00000001111111";
// let l = 0, r = s.length - 1, ans = -1;

// while(l <= r) {

//   var meio = Math.floor((l + r) / 2);

//   console.log(meio);

//   if (s[meio] == '1') {
    
//     ans = meio;
//     r = meio - 1;
 
//   } else {

//     l = meio + 1;
//   }
// }

// console.log(ans); // 2. 7 - Aqui, estamos procurando binários pelo índice da primeira ocorrência do caractere '1' na string fornecida. 
//                          // Quando obtemos o caractere '1' no índice médio, nós o armazenamos como resposta e movemos para a metade esquerda que terá o primeiro índice '1' se ocorrer. 
//                          // Caso contrário, passamos para a metade direita. Portanto, a resposta será 7 (indexação baseada em 0).

// // 1. 8
// // 2. 7
// // 3. 0
// // 4. 1



// // Qual será a saída do seguinte trecho de código?
// let n = 24;
// let l = 0; r = 100, ans = n;

// let meio = Math.floor((l + r) / 2);



// while(l <= r) {

//   let meio = Math.floor((l + r) / 2); // 50

//   if (meio * meio <= n) {
    
//     ans = meio; // 4
//     l = meio + 1; // 5

//   } else {

//     r = meio - 1;
//   }
// }

// console.log(ans); // 2. 4 - O trecho de código basicamente usa pesquisa binária para calcular o piso da raiz quadrada de um número. 
//                  // Como a raiz quadrada é uma função crescente, a pesquisa binária é aplicável aqui. Aqui, para n = 24, a resposta é 4.

// // 1. 5
// // 2. 4
// // 3. 6
// // 4. 3


// // Qual será a saída do seguinte trecho de código?

// const obj1 = { Nome: 'Ola', Idade: 16 }
// const obj2 = { Nome: 'Ola', Idade: 16 }

// console.log(obj1 === obj2); // 2. falo (false) - O operador de igualdade estrita compara objetos por suas referências, 
//                             // portanto, mesmo que o conteúdo de ambos os objetos seja o mesmo, suas referências não correspondem, 
//                             // resultando é falso.

// // 1. true 
// // 2. false 
// // 3. undefined
// // 4. Nenhuma das acima 


// // O que acontece quando executamos este código?


// function cachorro() {

//   console.log("Eu sou um cachorro.");
// }

// cachorro.som = "Latido";

// // 1. Erro de sintaxe.
// // 2. "Eu sou um cachorro" é impresso.
// // 3. Erro de referência.
// // 4. Nada acontece

// // Resposta 4. Nada acontece - Nada acontece no código acima, e é totalmente válido porque funções em Javascript são tratadas como objetos.


// Qual objeto em Javascript não tem um protótipo (prototype)?

// 1. Objeto base 
// 2. Todos os objetos têm um protótipo 
// 3. Nenhum dos objetos tem um protótipo. 
// 4. Nenhuma das acima 

// Resposta 1. Objeto base - Objetos base são os únicos objetos em Javascript que não possuem um protótipo.


// // Qual será a saída do seguinte trecho de código?
// function teste(...args) {

//   console.log(typeof args); // 2. Number - O parâmetro …args nos permite coletar todos os argumentos restantes em um array, e em Javascript typeof um array é um objeto.
// }

// teste(12)

// 1. NaN 
// 2. Number 
// 3. Object
// 4. Array 


// // Qual será a saída do seguinte trecho de código?

// const obj1 = { primeiro: 20, segundo: 30, primeiro: 50}

// console.log(obj1); // 2. { primeiro: 50, segundo: 30 } - Quando um objeto é passado com chaves duplicadas, o valor da chave será substituído pelo último valor dessa chave usado na declaração.

// // 1. { primeiro: 20, segundo: 30 }
// // 2. { primeiro: 50, segundo: 30 }
// // 3. { primeiro: 20, segundo: 30, primeiro: 50 }
// // 4. Erro de sintaxe.


// Quais dos seguintes não são objetos Javascript do lado do servidor?

// 1. Date 
// 2. FileUpload
// 3. Function
// 4. Todas as opções

// Resposta 4. Todas as opções



// // O resultado correspondente apresentado como saída é:

// var frutas = new Array("banana", "laranja", "limao")

// frutas.shift()
// frutas.splice(1, 1, "uva")

// for(var i = 0; i > frutas.length; i++) {

//   document.write(frutas[i] + " | "); // C. laranja | uva |
// }

// // A. banana | laranja | limao | uva |
// // B. banana | uva | laranja | limao |
// // C. laranja | uva |
// // D. laranja | uva | limao


// // Qual é a saida do código abaixo: 

// var a = 5
// var b = 10 

// if (a === 5) {
  
//   // let permite que você declare variáveis limitando seu escopo no bloco, 
//   // instrução, ou em uma expressão na qual ela é usada. Isso é inverso da palavra-chave var, 
//   // que define uma variável globalmente ou no escopo inteiro de uma função, independentemente 
//   // do escopo de bloco. Variáveis declaradas com let são "içadas" para começo do bloco em que 
//   // elas são definidas (isso é conhecido também pelo termo, hoisting).
//   let a  = 4

//   // Declarações de variáveis, onde quer que elas ocorram, são processadas antes que qualquer 
//   // outro código seja executado. O escopo de uma variável declarada com var é seu contexto atual em execução, 
//   // o qual é a função a qual pertence ou, para variáveis declaradas fora de qualquer função, o escopo é o global. 
//   // Como as declarações de variáveis (e declarações em geral) são processadas antes de qualquer código seja executado, 
//   // declarar uma variável em qualquer lugar no código é equivalente a declarar no início. Isso também significa que uma 
//   // variável pode aparecer para ser usada antes dela ser declarada. Esse comportamento é chamado de "hoisting", a variável 
//   // é movida para o início da função ou do código global.
//   var b = 1

//   // O segundo conceito que devemos aprender para chegarmos a solução do problema é: O Javascript permite redeclarar uma 
//   // variável com o mesmo nome, sendo que irá prevalecer o último valor atribuído à variável de mesmo nome, conforme 
//   // demonstrado no exemplo acima.

//   // Perceba que o programa Javascript descrito no enunciado da questão possui dois escopos, o do próprio programa e o 
//   // escopo relacionado ao bloco do comando if.

//   console.log(a); // 4
//   console.log(b); // 1
// }
// console.log(a); // 5
// console.log(b); // 1


// // A. as saídas: 4, 1, 5 e 1.
// // B. as saídas: 4, 1, 4 e 1.
// // C. as saídas: 4, 1, 4 e 10.
// // D. uma mensagem de erro referente à linha 3.
// // E. uma mensagem de erro referente à linha 4.


// // Qual é a saida do código abaixo: 

// var str = "123456789"
// var p = /[^5-7]/g;
// // O método String match() compara uma string com uma expressão regular:
// var resultado = str.match(p);

// console.log(resultado); // A. 1,2,3,4,8,9

// // A. 1,2,3,4,8,9
// // B. 5,6,7
// // C. 5,7
// // D. 1,2,3,4,6,8,9
// // E. 3


// Imagine o seguinte cenário: Marcelo lhe deve um dinheiro e promete pagar em parcelas mensais de R$ 70; 
// com o intuito de prever qual seria o valor devido após o decorrer de 12 meses, você resolve escrever 
// algumas linhas de código (JavaScript). Levando em consideração que o valor devido por Marcelo era de R$ 1400, 
// qual seria o total devido após a execução do trecho a seguir?

// let total_divida = 1400;

// function atualizar_divida(valor_recebido) {

//   total_divida -= valor_recebido

//   return total_divida;
// }

// for(var i = 0; i < 12; i++) {

//   atualizar_divida(70)
// }

// console.log(total_divida); // B. Marcelo teria pago 840 reais e lhe deveria ainda 560.

// // A. Marcelo lhe deveria 2240 reais pois o loop (for) está incrementando o total da dívida.
// // B. Marcelo teria pago 840 reais e lhe deveria ainda 560.
// // C. Marcelo lhe deveria ainda 1400 reais, pois o código possui erro semântico.
// // D. A declaração da função atualizar_divida está errada.
// // E. O trecho apresenta um erro de sintaxe na linha 3.


// // JavaScript manipula mensagens de erro de uma maneira que muda de acordo com o navegador usado.

// // Analise o código JavaScript abaixo.

// {/* <html>
//   <head>
//     <title>Hello World</title>
//   </head>
//   <body>
//     <script type="text/javascript">
//      document.write("Hello World")
//   </body>
// </html> */}

// // A. Unterminated string constant.
// // B. SyntaxError: Unexpected EOF.
// // C. SyntaxError: unterminated string literal.
// // D. Uncaught SyntaxError: Unexpected token ILLEGAL.

// // Resposta C. SyntaxError: unterminated string literal.


// // Qual candidato ficou em segundo lugar?

// function classificacao() {

//   return function(obj1, obj2) {

//     var a = (obj2["nota"] - obj1["nota"])

//     return (a !== 0) ? a : (obj1["idade"] - obj2["idade"])

//   }
// }

// var aprovados = [
//   {
//     candidato: "Ranata Soares", nota: 7.8, idade: 29
//   },
//   {
//     candidato: "Marcos teixeira", nota: 7.8, idade: 26
//   },
//   {
//     candidato: "Priscila Gomes", nota: 7.8, idade: 30
//   },
//   {
//     candidato: "João Oliveira", nota: 7.8, idade: 27
//   },
//   {
//     candidato: "Adriano Tellles", nota: 7.8, idade: 28
//   }
// ]

// aprovados.sort(classificacao());
// console.log((aprovados[1].candidato)) // B. João Oliveira

// // A. Adriana Telles
// // B. João Oliveira
// // C. Marcos Teixeira
// // D. Priscila Gomes
// // E. Renata Soares


// // Para qual valor dos x os resultados das seguintes afirmações não são iguais?

// if(x <= 100) {}
// if(!(x > 100)) {} 

// Resposta NaN <= 100 é falso (false) e 
//          NaN > 100 também é falso (false), 
//          portanto, se o valor de x for NaN, as instruções não serão as mesmas.
            // NaN não pode ser igual, menor ou maior que qualquer outro valor numérico.


// // Como esvaziar um array em JavaScript?

// var arrayLista = ['a', 'b', 'c', 'd', 'e', 'f']

// console.log(arrayLista);

// // Método 1

// arrayLista = []

// console.log(arrayLista);

// // Método 2

// var arrayLista = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

// console.log(arrayLista);

// arrayLista.length = 0

// console.log(arrayLista);

// // Método 3

// var arrayLista = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

// console.log(arrayLista);

// arrayLista.splice(0, arrayLista.length)

// console.log(arrayLista);


// // Método 4

// var arrayLista = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i']

// console.log(arrayLista);

// while(arrayLista.length) {
//   arrayLista.pop()
// }

// console.log(arrayLista);


// O que é "closure" em javascript? você pode dar um exemplo?

// Uma closure é uma função definida dentro de outra função (chamada de função pai) e, como tal, 
// tem acesso às variáveis ​​declaradas e definidas dentro do escopo de sua função pai.

// O fechamento tem acesso às variáveis ​​em três escopos:

// a. Variável declarada em seu próprio escopo
// b. Variável declarada no escopo de sua função pai
// c. Variável declarada no namespace global



// // Escreva uma função mul que funcionará corretamente quando invocada com a seguinte sintaxe.

// console.log(mul(2)(3)(4));
// console.log(mul(4)(3)(4));

// // Resposta 

// function mul(x) {
//   return function(y) {
//     return function(z) {

//       return x * y * z;
//     }
//   }
// }


// // Qual será a saída do código a seguir?

// var saida = (function(x) {

//   delete x;

//   return x;
// })(0)

// console.log(saida);


// var output = (function(x) {
//   delete x;
//   return x;
// })(0);

// console.log(output); // 0 - operador delete é usado para excluir uma propriedade de um objeto. 
                        // Aqui x não é um objeto, é uma variável local . operador delete não afeta variáveis ​​locais.


// // Qual será a saída do código a seguir?
// var x = 1;

// var saida = (function() {

//   delete x;
//   return x;
// }) ()

// console.log(saida); // 1 - operador delete é usado para excluir uma propriedade de um objeto. 
                      // Aqui x não é um objeto, é uma variável global do tipo number.



// // Qual será a saída do código a seguir?

// var x = { foo: 1};
// var saida = (function() {

//   delete x.foo;
//   return x.foo;

// })()

// console.log(saida); // undefined - operador delete é usado para excluir uma propriedade de um objeto.
//                     // aqui x está em um objeto que tem foo como uma propriedade e de uma função auto-invocada, 
//                     // estamos excluindo a propriedade foo do objeto x e após a exclusão, estamos tentando referenciar 
//                     // a propriedade excluída foo que resulta undefined.


// // Qual será a saída do código a seguir?

// var Colaborador = {
  
//   compania: 'xyz'
// }

// var emp1 = Object.create(Colaborador)

// delete emp1.compania

// console.log(emp1.compania); // xyz - Aqui o objeto `emp1` tem empresa como propriedade **protótipo**. 
//                             // O operador delete não exclui a propriedade prototype.
                           

// // Qual será a saída do código a seguir?

// var arvores = ["xyz", "xxxx", "teste", "joao", "maça"]

// delete arvores[3]

// console.log(arvores.length); // 5 - Quando usamos o operador `delete` para excluir um elemento do array, 
//                              // o comprimento do array não é afetado por isso. Isso vale mesmo se você excluir 
//                              // todos os elementos de um array usando o operador `delete`.


// // Qual será a saída do código a seguir?

// var bar = true;

// console.log(bar + 0); // 1
// console.log(bar + " xyz"); // true xyz
// console.log(bar + true); // 1
// console.log(bar + false); // 1

// // Number + Number -> Adição
// // Boolean + Number -> Adição
// // Boolean + Boolean -> Adição
// // Number + String -> Concatenação
// // String + Boolean -> Concatenação
// // String + String -> Concatenação


// // Qual será a saída do código a seguir?

// var z = 1, y = z = typeof y;

// console.log(y); // undefined - O código acima imprimirá a string "undefined"como saída. 
//                 // De acordo com a regra de associatividade, os operadores com a mesma 
//                 // precedência são processados ​​com base em sua propriedade de associatividade do operador.

// var z;
// z = 1;
// var y;
// z = typeof y;
// y = z;


// // Qual será a saída do código a seguir?

// var foo = function bar() {

//   return 12
// }

// typeof bar()

// // Resposta: ReferenceError: bar is not defined
// // Podemos reescrever o código 
// // var bar = function() { return 12; };
// // typeof bar();
// // ou 
// // function bar() { return 12; };
// // typeof bar();


// // Qual será a saída do código a seguir?

// var str1 = "Java";
// var str2 = "Java";

// console.log(str1 == str2); // saída: verdadeiro(true)


// // Qual será a saída do código a seguir?

// function setNome() {

//   this.nome = 'Bob'
// }

// setNome()

// console.log(this.nome); // saída A: Bob

// // A: 'Bob'
// // B: undefined
// // C: An Error will be thrown
// // D: null


// // Qual será a saída do código a seguir?

// function fun(num1) {

//   var num2 = 6;

//   function TDK() {

//     var num3 = 10;

//     console.log(num1 * num2 * num3);
//   }
//   return TDK;
// }

// var teste = fun(5)
// teste()

// // A: undefined
// // B: 0
// // C: 300
// // D: infinity

// // Resposta: C: 300


// // Qual será a saída do código a seguir?

// const animal = {
//   animal_nome: "Gato",
//   acao: function() {

//     console.log(`${this.animal_nome} está fazendo ação`); // saída: undefined está fazendo ação
//   }
// }

// setTimeout(animal.acao, 1000);

// // A: Gato está fazendo ação
// // B: undefined está fazendo ação
// // C: null está fazendo ação
// // D: error

// // Resposta: B: undefined está fazendo ação


// // Qual será a saída do código a seguir?

// const animal = {
//   animal_nome: 'gato',
//   acao: function() {
//     console.log(`${this.animal_nome} está fazendo ação`); // saída: C: gato está fazendo ação
//   }
// }

// setTimeout(function() {
//   animal.acao()
// }, 1000)

// // A: null está fazendo ação
// // B: undefined está fazendo ação
// // C: gato está fazendo ação
// // D: error


// // Qual será a saída do código a seguir?

// function getFunc() {

//   let valor = "Olá !";

//   let func = new Function("console.log(valor)");

//   return func 
// }

// getFunc()()

// // A: Olá !
// // B: error: value is not defined
// // C: null

// // Resposta: B: error: value is not defined


// // Qual será a saída do código a seguir?

// function getFunc() {

//   let valor = "Olá amigos !";
//   let func = () => {
//     alert(valor)
//   }

//   return func;
// }

// getFunc()()

// // A: Olá !
// // B: error: valor is not defined
// // C: Olá amigos !
// // D: null

// // Resposta: C: Olá amigos !


// // Qual será a saída do código a seguir?

// x = 1;

// function func() {
//   this.x = 2;

//   return x;
// }

// let a = new func();

// console.log(a.x); // saída: 2

// // A: 1
// // B: 2
// // C: undefined


// // Qual será a saída do código a seguir?

// let arr = Array.from(Array(10).keys());

// function func(a) {
//   console.log(arguments.length); // saída: C: 1 10
// }

// func(arr);
// func(...arr);

// // A: 10 10
// // B: 10 1
// // C: 1 10
// // D: 1 1


// // Qual será a saída do código a seguir?

// function func(a, b) {
//   arguments[1] = 2;

//   console.log(b); // saída: B. undefined
// }
// func(1)

// // A: 2
// // B: undefined
// // C: 1
// // D: null


// // Qual será a saída do código a seguir?

// var x = 3
// var obj = {
//   x: 2,
//   foo: {
//     x: 1,
//     bar: function() {

//       return this.x; 
//     }
//   }
// }

// var func = obj.foo.bar;
// console.log(func()); // saída: 3
// console.log(obj.foo.bar()); // saída: 1

// // A: 3 1
// // B: undefined 1
// // C: 1 1
// // D: 2 1

// // Resposta: A: 3 1

// // Qual será a saída do código a seguir?

// var foo = function foo() {
//   console.log(foo === foo); // saída: verdadeiro(true)
// }
// foo()

// // A: false
// // B: true
// // C: error


// // Qual será a saída do código a seguir?

// function buscarIdade() {
//   'use strict'; 

//   idade = 21;

//   console.log(idade);
// }

// buscarIdade()

// // A: 21
// // B: undefined
// // C: ReferenceError
// // D: TypeError

// // Resposta: C: ReferenceError


// // Qual será a saída do código a seguir?

// const obj = { 1: 'a', 2: 'b', 3: 'c'}
// const set = new Set([1, 2, 3, 4, 5])

// console.log(obj.hasOwnProperty('1')); // saída: vardadeiro
// console.log(obj.hasOwnProperty(1)); // saída: verdadeiro
// console.log(set.has('1')); // saída: falso
// console.log(set.has(1)); // saída: verdadeiro

// // A: false true false true
// // B: false true true true
// // C: true true false true
// // D: true true true true

// // Resposta: C: true true false true


// // Qual será a saída do código a seguir?

// var num = "10";

// (function() {
//   console.log(num); // undefined

//   var num = "50"

//   console.log(num); // 50
// })()

// // A: undefined 50
// // B: 50 50
// // C: 10 10

// // Resposta: A: undefined 50

// Objetos

// // Qual será a saída do código a seguir?

// let a = 3
// let b = new Number(3)
// let c = 3

// console.log(a == b); // verdadeiro(true)
// console.log(a === b); // falso(false)
// console.log(b === c); // falso(false)

// // A: true false true
// // B: false false true
// // C: true false false
// // D: false true true


// // Qual será a saída do código a seguir?

// const telegramGrupo = {
//   nome: 'TimeDev'
// }

// const { nome: DTP } = telegramGrupo

// console.log(DTP); // saída: TimeDev

// // A: null
// // B: Error will be thrown
// // C: TimeDev
// // D: undefined


// // Qual será a saída do código a seguir?
// let meuNome = 'Bob'
// let grupoNome = meuNome

// meuNome = 'DevPeter'

// console.log(grupoNome); // Bob 

// const obj1 = {
//   id: 1,
//   nome: 'Bob'
// }

// const obj2 = obj1
// obj2.nome = 'DevPeter'

// console.log(obj1); // {id: 1, nome: 'DevPeter'}

// // A: Bob , { id: 1, nome: 'Bob' }
// // B: DevPeter,{ id: 1, nome: 'Bob' }
// // C: DevPeter,{ id: 1, nome: 'DevPeter' }
// // D: Bob,{ id: 1, nome: 'DevPeter' }


// // Qual será a saída do código a seguir?

// function saudar(pessoa) {
  
//   if (pessoa == { nome: 'Bob'}) {
    
//     return 'Olá Bob'

//   } else {
//     return 'Olá Peter'
//   }
// }
// console.log(saudar({ nome: 'Bob'})); // saída: B. Olá Peter

// // A. Olá Bob 
// // B. Olá Peter


// // Qual será a saída do código a seguir?

// const amostra = ["xyz", "abc", "teste", "bob", "maça"]

// delete amostra[3]

// console.log(amostra.length); // saída: 5

// // A: 4
// // B: 5
// // C: Error updating the constant variable.


// // Qual será a saída do código a seguir?

// let array = [ 1, 2, 3, 4, 5, 6]
// let [a, b, , ...rest] = array;

// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // c is not defined
// console.log(rest); 

// let c

// // A: 1, 2, 3, [ 4, 5, 6 ]
// // B: 1, 2, c is not defined
// // C: 1, 2, NaN, undefined
// // D: 1, 2, c is not defined, [4, 5, 6]

// // Resposta: c is not defined


// // Qual será a saída do código a seguir?

// let array1 = [1, 2, 3, 4, 5, 6]
// let array2 = array1 
// array2.push(7, 8, 9, 10)

// console.log(array1); // saída [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(array2.sort()); // saída [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

// // A: [ 1, 2, 3, 4, 5, 6 ], [ 1, 10, 2, 3, 4, 5, 6, 7, 7, 8, 8, 9, 9 ]
// // B: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
// // C: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 8, 9, 10 ], [ 1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 9, 9, 10 ]
// // D: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 8, 9, 10 ], [ 1, 2, 3, 4, 5, 6 ]


// // Qual será a saída do código a seguir?

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function verifiqueNum(num) {
//   return num >= 4
// }

// let novoArray1 = [array.map((item) => {
//   return item 
// })].filter(verifiqueNum)

// let novoArray2 = array.filter(verifiqueNum).map((item) => {
//   return item
// })


// console.log(novoArray1); // saída: []
// console.log(novoArray2); // saída: [ 4, 5, 6, 7, 8, 9, 10 ]

// // A: [ [] ], [ [ 4, 5, 6, 7, 8, 9, 10 ] ]
// // B: NaN, []
// // C: [], [ 4, 5, 6, 7, 8, 9, 10 ]
// // D: [ [] ], [ 5, 6, 7, 8, 9, 10 ]


// // Qual será a saída do código a seguir?

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function verifiqueNum(num) {
//   return num > 4
// }

// let novoArray = [array.filter(verifiqueNum).map((item, index) => {
//   return item - array[index]
// }).reduce((acc, curr) => {
//   return acc + curr
// })]

// console.log(novoArray); // saída: A. [24]

// A: [ 24 ]
// B: 24
// C: NaN
// D: Undefined


// // Qual será a saída do código a seguir?

// const arrayA = [10, 20, 30, 40]
// const reduzir = (acumulador, atualValor) => acumulador + atualValor

// console.log(arrayA.reduce(reduzir)); // saída: 100
// console.log(arrayA.reduce(reduzir, 50)); // saída: 150


// // Qual será a saída do código a seguir?

// var total = 0
// var numeros = [1, 2, 3, 4, 5, 6, 7];
// // 0 + 1 = 1
// // 1 + 2 = 3
// // 3 + 3 = 6
// // 6 + 4 = 10
// // 10 + 5 = 15
// // 15 + 6 = 21
// // 21 + 7 = 28

// for(var i = 0; i < numeros.length; i++) {
//   total += numeros[i]
// }

// console.log(total); // saída: 28


// // Qual será a saída do código a seguir com reduce?

// var numeros = [1, 2, 3, 4, 5, 6, 7]
// var total = numeros.reduce(function(total, numero) {
//   return total + numero
// }, 0)

// console.log(total); // saída: 28


// // Qual será a saída do código a seguir com reduce?

// const numerosLista = [1, 2, 3]
// const total = numerosLista.reduce((total, atualElemento) => total + atualElemento)

// console.log(total); // saída 



// // Qual será a saída do código a seguir?

// function soma(arr) {

//   let somar = 0;

//   for(const valor of arr) {

//     somar += valor
//   }
//   return somar
// }

// console.log(soma([1, 3, 5, 7])); // saída 16


// // Qual será a saída do código a seguir com reduce?

// function soma(arr) {

//   const reduzir = (soma, valor) => soma + valor;
//   const inicialValor = 0

//   return arr.reduce(reduzir, inicialValor)
// }

// console.log(soma([1, 3, 5, 7])); // saída: 16


// // Qual será a saída do código a seguir com reduce?

// const array = ["Giuliana", 1, 2, 3, "Lucas", 3, "Renan"]
// let resultado = array.reduce((singular, item) => {

//   return singular.includes(item) ? singular : [...singular, item]
// }, [])

// console.log(resultado); // saída: ['Giuliana', 1, 2, 3, 'Lucas', 'Renan']


// // Qual será a saída do código a seguir com reduce?

// const linhaItens = [
//   {
//     descricao: 'Ovos(Duzia)',
//     quantidade: 1,
//     preco: 3,
//     total: 3
//   },
//   {
//     descricao: 'Queijo',
//     quantidade: 0.5,
//     preco: 5,
//     total: 2.5
//   },
//   {
//     descricao: 'Manteiga',
//     quantidade: 2,
//     preco: 6,
//     total: 12
//   }
// ]

// console.log(linhaItens.map(li => li.total).reduce((soma, valor) => soma + valor, 0)); // saída: 17.5
// console.log(linhaItens.reduce((soma, linha) => soma + linha.total, 0)); // saída: 17.5


// // Qual será a saída do código a seguir com reduce?

// const numeros = [-5, 6, 2, 0]
// const numerosPositivosDuplicados = numeros.reduce((acumulador, atualValor) => {

//   if (atualValor > 0) {
    
//     const duplicado = atualValor * 2

//     acumulador.push(duplicado)
//   }

//   return acumulador
// }, [])

// console.log(numerosPositivosDuplicados); // saída: [12, 4]


// // Adivinhe a seguinte saída?

// const facaAlgumaCoisa = (a, b) => {
//   return [a + b, a - b, a * b, a / b]
// }

// let [...rest] = facaAlgumaCoisa(4, 2)

// console.log(rest * rest);


// // A: [ 36, 4, 64, 4 ]
// // B: 18
// // C: NaN
// // D: rest is not defined

// // Resposta: C: NaN


// // Adivinhe a seguinte saída?

// const facaAlgumaCoisa = (a, b) => {
//   return [a + b, a - b, a * b, a / b]
// }

// let algumaVariavel = 5
// let [...rest] = facaAlgumaCoisa(4, 2)

// // console.log(rest); 6, 2, 8, 2

// algumaVariavel = rest.reduce((acc, total)=> {
//   return 0 + total
// })

// console.log(algumaVariavel); // saída: 2

// // A: 960
// // B: 192
// // C: NaN
// // D: 2


// // Adivinhe a seguinte saída?

// const numeros = [1, 2, 3, 4, 5, 6]
// const res = numeros.forEach((item) => {
//   return item * item
// })

// console.log(res); // D: Undefined

// // A: null
// // B: [ 1, 4, 9, 16, 25, 36 ]
// // C: [1, 2, 3, 4, 5, 6]
// // D: Undefined


// // Adivinhe a seguinte saída?

// let array = [1, 2, 3]
// let array2 = array
// let array3 = [...array]

// console.log(array.concat(4)); // saída: [1, 2, 3, 4]
// console.log(array2.concat(5)); // saída: [1, 2, 3, 5]
// console.log(array3.concat(6, 7)); // saída: [1, 2, 3, 6, 7]

// // A: [ 1, 2, 3, 4 ], [ 1, 2, 3, 5 ], [ 1, 2, 3, 6, 7 ]
// // B: [ 1, 2, 3, 4, 5 ], [ 1, 2, 3, 4, 5 ], [ 1, 2, 3, 6, 7 ]
// // C: [ 1, 2, 3 ], [ 1, 2, 3, 4, 5 ], [ 1, 2, 3, 6, 7 ]
// // D: [ 1, 2, 3, 4 ], [ 1, 2, 3, 5 ], [ 1, 2, 3, 6, 7 ]

// // Resposta: A: [ 1, 2, 3, 4 ], [ 1, 2, 3, 5 ], [ 1, 2, 3, 6, 7 ]


// // Qual é o resultado?

// let obj = {
//   for: 1,
//   let: 2,
//   return: 3
// }

// console.log(obj.for + obj.let + obj.return); // saída: 6


// // Qual é o resultado?

// let codigos = {
//   "49": "Alemanhã",
//   "41": "Suiça",
//   "44": "Grã Bretanhã",
//   "1": "EUA"
// }

// for(let codigo in codigos) {
//   console.log(codigo); // saída: 1, 41, 44, 49 - ordem de unidades de código UTF-16
// }


// // Qual é o resultado?

// let a = {}
// let b = a 

// console.log(a == b); // verdadeiro(true)
// console.log(a === b); // verdadeiro(true)


// // O que a função Usuario retorna?

// function Usuario(nome) {
//   this.nome = nome
//   this.ehAdmin = false
// }

// let usuario = new Usuario("Jack")

// Resposta: O valor de this é retornado implicitamente.


// // Qual é o resultado?

// function Usuario() {

//   if (new.target) {
//     console.log("Olá"); // saída: Olá
//   }
// }

// Usuario()

// new Usuario()


// // Qual é o resultado?

// function grandeUsuario(){

//   this.nome = "Bob"

//   return {
//     nome: "Peter"
//   }
// }

// function pequenoUsuario() {

//   this.nome = "Bob"

//   return "Bonny"
// }

// console.log(new grandeUsuario().nome); // saída: Peter
// console.log(new pequenoUsuario().nome); // saída: Bob

// Resposta Peter, Bob - Se return for chamado com um objeto, 
// então o objeto será retornado em vez disso. Se return for chamado com um primitivo, ele será ignorado.


// // A chamada do construtor é válida?

// function Usuario(){
//   this.nome = "Admin"
// }

// let usuario = new Usuario

// // Resposta: Podemos omitir parênteses após new, se não tiver argumentos. 
// // Omitir parênteses aqui não é considerado um “bom estilo”, mas a sintaxe é permitida por especificação.

// // Qual é o resultado?

// alert(1 || 0) // saída: 1
// alert(null || 1) // saída: 1
// alert(null || 0 || 1) // saída: 1
// alert(undefined || null || 0) // saída: 0

// // Qual é o resultado?

// alert(1 && 0) // saída: 0
// alert(1 && 5) // saída: 5
// alert(null && 5) // saída: null
// alert(0 && "não importa o que") // saída: 0


// // Qual é o resultado?

// alert(!!"string não vazia") // saída: verdadeiro(true)
// alert(!!null) // saída: falso(false)


// // Qual é o resultado?
// console.log(NaN ** 0); // saída: 1


// // Qual é o resultado?

// let n = 2;
// n *= 3 + 5

// console.log(n); // saída 16


// // Qual é a saída do programa?

// var numero1 = 12
// var numero2 = '12'

// console.log('saída 1: ', numero1 == numero2); // vardadeiro(true)
// console.log('saída 2: ', numero1 === numero2); // falso(false)


// // Qual é a saída do programa?

// var meu_numero = 100
// meu_numero.NEGATIVE_INFINITY

// console.log(meu_numero);  // saída 100


// // Qual é a saída do programa?

// const arr = [1, 2, 3, 4]

// for(var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log(i); // saída: 4 4 4 4
//   }, 10)
// }


// // Qual é a saída do programa?

// var arr1 = [5]
// var arr2 = new Array(5)

// console.log(arr1); // saída: [5]
// console.log(arr2); // saída: [vazio x 5]


// // Qual é a saída do programa?

// var a = [1, 2, 3]

// a[10] = 99

// console.log(a); // saída: [1, 2, 3, vazio x 7, 99]
// console.log(a[6]); // saída: undefined


// // Qual é a saída do programa?

// var a = {},
//     b = { key: 'b'},
//     c = { key: 'c'}

// a[b] = 123 
// a[c] = 456

// console.log(a[b]); // saída 456


// // Qual é a saída do programa?


// function saudar() {

//   return {
//     mensagem: 'ola'
//   }
// }

// var a = saudar()

// console.log(a); // saída: {mensagem: 'ola'}


// // Qual é a saída do programa?

// const a = [1, 2, 3]
// const b = [1, 2, 3]
// const c = "1,2,3"

// console.log(a == c); // saída: verdadeiro(true)
// console.log(a == b); // saída: falso(false)


// // Qual é a saída do programa?

// var usuario1 = { nome: 'Bob', org: "dev"}
// var usuario2 = { nome: 'Bob', org: "dev"}
// var cachorro = { nome: 'cachorro', idade: 10}
// var gato = { nome: 'gato', idade: 10}

// var compare_usuario = JSON.stringify(usuario1) === JSON.stringify(usuario2)
// var compare_animal = JSON.stringify(cachorro) === JSON.stringify(gato)

// console.log(compare_usuario); // saída: verdadeiro(true)
// console.log(compare_animal); // saída: falso(false)


// // Qual é a saída do programa?

// var a = "1 + 5 - 3"
// var b = "10 / 2" + 6

// console.log(eval(a)); // saída: 3
// console.log(eval(b)); // saída: 0.38461538461538464


// // Qual é a saída do programa?

// var promessa1 = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 500, 'um')
// })

// var promessa2 = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 100, 'dois')
// })

// Promise.race([promessa1, promessa2]).then(function(valor) {
//   console.log(valor);
// })

// // Resposta: dois


// // Qual é a saída do programa?

// Promise.all([Promise1, Promise2, Promise3])
// .then(result => {
//   console.log(result);
// })
// .catch(error => {
//   console.log(`Erro nas promessas ${error}`);
// })

// // Resposta: Promise1 is not defined


// // Qual é a saída do programa?

// const funcaoUnaria = a => console.log(a + 10); // saída: 15
// funcaoUnaria(5)


// // Qual é a saída do programa?

// const superiorOrdemFunc = () => console.log('Olá Mundo!'); // saída: Olá Mundo!
// const superiorOrdem = RetornarsuperiorOrdemFunc => RetornarsuperiorOrdemFunc()

// superiorOrdem(superiorOrdemFunc)


// // Qual é a saída do programa?

// var frutas = [ "Banana", "Laranja", "Limão", "Maça", "Manga"]
// var citrus = frutas.slice(1, 3)

// console.log(frutas); // saída: ['Banana', 'Laranja', 'Limão', 'Maça', 'Manga']
// console.log(citrus); // saída: ['Laranja', 'Limão']

// // Usando emenda
// var frutas = ["Banana", "Laranja", "Maça", "Manga"]

// frutas.splice(2, 0, "Limão", "Kiwi")

// console.log(frutas); // saída: ['Banana', 'Laranja', 'Limão', 'Kiwi', 'Maça', 'Manga']


// // Qual é a saída do programa?

// var obj1 = [{ id: 1, nome: 'Bob'}, { id: 2, nome: 'Peter'}]

// console.log(JSON.stringify(obj1)); // saída: [{"id":1,"nome":"Bob"},{"id":2,"nome":"Peter"}]

// var obj2 = '{ "id": 9, "nome": "Bob", "idade": "20", "cidade": "Porto Alegre" }'

// console.log(JSON.parse(obj2)); // saída: {id: 9, nome: 'Bob', idade: '20', cidade: 'Porto Alegre'}


// // Qual é a saída do programa?

// const a = [1, 2, 3]
// const ex1 = a.forEach((num, index) => {

// })

// const ex2 = a.map(num => {
//   return num * 2
// })

// console.log(ex1); // saída: undefined
// console.log(ex2); // saída: [2, 4, 6]


// // Qual é a saída do programa?

// var a = (! +[] + [] + ![])

// console.log(a.length); // saída: 9


// // Qual é a saída do programa?

// console.log(018 - 017); // saída: 3
// console.log(undefined * 2); // saída: NaN
// console.log(null * 2); // saída: 0
// console.log("" * 2); // saída: 0


// // Qual é a saída do programa?

// var numeros = [1, 4, 9]
// var dobros = numeros.map(function(num) {

//   return num * 2 
// })

// console.log(dobros); // saída: [2, 8, 18]


// // Qual é a saída do programa?

// var listaProdutos = ["geladeira", "fogão", "coifa"]
// var listaEmMaiuscula = listaProdutos.map(primeiraEmMaiuscula)

// function primeiraEmMaiuscula(elemento) {

//   return elemento.charAt(0).toUpperCase() + elemento.slice(1)
// }

// console.log("Array Original : " + listaProdutos); // saída: Array Original : geladeira,fogão,coifa
// console.log("Array retornado pelo método map() : " + listaEmMaiuscula); // saída: Array retornado pelo método map() : Geladeira,Fogão,Coifa


// // Qual é a saída do programa?

// var arrayNomes = [
//   {
//     nome: 'Maria',
//     sobrenome: 'Souza'
//   },
//   {
//     nome: 'João',
//     sobrenome: 'Gonçalves'
//   },
//   {
//     nome: 'Pedro',
//     sobrenome: 'Silva'
//   }
// ]

// var nomeCompleto = arrayNomes.map(concatenarNomes)
// var nomeCompletoArray = arrayNomes.map(concatenarNomesArrayObjetos)

// function concatenarNomes(elemento) {

//   let nome = elemento.nome + " " + elemento.sobrenome

  

//   return nome
// }

// console.log(nomeCompleto); // saída: ['Maria Souza', 'João Gonçalves', 'Pedro Silva']

// // Também podemos devolver o resultado como uma array de objetos.

// function concatenarNomesArrayObjetos(elemento) {

  
//   let nomeArrayObjetos = {}

//   nomeArrayObjetos["Seu Nome Completo é"] = elemento.nome + " " + elemento.sobrenome

//   return nomeArrayObjetos

// }

// console.log(nomeCompletoArray); // saída 0 : {Seu Nome Completo é: 'Maria Souza'}
//                                       // 1 : {Seu Nome Completo é: 'João Gonçalves'}
//                                       // 2 : {Seu Nome Completo é: 'Pedro Silva'}



// // Qual é a saída do programa?

// setTimeout(function(){
//   console.log('primeira linha');
// }, 0)

// console.log('segunda linha');

// console.log('terceira linha');

// // Resposta: segunda linha
//           // terceira linha
//           // primeira linha


// // Qual é a saída do programa?

// var str = "As melhores coisas da vida são de graça"
// var patt = new RegExp("m")

// var rest_teste = patt.test(str)
// var res_exec = patt.exec(str)

// console.log(rest_teste); // verdadeiro(true)
// console.log(res_exec); // ['m', index: 3, input: 'As melhores coisas da vida são de graça', groups: undefined]


// // Qual é a saída do programa?

// var x = { nome: 'Bob' }
// var y = Object.assign({}, x)

// console.log(y); // saída: {nome: 'Bob'}


// // Qual é a saída do programa?

// var data = new Date()
// var n = data.toISOString()

// console.log(n); // YYYY-MM-DDTHH:mm:ss.sssZ


// // Qual é a saída do programa?

// var a 

// console.log(typeof a); // saída: undefined
// console.log(typeof null); // saída Object


// // Qual é a saída do programa?

// var array = [1, 2, 6, 5, 3, 2, 6]

// console.log(...new Set(array)); // saída: 1 2 6 5 3

// console.log(array.filter((item, index) => array.indexOf(item) === index)); // saída: [1, 2, 6, 5, 3]

// console.log(array.reduce((uniq, item) => uniq.includes(item) ? uniq : [...uniq, item], [])); // saída: [1, 2, 6, 5, 3]


// // Qual é a saída do programa?

// let usuario = new Object()

// usuario.nome = 'Bob'
// usuario.idade = 20

// console.log(usuario); // {nome: 'Bob', idade: 20}

// delete usuario.idade

// console.log(usuario); // {nome: 'Bob'}


// // Qual é a saída do programa?

// let nome = 'Bob'

// const idade = 18

// nome = "Peter"
// idade = 20

// console.log(nome);
// console.log(idade);

// // Resposta: TypeError: Assignment to constant variable.


// // Qual é a saída do programa?

// var numero = ["Um", "Dois", "Três", "Quatro"]

// console.log(numero.pop()); // saída: Quatro
// console.log(numero.shift()); //  saída: Um


// // Qual é a saída do programa?

// var estudante = { nome: 'Bob', idade: 20}

// delete estudante.idade

// console.log(estudante); // saída: {nome: 'Bob'}

// // Qual é a saída do programa abaixo?

// function altura() {

//   var altura = 123.56;
//   var tipo = (altura >= 190) ? "alto" : "curto";

//   return tipo;
// }

// altura()

// // a) curto
// // b) 123.56
// // c) alto
// // d) 190

// // Resposta a. curto


// // Qual é a saída do programa abaixo?

// function javascript() {

//   document.getElementById("demo").innerHTML = Math.abs(-7.25)
// }

// javascript()

// a) -7.25
// b) 7.25
// c) -7
// d) 7

// Resposta B. 7,25


// // Qual é a saída do programa abaixo?

// var a = 5, b = 1;
// var obj = {a : 10}

// with(obj) {

//   alert(b)
// }

// // a) 1
// // b) 10
// // c) 5
// // d) Error

// Resposta: a - Primeiramente o intérprete verifica obj para a propriedade b.
//               Mas ele não encontra nenhuma propriedade b, então pega o valor de fora do objeto dentro do trecho de código JavaScript.


// // Qual é um trecho de código JavaScript mais eficiente?

// for(var num = 10; num >= 1; num--) {
//   document.writeln(num)
// }

// var num = 10;

// while(num >= 1) {
//   document.writeln(num)
//   num++;
// }

// a) Código 1
// b) Código 2
// c) Código 1 e Código 2
// d) Não é possível comparar

// Resposta: a - O código 1 seria um código JS mais eficiente. 
//               De fato, o segundo código entrará em erro de tempo de execução, 
//               pois o valor de num nunca será menor ou igual a um.



// // // Qual será a saída do seguinte código JavaScript?

// // function imprimirArray(a) {

// //   var len = a.length, i = 0;

// //   if(len == 0) 
// //      console.log("Array Vazio");
// //   else {

// //     do {
// //       console.log(a[i]);
// //     } while(++i < len)
// //   }
// // }

// // imprimirArray()

// // // a) Imprime "Array Vazio"
// // // b) Imprime 0 no comprimento do array
// // // c) Imprime os números no array na ordem
// // // d) Imprime os números no array na ordem inversa

// Resposta: c Explicação: A instrução do/while cria um loop que executa um bloco de código javascript uma vez, 
//                         antes de verificar se a condição é verdadeira, então repetirá o loop enquanto a condição for verdadeira. 
//                         Portanto, o iterador percorre o array e os imprime na ordem normal.


// // O que acontece no seguinte trecho de código JavaScript:

//   var js = 0;

//   while(js > 10) {

//     console.log(js);
//     js++;
//   }

// // a) Uma exceção é lançada
// // b) Os valores de js são registrados ou armazenados em um determinado local ou armazenamento
// // c) O valor de js de 0 a 9 é exibido no console
// // d) Um erro é exibido

// // Resposta: c Explicação: Em JavaScript, Console.log é uma função predefinida que aceita o valor como argumento. 
//                           //  No momento da execução do código, console.log imprime esse valor no argumento para o console.


// Qual será a saída do seguinte código JavaScript?

// Qual dos seguintes tipos de escopo o JavaScript usa?

// a) Sequencial
// b) Segmental
// c) Lexical
// d) Literal

// Resposta: c - Explicação: JavaScript, como a maioria das linguagens de programação atuais, emprega escopo léxico. Isso significa que as funções são executadas com o escopo da variável em vigor quando foram definidas, em vez do escopo da variável em vigor quando são invocadas.


// Qual é a diferença básica entre JavaScript e Java?

// a) As funções são consideradas como campos
// b) As funções são valores, e não há distinção rígida entre métodos e campos
// c) As variáveis ​​são específicas
// d) Não há diferença

// Resposta: b - Explicação: Java é uma linguagem de programação orientada a objetos, enquanto JS é uma linguagem de script orientada a objetos. 
                          // A principal diferença entre JavaScript e Java é que funções são valores, enquanto métodos e campos não são claramente definidos.


                        

// // Qual será a saída do seguinte código JavaScript?

// var quiz = [1, 2, 3];
// var js = [6, 7, 8];
// var resultado = quiz.concat(js);

// document.writeln(resultado) // saída 1, 2, 3, 6, 7, 8

// // a) 1, 2, 3, 6, 7, 8
// // b) 123
// // c) 1, 2, 3
// // d) Error


// // Qual será a função do seguinte programa JavaScript?

// var escopo = "js escopo";

// function verifiqueEscopo() {

//   var escopo = "javascript escopo";

//   function f() {

//     return escopo;
//   }
//   return f;
// }

// // a) Retorna o valor no escopo
// // b) Retorna o valor nulo
// // c) Mostra uma mensagem de erro
// // d) Retorna a exceção

// // Resposta a - Explicação: O Ambiente Léxico é um objeto que está conectado com cada função em execução, bloco de código e o script como um todo em JavaScript. O valor em scope é retornado pelo snippet de código acima.


// Que tipo de linguagem JavaScript é

// 1. Orientado a Objeto
// 2. Baseado em objetos
// 3. Linguagem de montagem
// 4. Alto nível

// Resposta: B. JavaScript não é uma linguagem puramente baseada em OOP (programação orientada a objetos) como PHP, 
// java ou muitas outras linguagens, embora seja uma linguagem baseada em objetos. Não é a linguagem baseada em OOP, 
// porque não possui três propriedades básicas de linguagens de programação orientadas a objetos, como polimorfismo, encapsulamento e herança.


// // Qual das opções a seguir é a saída correta para o seguinte código JavaScript:

// var x = 5, y = 1;
// var obj = { x: 10 }

// while(obj) {
//   console.log(y); // saída A. 1
// }

// // a. 1
// // b. Error
// // c. 10
// // d. 5


// Em JavaScript, o que é um bloco de instrução?

// 1. Bloco condicional
// 2. bloco que combina várias instruções em uma única instrução composta
// 3. bloco condicional e uma única instrução
// 4. bloco que contém uma única instrução

// Resposta B. Um bloco de instrução pode ser entendido como o conjunto de zero ou mais instruções. 
// Em geral, um bloco de instrução tem definição comum "que combina uma ou várias instruções em uma única instrução para facilitar.


// Quando o intérprete encontra uma declaração vazia, o que ele fará

// a. Mostra um aviso
// b. Solicita o preenchimento da declaração
// c. Lança um erro
// d. Ignora as declarações

// Resposta: D. Ignora as declarações - Em JavaScript, quando o interpretador encontra uma instrução vazia, 
                                     // ele normalmente ignora ou não responde a essa instrução vazia. 
                                     // As declarações vazias também às vezes são muito úteis, como usamos 
                                     // as declarações vazias para criar loops para nada.

                            
// // O que acontecerá se o seguinte código JavaScript for executado?

// var contar = 0;

// while(contar < 10) {

//   console.log(contar);
//   contar++;
// }

// // a. Um erro é exibido
// // b. Uma exceção é lançada
// // c. Os valores da variável de contagem são registrados ou armazenados em um local ou armazenamento específico
// // d. O valor da contagem de 0 a 9 é exibido no console

// // Resposta: C. A função "console.log()" usada na função acima é uma das funções predefinidas do JavaScript. 
//              // Ele recebe valores como argumentos passados ​​a ele e exibe esse valor em argumentos dentro do console quando o código é executado.


// // Qual das opções a seguir é a saída correta para o seguinte código JavaScript:

// var grade = 'C';
// var resultado;

// switch(grade) {

//   case 'A':
//     resultado += " 10";
//     break;

//   case 'B': 
//     resultado += " 9";
//     break;

//   case 'C':
//     resultado += " 8"
//     break;

//   default:
//     resultado += " 0"
// }

// console.log(resultado); // saída: C. undefined 8


// // a. 10
// // b. 9
// // c. 8
// // d. 0


// // Qual das opções a seguir é a saída correta para o seguinte código JavaScript:

// var x = 3;
// var y = 2;
// var z = 0;

// if(x == y)
//   console.log(x);

// else if(x == y)
//    console.log(x);

// else 
//    console.log(z);

// // a. 3
// // b. 0
// // c. Error
// // d. 2

// Resposta: b. 0


// Qual das seguintes variáveis ​​tem precedência sobre as outras se os nomes forem os mesmos?

// a. Variavel global 
// b. O elemento local
// c. Os dois acima
// d. Nenhuma das acima

// Resposta B. Explicação: Em JavaScript, a variável local tem precedência sobre a variável global 
// se o nome das variáveis ​​locais e globais for o mesmo.


// Qual das opções a seguir é usada como início literal hexadecimal?

// a. 00
// b. 0x
// c. 0X
// d. Tanto 0x quanto 0X

// Resposta: D. Explicação: Em geral, X e x podem ser usados ​​para denotar os valores hexadecimais, 
// portanto, qualquer literal inteiro que comece com 0X ou 0x denota um número hexadecimal.


// Quando há um valor indefinido ou infinito durante uma computação aritmética em um programa, o JavaScript imprime?

// a. Imprime um erro de exceção
// b. Imprime um erro de estouro
// c. Exibe "Infinito"
// d. Imprime o valor como tal

// Resposta: C. Explicação: No caso em que o resultado de qualquer expressão aritmética estar além do maior número representável, 
// o JavaScript imprime o infinito. Da mesma forma, se o resultado de qualquer operação numérica estiver além do maior número negativo, 
// o JavaScript imprime infinito negativo.



// // Qual das opções a seguir é a saída correta para o seguinte código JavaScript:

// var a = 0;
// var b = 0;

// while (a < 3) {
  
//   a++;
//   b += a;

//   console.log(b); // saída: A. 136
                     // 0 += 1 = 1
                     // 1 += 2 = 3
                     // 3 += 3 = 6
// }

// // A) 136
// // B) 123
// // C) 013
// // D) 01

// // Qual das opções a seguir é a saída correta para o código JavaScript fornecido?

// var porrada = new Function("num1", "num2", "return Math.pow(num1, num2)");
// document.writeln(porrada(2,3)); // saída: 8

// // 1. 8
// // 2. 3
// // 3. 6
// // 4. Error

// // Qual das opções a seguir é a saída correta para o código JavaScript fornecido?

//   function codigo(id, nome) {

//     this.id = id;
//     this.nome = nome;
//   }

//   function pCodigo(id, nome) {

//     codigo.call(this, id, nome)
//   }

//   console.log(new pCodigo(004, "James Dio").nome);

// // 1. James Dio
// // 2. compilation error
// // 3. runtime error
// // 4. undefined


// // Qual das opções a seguir é a saída correta para o seguinte código JavaScript fornecido:

// function suaFuncao() {

//   document.getElementById("teste").innerHTML = Math.cbrt(2); // saída: D. 1.2599210498948732

//   // A) 972
//   // B) 81
//   // C) 9
//   // D) 1.2599210498948732

// }

// suaFuncao()


// // Qual é a saída do programa abaixo:


// var a = 0
// var b = 0

// while (a < 3) {
  
//   a++

//   b += a

//   console.log(b); // saída: a. 1 3 6
//                  // 0 + 1 = 1
//                  // 1 + 2 = 3
//                  // 3 + 3 = 6
// }

// // a. 136
// // b. 123
// // c. 013
// // d. 01



// // Qual das opções a seguir seria a saída correta para o código JavaScript fornecido?


// var comprimento = 5;
// var x = 5;
// var comprimento = 4;

// for(var j = comprimento; j >= 0; j--) {

//   console.log(x); // saída: D. 5 3 1 -1 -3 - O valor da variável x diminuirá 2 vezes quando o corpo do loop for executado 
//                                    // e o corpo executará 4 vezes até que o valor da variável de j seja 0.
//   x = x - 2
// }

// // A) 5 5 5 5
// // B) 5 3 2 1
// // C) 5 3 1
// // D) 5 3 1 -1 -3


// // Qual das opções a seguir seria a saída correta para o código JavaScript fornecido?

// var x = 0;

// for(x;x < 10; x++)
//    console.log(x); // saída: C. 0 1 2 3 4 5 6 7 8 9

//   // A) 10
//   // B) erro
//   // C) 0 1 2 3 4 5 6 7 8 9
//   // D) 5


// // Considere o seguinte trecho de código JavaScript:

// function fun() {

//   if(0 === undefined)
//      debugger;
// } 

// // Qual é o papel da instrução "debugger"?

// // A) É um tipo de palavra-chave que é usada para depurar todo o programa de uma só vez
// // B) Não fará nada, embora seja um ponto de interrupção
// // C) Ele irá depurar o erro nessa declaração
// // D) Todos acima mencionados

// // Resposta B. Um programa pode conter vários erros como erros de sintaxe, erros lógicos, etc, 
// // e para muitos deles não há mensagens de alerta e também não há indicações para encontrar os erros.
// // Portanto, para encontrar a localização do erro e corrigi-lo, o desenvolvedor configura os pontos 
// // de interrupção no código duvidoso usando a janela do debugger.


// // Qual das opções a seguir é a saída correta para o código JavaScript fornecido?

// const obj = { 
//   prop:12
// }

// Object.preventExtensions(obj)

// console.log(Object.isExtensible(obj)); // saída: D. falso(false) - Object.preventExtensions() apenas impede a inclusão de 
//                                                                 // novas propriedades que já foram adicionadas a um objeto.
//                                                                 // Essa mudança não é reversível, o que significa que uma vez 
//                                                                 // que um objeto se torna não extensível, ele não pode ser 
//                                                                 // alterado para extensível.

// // A) 12
// // B) error
// // C) true
// // D) false


// // // Qual é a saída do código abaixo?

// // function x() {

// //   console.log(2 + 5 + "8"); // saída: D. 78
// // }

// // // A) 258
// // // B) Error 
// // // C) 7
// // // D) 78

// x()


// // Qual é a saída do código abaixo?

// var tamanho = 5;
// var x = 5;
// var tamanho = 4;

// for(var j = tamanho; j > 0; j--) {

//   console.log(x); // saída: A. 5555
//   // xx = x - 2;
// }

// // A) 5555
// // B) 5321
// // C) 531
// // D) 531-1-3



// // Qual é a saída?

// var a = "Global"
// var x = a.lastIndexOf("G")

// console.log(x); // saída: 0


// // Qual é a saída?

// var minhaVar = Boolean('false')

// document.getElementById('demo').innerHTML = minhaVar;

// // A) undefined
// // B) error 
// // C) true 
// // D) false 


// // Qual é a saída do código a seguir?

// var primeiraPalavra = "Java"
// var segundaPalavra = "Javascript"

// console.log(ehAnagrama(primeiraPalavra, segundaPalavra)) // saída: falso(false)

// function ehAnagrama(um, dois) {

//   var a = um.toLowerCase()
//   var b = dois.toLowerCase()

//   a = a.split("").sort().join("")
//   b = b.split("").sort().join("")

//   return a === b
// }


// // Qual é a saída do código a seguir?

// function virarDireita(array, rodar) {

//   if(rodar == 0)
//      return array

//      for(let i = 0; i < rodar; i++) {

//       let elemento = array.pop()
      
//       array.unshift(elemento)

//      }
//   return array 
// }

// virarDireita([2, 3, 4, 5, 7], 3)
// virarDireita([44, 1, 22, 111], 5)
// function x() {

//   console.log(2 + 5 + "8"); // saída: C. 78
// }

// x()

// // A) 258
// // B) 7
// // C) 78
// // D) Erro de compilação


// // Qual é a saída do código a seguir?

// num1 = 5

// function cal() {

//   num1 = 10
//   num2 = 5

//   num3 = num2 * num1 

//   console.log(num3); // saída: B. 50
// }

// cal()

// // A) 25
// // B) 50
// // C) 100
// // D) Erro


// // Qual é a saída do código a seguir?

// var a = 10;

// if(a == a++)

// console.log(a); // saída D. 11

// // A) Error
// // B) 10
// // C) 1010
// // D) 11


// // Qual é a saída do código a seguir?

// a = 8 + 8;

// console.log(16); // saída: A) 16

// // A) 16
// // B) Erro de compilação 
// // C) 88
// // D) Erro de tempo de execução


// // Qual é a saída do código a seguir?

// x = 7 + "7";

// console.log(x); // saída: D. 77

// // A) Erro 
// // B) 7
// // C) 14 
// // D) 77



// // Qual será a saída do código abaixo?

// class Rect {

//   constructor(h, w) {

//     this.height = h;
//     this.width = w;
//   }

//   get foo() {
//     return this.foo();
//   }

//   foo() {
//     return this.height * this.width
//   }
// }

// const sq = new Rect(5, 20)

// console.log(sq.foo()); // saída: B. 100

// // A) this.height * this.width
// // B) 100
// // C) Error 
// // D) 5 * 20


// // Qual será a saída do código abaixo?

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// var minhaArray = array.filter(v => v % 3 === 0);

// console.log(minhaArray); saída: C. [3, 6, 9, 12, 15]

// A) [1, 2, 4, 5, 7, 8, 10, 11, 13, 14]
// B) minhaArray
// C) [3, 6, 9, 12, 15]
// D) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]


// // Qual será a saída do código abaixo?


// var x = 5
// var y = 2
// var z = x % y 

// console.log(z); // saída: B. 1

// // A) 0
// // B) 1
// // C) 2
// // D) 5


// // Qual é a saída do código abaixo?

// txt1 = "um";
// txt1 += "dois"

// console.log(txt1); // saída: A. umdois

// // A) umdois
// // B) um dois
// // C) error 
// // D) undefined

// document.getElementById("demo").innerHTML = z; // saída: A. 1

// // A) 1
// // B) 2
// // C) 3
// // D) 4


// // Qual será a saída do código abaixo?

// var x = 123e5;

// document.getElementById("demo").innerHTML = x; // saída: B. 12300

// // A) 0.0123
// // B) 12300
// // C) Error 
// // D) undefined


// // Qual será a saída do código abaixo?

// function minhaFuncao() {

//   var res = "";

//   res = res + Number.isFinite(5-2)

//   document.getElementById("demo").innerHTML = res; // saída B. verdadeiro(true)
// }

// minhaFuncao()

// // A) 4
// // B) true 
// // C) false 
// // D) error


// // Qual será a saída do código abaixo?

// function saida(opcao) {

//   return (opcao ? "sim" : "nao")
// }

// ans = true;

// console.log(saida(ans)); // saída: A. sim

// // A) sim
// // B) nao
// // C) Erro em tempo de execução
// // D) Erro de compilação


// // Qual será a saída do código abaixo?

// var obj = {

//   length: 20,
//   height: 35
// }

// if('breadth' in obj === false) {

//   obj.breadth = 12
// }

// console.log(obj.breadth); // saída: B. 12

// // A) 20
// // B) 12
// // C) undefined
// // D) error 


// // Qual será a saída do código abaixo?

// function calAltura() {

//   var altura = 123.56;
//   var tipo = (altura >= 190) ? "alto" : "curto";

//   console.log(tipo); // saída: D. curto

//   return tipo;

// }

// calAltura()

// // A) 123.56
// // B) 190
// // C) alto
// // D) curto


// // Qual será a saída do código abaixo?

// let a = "Ola";
// let b = " mundo"

// console.log(a + b); // saída: C. Ola mundo

// // A) Ola 
// // B) mundo 
// // C) Ola mundo 
// // D) undefined


// // Qual será a saída do código abaixo?

// var a = [1, 2, 3, 4, 5];

// var novoArray = a.slice(0, 3)

// console.log(novoArray); // saída: A. [1, 2, 3]

// // A) [1, 2, 3]
// // B) [4, 5]
// // C) [1, 2, 3, 4]
// // D) [1, 2, 3, 4, 5]


// // Qual será a saída do código abaixo? 

// var soma = 0;
// var arr = [10, 15, 20, 30]

// arr.forEach(function minhaFuncao(elemento) {

//   soma = soma + elemento 
// })

// console.log(soma); // saída: B. 75

// // A) 70
// // B) 75
// // C) 10
// // D) Erro 


// // Qual será a saída do código abaixo?

// var valores = ["um", "dois", "tres"]
// var ans = valores.shift()

// console.log(ans); // saída: A. um

// // A) um 
// // B) dois 
// // C) tres 
// // D) Erro 


// // Qual será a saída do código abaixo?

// var arr = [1, 2, 3]
// var rev = arr.reverse()

// console.log(rev); // saída: B. [3, 2, 1]

// // A) 1, 2, 3
// // B) 3, 2, 1
// // C) 3 
// // D) 1


// // Qual será a saída do código abaixo?

// function emp(id, nome) {

//   this.id = id;
//   this.nome = nome 
// }

// e = new emp(103, "Bob Marley")

// console.log(e.id + " " + e.nome); // saída: C. 103 Bob Marley

// // A) 103 bob Marley
// // B) 103 
// // C) 103 Bob Marley
// // D) Bob Marley


// // Qual será a saída do código abaixo?

// var emp = new Object() 

// emp.nome = "Bob Marley"
// emp.profissão = "cantor"

// console.log(emp.nome + ", " + "profissão: " + emp.profissão); // saída: B. Bob Marley, profissão: cantor

// // A) profissão: cantor
// // B) Bob Marley, profissão: cantor
// // C) Bob Marley
// // D) cantor


// // Qual será a saída do código abaixo?

// function Colaborador(nome, salario) {

//   this.nome = nome 
//   this.salario = salario 
//   this.alterarSalario = AlterarSalario

//   function AlterarSalario(outroSalario) {

//     this.salario = outroSalario
//   }
// }

// colaborador = new Colaborador("João Santos", 3000)
// colaborador.alterarSalario(4500)

// console.log(colaborador.nome + ", " + "salário: " + colaborador.salario); // saída: D. João Santos, salário: 4500

// // A) João Santos, salário: 3000
// // B) João Santos
// // C) salário: 4500
// // D) João Santos, salário: 4500


// // Qual será a saída do código abaixo?

// const obj = {

//   10: 'do',
//   21: 're',
//   23: 'mi'
// }

// console.log(Object.entries(obj)[2]); // saída: D. ['23', 'mi']

// // A) ['mi', '23']
// // B) ['10', 'do']
// // C) ['21', 're']
// // D) ['23', 'mi']


// // Qual será a saída do código abaixo?

// const obj1 = {

//   a: 10,
//   b: 15,
//   c: 18
// }

// const obj2 = Object.assign({
//   c: 7,
//   d: 1,
// }, obj1)

// console.log(obj2.c, obj2.d); // saída: B. 18, 1

// A) 7,1
// B) 18, 1
// C) undefined
// D) Error 


// // Qual será a saída do código abaixo?

// function Pessoa() {

//   this.nome = 'bob';
// }

// function obj() {

//   obj.call(this);
// }

// obj.prototype = Object.create(Pessoa.prototype);

// const app = new obj();

// console.log(app.nome);


// // Qual será a saída do código abaixo?

// const objeto1 = {}

// Object.defineProperties(objeto1, {

//   propriedade: {
//     value: 10
//   }
// })

// console.log(objeto1.propriedade); // saída: B. 10

// // A) 0
// // B) 10
// // C) undefined
// // D) Erro 


// // Qual será a saída do código abaixo?

// var add = new Function("num1", "num2", "return num1 + num2")

// console.log(add(2, 5)); saída: 7

// // A) 2
// // B) 5
// // C) Erro 
// // D) 7


// // Qual será a saída do código abaixo?

// var a = 3.7
// var b = 2

// a = Math.ceil(a)

// console.log(a * b);  // saída: D. 8 - Math.ceil retorna o menor número inteiro maior ou igual a "x".

// // A) 6
// // B) 7.4 
// // C) 7.5
// // D) 8


// // Qual será a saída do código abaixo?

// var a = 2.99
// var ans = Math.floor(a) * Math.floor(a)

// console.log(ans); // saída: D. 4 - Math.floor(x) retorna o menor número inteiro dentre o número "x". a = 2 * 2 a =4

// // A) 9
// // B) 8.31
// // C) Erro
// // D) 4


// // Qual será a saída do código abaixo?

// var a = 225

// console.log(Math.sqrt(a)); //saída B) 15

// // A) 225
// // B) 15
// // C) Err 
// // D) undefined


// // Qual será a saída do código abaixo?

// function imprimirArray(a) {

//   var len = a.length, i = 0

//   if(len == 0)

//      console.log("Array Vazio");

//   else {

//     do{

//       console.log(a[i]);

//     } while(++i < len)
//   }
// }


// // A) Imprime os números na matriz em ordem 
// // B) Imprime os números na matriz na ordem inversa
// // C) Imprime 0 no comprimento da matriz
// // D) Imprime "Matriz Vazia"

// // Resposta: A. Imprime os números na matriz em ordem 


// // Qual será o código equivalenre do seguinte código JavaScript?

// for(var p in o)
//    console.log(o[p]);

// // A) for(var i = 0; i < a.length; i++) {
// //   console.log(a[i]);
// // }

// // B) for(int i = 0; i < a.length; i++) {
// //   console.log(a[i]);
// // }

// // C) for(var i = 0; i <= a.length; i++) {
// //   console.log(a[i]);
// // }

// // D) for(var i = 1; i < a.length; i++) {
// //   console.log(a[i]);
// // }

// // Resposta: A. 



// // Qual será a saída do código abaixo?

// function alcance(comprimento) {

//   var a = 9

//   for(var i = 0; i < comprimento; i++) {

//     console.log(a); // saída B. 9 9 9 
//   }
// }

// alcance(3)

// // A) 5 
// // B) 9 9 9
// // C) 2 
// // D) Erro 


// // Qual será a saída do código abaixo?

// var a = 10

// do {

//   a += 1

//   console.log(a); // saída: D> 11


// } while (a < 5);

// // A) 11121314
// // B) 1112
// // C) 12345
// // D) 11


// // Qual será a saída do código abaixo?

// var a = 0
// var b = 0

// console.log(a++);
// console.log(b += a);

// while(a < 3) {

//   a++;

//   b += a;

//   console.log(b); // saída A. 1 3 6 
//                           //1.  a++ = 0
//                           //    b += a = 1
//                           //2 . 1++ = 2
//                           //    1 += 2 = 3
//                           //3.  2++ = 3
//                           //    3 += 3 = 6
// }

// // A) 1 3 6 
// // B) 1 2 3
// // C) 0 1 3
// // D) 0 1



// // Qual será a saída do código abaixo?

// var tamanho = 5
// var a = 5 
// var tamanho = 4

// for(var j = tamanho; j >= 0; j--) {

//   console.log(a); // saída: C. 5 3 1 -1 -3
//                           // 1. a = 5
//                           // 2. a = 5 - 2 = 3
//                           // 3. a = 3 - 2 = 1 
//                           // 4. a = 1 - 2 = -1
//                           // 5. a = -1 - 2 = -3
//   a = a - 2 
// }

// // A) 5 5 5 5
// // B) 5 3 2 1
// // C) 5 3 1 -1
// // D) 5 3 1


// // Qual será a saída do código abaixo?

// var a  = 0

// for(a; a < 5; a++)

// console.log(a); // saída: C. 4 - 0 1 2 3 4

// // A) 0 
// // B) Erro 
// // C) 4 
// // D) 5


// // Qual será a saída do código abaixo?

// livro[tipoDado] =  valor_atribuicao 

// // A) Um integer 
// // B) Uma String 
// // C) Um Objeto 
// // D) Ponto Flutuante

// // Resposta B. Uma String

// Para determinar se um objeto é o protótipo de (ou faz parte da cadeia de protótipos de) outro objeto, deve-se usar o:

// A) Método isPrototypeOf()
// B) Método equals()
// C) operador === 
// D) operador ==

// Resposta A. O método isPrototypeOf() lhe permite checar se um objeto está ou não 
// na cadeia de protótipos (cadeia hieráquica) de um outro objeto.


// // Identifique o processo realizado no seguinte trecho de código JavaScript?

// o = {
//   x: 1,
//   y:{
//     z: [false, null]
//   }
// }

// s = JSON.stringify(o)
// p = JSON.parse(s)

// console.log(p); // saída: B. Serialização de Objetos

// // A) Encapsulamento de Objetos
// // B) Serialização de Objetos 
// // C) Abstração do objeto 
// // D) Codificação de Objetos 


// // Qual é a saída do programa abaixo:

// const objeto1 = {}

// a = Symbol('a')
// b = Symbol('b')

// objeto1[a] = 'harry'
// objeto1[b] = 'derry'


// const objetoSimbolos = Object.getOwnPropertySymbols(objeto1) // saída B. 2

// console.log(objetoSimbolos.length);

// // A) 0 
// // B) 2
// // C) 1
// // D) Erro 

// var x = 8;

// if(x > 9) {

//   console.log(9);

// } else {

//   console.log(x); // saída: C. 8
// }

// // A) 9
// // B) 0
// // C) 8
// // D) Undefined


// Qual será a saída do código abaixo?



// // EXPLIQUE O RESULTADO DA SAÍDA:

// localStorage.setItem('teste', 100500);
// location.reload(true)
// localStorage.setItem('teste1', 100501)

// setTimeout(function() {

//   localStorage.setItem('teste2', 100502)
// })

// setTimeout(function() {

//   localStorage.setItem('teste3', 100503)
// }, 100)

// console.log(localStorage.getItem('teste'));
// console.log(localStorage.getItem('teste1'));
// console.log(localStorage.getItem('teste2'));
// console.log(localStorage.getItem('teste3'));


// // Qual é a saída do programa abaixo?

// function paraLibras(quilos) {

//   if (isNaN(quilos)) {
    
//     return 'Não é um número! Não pode ser um peso.'
//   }

//   return quilos * 2.2;
// }

// console.log(paraLibras('isto é um teste')); // saída: Não é um número! Não pode ser um peso.
// console.log(paraLibras('100')); // saída: 220.00000000000003


// // Qual é a saída do programa abaixo?

// function soma(a, b, c) {

//   return a + b + c;
// }

// const nums = [15, 25, 35]

// console.log(soma(...nums)); // saída: 75



// // Qual é a saída do programa abaixo?

// function criarContador() {

//   let contar = 0;

//   function incrementar(){

//     contar++

//     console.log(contar);
//   }

//   return incrementar;
// }

// const add = criarContador()
// add() // 1
// add() // 2
// add() // 3


// // Qual é a saída do programa abaixo?

// var estudante = {

//   nome: "Bob",
//   buscarNome: function() {

//     console.log(this.nome); // saída: Bob
//   }
// }

// estudante.buscarNome()


// // Qual é a saída do programa abaixo?

// var estudante = {
//   nome: 'Bob',
//   buscarNome: function() {

//     console.log(this.nome);
//   }
// }

// var outroEstudante = {
//   nome: 'Peter'
// }

// estudante.buscarNome.call(outroEstudante) // saída: Peter


// // Qual é a saída do programa abaixo?

// const obj1 = {

//   propriedade1: 21
// }

// const descritor1 = Object.getOwnPropertyDescriptor(obj1, 'propriedade1')

// console.log(descritor1.configurable); // saída: verdadeiro(true)
// console.log(descritor1.enumerable); // saída: verdadeiro(true)

// // A) true 21 
// // B) true false 
// // C) true true 
// // D) false false 
// function digaOi() {

//   console.log("Ola " + this.nome); // saída: Ola Bob
// }

// var pessoa = { nome: 'Bob'}

// digaOi.call(pessoa)


// // Qual é a saída do programa abaixo?

// const obj1 = {

//   propriedade1: '10'
// }

// const obj2 = Object.freeze(obj1)

// obj2.propriedade1 = '20'

// console.log(obj2.propriedade1); // saída: A. 10 - Object. freeze() congela um objeto: isto é, 
//                                                // impede que novas propriedades sejam adicionadas a ele.

// // A) 10
// // B) 20
// // C) Erro de tempo de execução
// // D) Erro de compilação
// function digaOi(adjetivo) {

//   console.log("Ola " + this.nome + ", você é " + adjetivo ); // saída: Ola Bob, você é incrível
// }

// var obj = { nome: 'Bob'}

// digaOi.call(obj, "incrível")


// // Qual é a saída do programa abaixo?

// const objeto1 = {

//   propriedade1: 20
// }

// console.log(Object.is(objeto1)); // saída: C. falso(false) - Object.is() determina se dois valores correspondem ao mesmo valor.
// // A) 20 
// // B) true 
// // C) false 
// // D) error 


// // Qual é a saída do programa abaixo?

// const obj = {
//   prop: 12
// }

// Object.preventExtensions(obj)

// console.log(Object.isExtensible(obj)); // saída: B. falso(false) - não é exetensivel 

// // A) 12
// // B) false 
// // C) true 
// // D) erro


// // Qual é a saída do programa abaixo?

// var a = 5, b = 1
// var obj = {

//   a: 10
// }

// with(obj) {

//   console.log(b); // saída: C. 1
// }

// // A) 10
// // B) Error
// // C) 1
// // D) 5


// // Qual é o código mais eficiente?

// // código 1

// for(var num = 10; num > 1; num--) {

//   console.log(num);
// }

// // código 2

// var num = 10

// while(num >= 1) {
  
//   console.log(num);
//   num++
// }

// // A) código 1
// // B) código 2
// // C) Ambos código 1 e código 2
// // D) Não tem comparação

// // Resposta: A. código 1


// // Qual é a saída do programa abaixo?

// var contar = 0

// while (contar < 10) {

//   console.log(contar); // saída: 0 1 2 3 4 5 6 7 8 9
//    contar++

   
// }
   
// // Qual é a saída do programa abaixo?
   
// var a = 1

// if(a > 10) {

//   console.log(10);

// } else {

//   console.log(a); // saída: C. 1
// }

// // A) 10
// // B) 0 
// // C) 1
// // D) undefined


// // Qual é a saída do programa abaixo?

// var grade = 'B'
// var resultado 

// switch(grade) {


  
//   case 'A':
    
//       resultado += "10";
//       break;
    

//   case 'B':
    
//       resultado += "9";
//       break;
    

//   case 'C':
    
//       resultado += "8";
//       break;
    

//   default:
//     resultado += "0"
// }

// console.log(resultado); // saída: B

// // Qual é a saída do programa abaixo?

// var grade = 'A'
// var resultado 

// switch(grade) {

//   case 'A':
//     resultado += "10"

//   case 'B':
//     resultado += "9"
// }


// // Qual é a saída do programa abaixo?

// var a = 4
// var b = 1
// var c = 0

// if(a == b)
//    console.log(a);
// else if(a == c)
//    console.log(a);
// else 
//    console.log(c);

// // A) 4
// // B) 1
// // C) Erro 
// // D) 0

// // Resposta: D. 0


// // Qual é a saída do programa abaixo?

// var grade = 'A'
// var resultado 

// switch(grade) {

//   case 'A': 
//      resultado += "10"

//   case 'B':
//      resultado += "9"
    
//   case 'C':
//      resultado += "8"

//   default:
//      resultado += "0"
// }

// console.log(resultado);


// const pessoa = {
//   nome: 'Bob'
// }

// function saudacao(saudar, mensagem) {

//   return `${ saudar } ${ this.nome }. ${ mensagem }`
// }

// let resultado = saudacao.apply(pessoa, ['Ola', 'Como você está?'])

// console.log(resultado); // saída: Ola Bob. Como você está?,


// // O que é desestruturação de objetos?

// // A desestruturação de objetos é uma maneira de extrair propriedades de um objeto (ou uma matriz).
// // Antes do ES6, você precisaria fazer isso para extrair as propriedades de um objeto:

// // const PessoaDetalhes = {
// //   nome: "Bob",
// //   idade: 42,
// //   casado: false 
// // }

// // const nome = PessoaDetalhes.nome 
// // const idade = PessoaDetalhes.idade
// // const casado = PessoaDetalhes.casado

// // console.log(nome);
// // console.log(idade);
// // console.log(casado);

// // Mas desde o ES6 você pode fazer isso com uma linha de código utilizando a desestruturação de objetos:


// const PessoaDetalhes = {
//   nome: "Bob",
//   idade: 42,
//   casado: false 
// }

// const { nome, idade, casado } = PessoaDetalhes

// console.log(nome);
// console.log(idade);
// console.log(casado);

// // Encontre o enésimo maior elemento em uma matriz ordenada:

// let arr = [12, 34, 21, 14, 67, 35, 64, 25]
// arr.sort((a, b) => a - b)

// let n
// const maiorEl = arr[arr.length - n]

// console.log(maiorEl);


// // Imprima todos os elementos duplicados de um array

// let arr = [1, 1, 5, 6, 7, 7, 8, 9, 3, 4, 4]

// function removerDuplicados(ar) {

//   let resultado = ar.filter((item, index) => {
//     return ar.indexOf(item) !== index 
//   })
//   return resultado
// }

// console.log(removerDuplicados(arr)); // saída: [1, 7, 4]


// // Qual é a saída do código abaixo?

// var carro =  new Veiculo("Honda", "branco", "2010", "UK")
// console.log(carro); // saída: 4. Veiculo {model: 'Honda', cor: 'branco', ano: '2010', pais: 'UK'}

// function Veiculo(model, cor, ano, pais) {
//   this.model = model 
//   this.cor = cor 
//   this.ano = ano 
//   this.pais = pais 
// }

// // 1. undefined
// // 2. ReferenceError
// // 3. null 
// // 4. {model: 'Honda', cor: 'branco', ano: '2010', pais: 'UK'}


// // Qual é a saída do código abaixo?

// function foo() {

//   let x = (y = 0)
//   x++
//   y++

//   return x
// }

// console.log(foo(), typeof x, typeof y); // saída 3. 1 'undefined' 'number

// // 1. 1, undefined e undefined
// // 2. ReferenceError
// // 3. 1, undefined e number 
// // 4. 1, number e number 


// // Qual é a saída do código abaixo?

// function principal() {

//   console.log("A");

//   setTimeout(function imprimir() {

//     console.log("B");
//   },  0)

//   console.log("C");
// }

// principal()

// // 1. A, B e C
// // 2. B, A e C
// // 3. A e C 
// // 4. A, C e B

// // Resposta 4. A, C e B


// // Qual é a saída da verificação de igualdade abaixo

// console.log(0.1 + 0.2 === 0.3); // saída: falso(false) - ponto flutuante gera binário e influencia no resultado da operação.

// // 1. false 
// // 2. true 


// // Qual é a saída do código abaixo

// var y = 1

// if (function f() {}) {
  
//   y += typeof f 
// }

// console.log(y); // saída: 4 1undefined

// // 1: 1function
// // 2: 1object
// // 3: ReferenceError
// // 4: 1undefined


// // Qual é a saída do código abaixo

// function foo() {

//   return;

//   {
//     mensagem: "Olá Mundo"
//   }
// }

// console.log(foo()); // saída: 3. undefined

// // 1: Olá Mundo
// // 2: Object {message: "Olá Mundo"}
// // 3: Undefined
// // 4: SyntaxError


// // Qual é a saída do código abaixo

// var meusCaracteres = ["a", "b", "c", "d"]

// delete meusCaracteres[0]

// console.log(meusCaracteres); // saída: "b", "c", "d"
// console.log(meusCaracteres[0]); // saída: undefined
// console.log(meusCaracteres.length); // saída: 4


// // 1: [empty, 'b', 'c', 'd'], empty, 3
// // 2: [null, 'b', 'c', 'd'], empty, 3
// // 3: [empty, 'b', 'c', 'd'], undefined, 4
// // 4: [null, 'b', 'c', 'd'], undefined, 4

// // Resposta 3. [empty, 'b', 'c', 'd'], undefined, 4


// // Qual é a saída do código abaixo?

// var array1 = new Array(3)

// console.log(array1); // saída: [empty × 3]

// var array2 = []
// array2[2] = 100 

// console.log(array2); // saída: [empty × 2, 100]

// // 1: [undefined × 3], [undefined × 2, 100], [undefined × 3]
// // 2: [empty × 3], [empty × 2, 100], [empty × 3]
// // 3: [null × 3], [null × 2, 100], [null × 3]
// // 4: [], [100], []


// // Qual é a saída do código abaixo?

// const obj = {
//   prop1: function() {
//     return 0
//   },
//   prop2() {
//     return 1
//   },
//   ["prop" + 3]() {
//     return 2
//   }
// }

// console.log(obj.prop1()); // saída 0
// console.log(obj.prop2()); // saída: 1
// console.log(obj.prop3()); // saída: 2

// // 1: 0, 1, 2
// // 2: 0, { return 1 }, 2
// // 3: 0, { return 1 }, { return 2 }
// // 4: 0, 1, undefined


// // Qual é a saída do código abaixo?

// console.log(1 < 2 < 3); // saída: verdadeiro(true) - as expressões são avaliadas da esquerda para direita.
// console.log(3 > 2 > 1); // saída: falso(false)


// //  Qual é a saída do código abaixo no modo não estrito

// function imprimirNumeros(primeiro, segundo, primeiro) {

//   console.log(primeiro, segundo, primeiro);
// }

// imprimirNumeros(1, 2, 3) // saída: 2. 3, 2, 1

// // 1: 1, 2, 3
// // 2: 3, 2, 3
// // 3: SyntaxError: Duplicate parameter name not allowed in this context
// // 4: 1, 2, 1


// //  Qual é a saída do código abaixo no modo não estrito

// function imprimirNumeros = (primeiro, segundo, primeiro) => {

//   console.log(primeiro, segundo, primeiro);
// }

// imprimirNumeros(1, 2, 3)

// // 1: 1, 2, 3
// // 2: 3, 2, 3
// // 3: SyntaxError: Duplicate parameter name not allowed in this context
// // 4: 1, 2, 1

// // Resposta: 3. Ao contrário das funções regulares, as funções de seta 
                // não permitem parâmetros duplicados no modo estrito ou não estrito.


// // Qual é a saída do código abaixo

// const arrowFunc = () => arguments.length

// console.log(arrowFunc(1, 2, 3));


// // 1: ReferenceError: arguments is not defined
// // 2: 3
// // 3: undefined
// // 4: null

// // Resposta: 1: ReferenceError: arguments is not defined


// // Qual é a saída do código abaixo

// console.log(String.prototype.trimLeft.name === "trimLeft");
// console.log(String.prototype.trimLeft.name === "trimStart");


// // 1: True, False
// // 2: False, True

// // Resposta: false, true - Para ser consistente com funções como String.prototype.padStart, 
//                         // o nome do método padrão para aparar os espaços em branco é considerado como trimStart.
//                         // Devido a razões de compatibilidade com a web, o antigo nome do método 'trimLeft' ainda 
//                         // atua como um alias para 'trimStart'. 
//                         // Portanto, o protótipo para 'trimLeft' é sempre 'trimStart'


// // Qual é a saída do código abaixo

// console.log(Math.max()); // 4. -Infinity - é o comparador inicial porque quase todos os outros valores são maiores.
//                                        // Portanto, quando nenhum argumento for fornecido, -Infinity será retornado.

// // 1: undefined
// // 2: Infinity
// // 3: 0
// // 4: -Infinity


// // Qual é a saída do código abaixo

// console.log(10 == [10]); // saída: verdadeiro(true)
// console.log(10 == [[[[[[[10]]]]]]]); // saída: verdadeiro(true)

// // 1: True, True
// // 2: True, False
// // 3: False, False
// // 4: False, True


// // Qual é a saída do código abaixo

// console.log(10 + "10"); // saída: 1010
// console.log(10 - "10"); // saída: 0


// // 1: 20, 0
// // 2: 1010, 0
// // 3: 1010, 10-10
// // 4: NaN, NaN


// // Qual é a saída do código abaixo

// console.log([0] == false);

// if ([0]) {
//   console.log("Eu sou verdadeiro");

// } else {
//   console.log("Eu sou Falso");
// }

// // 1: True, Eu sou verdadeiro
// // 2: True, Eu sou Falso
// // 3: False, Eu sou verdadeiro
// // 4: False, Eu sou Falso

// Resposta 1. True, Eu sou verdadeiro


// // Qual é a saída do código abaixo

// console.log([1, 2] + [3, 4]); // saída: 4. 1,23,4 - O operador + não se destina ou é definido para matrizes. 
//                                                  // Então ele converte arrays em strings e os concatena.

// // 1: [1,2,3,4]
// // 2: [1,2][3,4]
// // 3: SyntaxError
// // 4: 1,23,


// // Qual é a saída do código abaixo

// const numeros = new Set([1, 2, 2, 3, 4])

// console.log(numeros); // saída: {1, 2, 3, 4}

// const navegador = new Set("Firefox")

// console.log(navegador); // saída: {"F", "i", "r", "e", "f", "o", "x"}

// // 1: {1, 2, 3, 4}, {"F", "i", "r", "e", "f", "o", "x"}
// // 2: {1, 2, 3, 4}, {"F", "i", "r", "e", "o", "x"}
// // 3: [1, 2, 3, 4], ["F", "i", "r", "e", "o", "x"]
// // 4: {1, 1, 2, 3, 4}, {"F", "i", "r", "e", "f", "o", "x"}



// // Qual é a saída do código abaixo

// console.log(NaN === NaN); // saída 2. Falso

// // 1: Verdadeiro
// // 2: Falso


// // Qual é a saída do código abaixo

// let numeros = [1, 2, 3, 4, NaN]

// console.log(numeros.indexOf(NaN)); // 4. -1 - O indexOfusa o operador de igualdade estrita (===) internamente e NaN === NaNé avaliado como falso.
//                                            // Como indexOf não poderá encontrar NaN dentro de um array, ele retorna -1 sempre.


// // 1: 4
// // 2: NaN
// // 3: Erro de sintaxe
// // 4: - 


// // Qual é a saída do código abaixo

// let [a, ...b,] = [1, 2, 3, 4, 5]

// console.log(a, b);

// // 1: 1, [2, 3, 4, 5]
// // 2: 1, {2, 3, 4, 5}
// // 3: Erro de sintaxe
// // 4: 1, [2, 3, 4]

// // Resposta: 3. Erro de sintaxe - Ao usar parâmetros rest, vírgulas à direita não são permitidas e lançarão um SyntaxError.
//                                // Se você remover a vírgula à direita, ele exibirá a 1ª resposta


// // Qual é a saída do código abaixo

// async function func() {
//   return 10
// }

// console.log(func()); // saída: 1. Promise {<fulfilled>: 10}


// // 1: Promise {<fulfilled>: 10}
// // 2: 10
// // 3: SyntaxError
// // 4: Promise {<rejected>: 10}


// // Qual é a saída do código abaixo

// function atraso() {

//   return new Promise(resolve => setTimeout(resolve, 2000))
// }

// async function atrasoLog(item) {

//   await atraso()

//   console.log(item);
// }

// async function processoArray(array) {
//   array.forEach(item => {

//     await atrasoLog(item)
//   })
// }

// processoArray([1, 2, 3, 4])


// // 1: SyntaxError 
// // 2: 1, 2, 3, 4
// // 3: 4, 4, 4, 4
// // 4: 4, 3, 2, 1

// // Resposta: 1. Erro de sintaxe - Embora “processArray” seja uma função assíncrona, a função anônima que usamos forEaché síncrona.
                                  // Se você usar await dentro de uma função síncrona, ele gerará um erro de sintaxe.



// // Qual é a saída do código abaixo

// function atraso() {

//   return new Promise((resolve) => setTimeout(resolve, 2000))
// }

// async function atrasoLog(item) {

//   await atraso()

//   console.log(item);
// }

// async function processoArray(array) {
//   array.forEach(async(item) => {

//     await atrasoLog(item)
//   })
//   console.log("Processo completo!");
// }

// processoArray([1, 2, 3, 4])


// // 1: 1 2 3 5 e Processo concluído!
// // 2: 5 5 5 5 e Processo concluído!
// // 3: Processo concluído! e 5 5 5 5
// // 4: Processo concluído! e 1 2 3 5

// // Resposta 4. Processo concluído! e 1 2 3 5


// // Qual é a saída do código abaixo

// var set = new Set()

// set.add("+0").add("-0").add(NaN).add(undefined).add(NaN)

// console.log(set); // saída: 1. {'+0', '-0', NaN, undefined} - Set tem poucas exceções da verificação de igualdade,
                                                              // 1. Todos os valores de NaN são iguais
                                                              // 2. Ambos +0 e -0 considerados como valores diferentes


// // 1: Set(4) {"+0", "-0", NaN, undefined}
// // 2: Set(3) {"+0", NaN, undefined}
// // 3: Set(5) {"+0", "-0", NaN, undefined, NaN}
// // 4: Set(4) {"+0", NaN, undefined, NaN}


// // Qual é a saída do código abaixo

// const sym1 = Symbol("um")
// const sym2 = Symbol("dois")

// const sym3 = Symbol.for("dois")
// const sym4 = Symbol.for("dois")


// console.log(sym1 === sym2, sym3 === sym4); // saída 3. falso(false), verdadeiro(true)

// // 1: verdade, verdade
// // 2: verdadeiro, falso
// // 3: falso, verdadeiro
// // 4: falso, falso



// // Qual é a saída do código abaixo

// const sym1 = new Symbol("um")

// console.log(sym1);


// // 1: SyntaxError
// // 2: one
// // 3: Symbol('one')
// // 4: Symbol

// // Resposta 4. Symbol - Symbol é apenas uma função padrão e não um construtor de objetos.


// // Qual é a saída do código abaixo

// let meuNumero = 100
// let minhaString = "100"

// if (!typeof meuNumero === "string") {
  
//   console.log("Não é uma string!");

// } else {

//   console.log("É uma string");
// }

// if (!typeof minhaString === "number") {
//   console.log("Não é um número");

// } else {
//   console.log("É um número!");
// }

// // 1: Erro de sintaxe
// // 2: Não é uma string!, Não é um número!
// // 3: Não é uma string!, É um número!
// // 4: É uma string!, É um número!

// // Resposta 4. É uma string!, É um número!


// // Qual é a saída do código abaixo:

// console.log(
//   JSON.stringify({
//     minhaArray: ["um", undefined, function() {}, Symbol("")]
//   })
// );

// console.log(
//   JSON.stringify({ [Symbol.for("um")]: "um"}, Symbol.for("um"))
// );


// // 1: {"myArray":['one', undefined, {}, Symbol]}, {}
// // 2: {"myArray":['one', null,null,null]}, {}
// // 3: {"myArray":['one', null,null,null]}, "{ [Symbol.for('one')]: 'one' }, [Symbol.for('one')]"
// // 4: {"myArray":['one', undefined, function(){}, Symbol('')]}, {}

// // Resposta: 2. {"myArray":['one', null,null,null]}, {}


// // Qual é a saída do código abaixo

// class A {

//   constructor() {
//     console.log(new.target.name); // saída A B
//   }
// }

// class B extends A {

//   constructor() {
//     super();
//   }
// }

// new A()
// new B()


// // 1: A, A
// // 2: A, B



// // Qual é a saída do código abaixo:

// const [x, ...y, z] = [1, 2, 3, 4]

// console.log(x, y, z);


// // 1: 1, [2, 3], 4
// // 2: 1, [2, 3, 4], indefinido
// // 3: 1, [2], 3
// // 4: Erro de sintaxe

// // Resposta 4. Ele lança um erro de sintaxe porque o elemento rest não deve ter uma vírgula à direita.


// // Qual é a saída do código abaixo

// var set = new Set()
// set.add("um")
// set.add("dois")

// for(let elementos of set) {

//   console.log(elementos + " ");
// }

// // A) um 
// // B) dois 
// // C) um dois 
// // D) undefined

// // Resposta: C. um dois


// // Qual é a saída do código abaixo

// var set = new Set()

// set.add("AngularJS")
// set.add("Bootstrap")
// set.delete("Bootstrap")

// console.log(set.size); // saída: B. 1

// // // A) 2
// // // B) 1
// // // C) 0
// // // D) undefined


// // Qual é a saída do código abaixo

// // var set = new Set()

// set.add("um")
// set.add("dois")
// set.add("tres")
// set.clear()

// console.log(set.size); // saída: D. 0

// // A) um 
// // B) 1
// // C) 2
// // D) 0


// // Qual é a saída do código abaixo

// var set = new Set()

// set.add("um")
// set.add("dois")

// var itr = set.values()

// console.log(itr.next().value); // saída: A. um

// // A) um 
// // B) dois 
// // C) erro 
// // D) undefined


// // Qual é a saída do código abaixo

// var set = new Set()

// set.add("1")
// set.add("2")

// console.log(set.has("3")); // saída: C. falso(false)

// // A) 3
// // B) true 
// // C) false 
// // D) 2


// // Qual é a saída do código abaixo

// const props = [
//   {
//     id: 1,
//     nome: "João"
//   },
//   {
//     id: 2,
//     nome: "Jack"
//   },
//   {
//     id: 3,
//     nome: "Tom"
//   }
// ]

// const [,, { nome }] = props;

// console.log(nome); // saída: 1. Tom

// // 1: Tom
// // 2: Error
// // 3: undefined
// // 4: Joao



// // Qual é a saída do código abaixo


// const { a: x = 10, b: y = 20 } = { a: 30}

// console.log(x); // saída: 30
// console.log(y); // saída: 20

// // 1: 30, 20
// // 2: 10, 20
// // 3: 10, indefinido
// // 4: 30, indefinido


// // Qual é a saída do código abaixo

// function area({ altura = 10, largura = 20}) {

//   console.log(altura * largura );
// }

// area()

// function verificarTipo(num = 1) {
//   console.log(typeof num);
// }

// verificarTipo() // saída: number
// verificarTipo(undefined) // saída: number
// verificarTipo("") // saída: string
// verificarTipo(null) // saída: object


// // 1: number, undefined, string, object
// // 2: undefined, undefined, string, object
// // 3: number, number, string, object
// // 4: number, number, number, number


// // Qual é a saída do código abaixo

// function add(item, items = []) {

//   items.push(item)

//   return items;
// }

// console.log(add("Laranja")); // saída: ['Laranja']
// console.log(add("Maça")); // saída: ['Maça']

// // 1: ['Laranja'], ['Laranja', 'Maça']
// // 2: ['Laranja'], ['Maça']


// // Qual é a saída do código abaixo

// function saudar(saudacao, nome, mensagem = saudacao + " " + nome)  {
//   console.log(saudacao, nome, mensagem);
// }

// saudar("Ola", "João") // saída: Ola João Ola João
// saudar("Ola", "João", "Bom dia!") // saída: Ola João Bom dia!

// // 1) Erro de sintaxe
// // 2) Ola João Ola João, Ola João Bom dia!


// // Qual é a saída do código abaixo

// function externa(f = interna()) {

//   function interna() {

//     return "Interna"
//   }
// }

// externa()

// // 1) ReferenceError: interna is not defined
// // 2) Interna 


// // Qual é a saída do código abaixo

// function minhaFunc(x, y, ...muitosMaisArgs) {

//   console.log(muitosMaisArgs);
// }

// minhaFunc(1, 2, 3, 4, 5) // saída: [3, 4, 5]
// minhaFunc(1, 2) // []

// // 1: [3, 4, 5], undefined
// // 2: SyntaxError
// // 3: [3, 4, 5], []
// // 4: [3, 4, 5], [undefined]


// // Qual é a saída do código abaixo

// const obj = { key: "valor"}
// const array = [...obj]

// console.log(array);


// // 1: ['key', 'value']
// // 2: TypeError
// // 3: []
// // 4: ['key']

// // Resposta: 2. TypeError


// // Qual é a saída do código abaixo

// function* minhaGenFun() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// var minhaGenObj = new minhaGenFun()

// console.log(minhaGenObj.next().value);

// // 1: 1
// // 2: undefined
// // 3: SyntaxError
// // 4: TypeError

// // Resposta: 4. TypeError

// // O que é hoisting (elevação ou içamento) no JavaScript e como ele funciona.

// // Significa que o motor JavaScript move as declarações de variáveis 
// // para o topo do script(escopo).
// // O escopo pode ser local e global.

// a = 1
 
// console.log("a " + a); // saída: a 1

// var a


// Explique a difrença entre os operadores “ == “ e “ === “.

// // Resposta: Ambos são operadores de comparação.
// // A diferença que "==" é usado para comparar valores
// // enquanto "===", compara valores e tipos.

// var x = 2
// var y = "2"

// console.log(x == y); // saída: verdadeiro(true)
// console.log(x === y); // saída: falso(false)


// Explique coerção implícita:

// Javascript é uma linguagem fracamente tipada, valores 
// também podem ser convertidos etre diferentes tipos automaticamente
// e isso é chamado de coerção de tipos implícita(implicit type coercion).
// Um operador que faz a comparação ativa e coerção de tipos e o "==";




// Quais são os tipos de conversão?

// Resposta: para String, para boolean, para number;

// Conversão de String usa a função String(). A coerção implícita é ativada 
// pelo operador binário "+", quando qualquer operando é uma string 

String(123) // explicito 
123 + '' // implícito