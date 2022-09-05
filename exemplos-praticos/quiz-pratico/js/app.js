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

// console.log(membros) // D: [{ name: "Bob" }]

// // A: null
// // B: [null]
// // C: [{}]
// // D: [{ name: "Bob" }]

// // Qual é a saída?
// const pessoa = {
//   name: 'Bob',
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

// console.log(pessoa, nascimento) // A: { name: "Bob" }, "1997"

// // A: { name: "Bob" }, "1997"
// // B: { name: "Peter" }, "1998"
// // C: { name: "Bob" }, "1998"
// // D: { name: "Peter" }, "1997"


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

// // Qual deve ser o valor do método para registrar { name: 'Bob', idade: 22 }?
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