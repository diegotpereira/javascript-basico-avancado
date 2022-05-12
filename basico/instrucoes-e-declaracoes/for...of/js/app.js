let iteravel = [10, 20, 30]

for (let valor of iteravel) {
    console.log(valor);
}

// Ao invés de let, você pode usar const se você não for modificar a variável dentro do bloco.
let iteravel1 = [10, 20, 30]

for (const valor of iteravel1) {
    console.log(valor);
}

// Iterando sobre uma String
let iteravel2 = 'reggae'

for (let valor of iteravel2) {
    console.log(valor);
}

// Iterando sobre uma TypedArray
let iteravel3 = new Uint8Array([0x00, 0xff])

for (let valor of iteravel3) {
    console.log(valor);
}

// Iterando sobre um Map
let iteravel4 = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3]
])

for (let entrada of iteravel4) {
    console.log(entrada);
}
for (let [key, valor] of iteravel4) {
    console.log(valor);
}

// Iterando sobre um Map
(function() {
    for (let argumento of arguments) {
        console.log(argumento);
    }
})(1, 2, 3)

// Iterando sobre uma coleção do DOM
let artigosParagrafos = document.querySelectorAll('artigo > p')

for (let paragrafo of artigosParagrafos) {
    paragrafo.classList.add('read')
}

// Diferença entre for...of e for...in
Object.prototype.objCustom = function() {}
Array.prototype.arrCustom = function() {}

let iteravel5 = [3, 5, 7]
iteravel5.foo = 'olá'

for (let i in iteravel5) {
    console.log(i);
}
for (let i of iteravel5) {
    console.log(i);
}