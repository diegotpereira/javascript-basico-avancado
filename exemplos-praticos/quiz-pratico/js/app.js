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