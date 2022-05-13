// Através da alça de repetição FOR IN
let notas = [2, 4, 5, 4, 3]

document.querySelector('#resultado').innerHTML = `
    <h2>A soma das notas com For IN é: ${somar()}</h2>
    <h2>A média das notas com For IN é: ${somar()/notas.length}</h2>`

function somar() {
    let soma = 0

    for (let index in notas) {
        soma += notas[index]
    }
    return soma
}
// Através do método reduce()
let notasReduce = [2, 4, 5, 4, 3]

document.querySelector('#resultadoReduce').innerHTML = `
    <h2>A soma das notas com reduce é: ${notasReduce.reduce(somarReduce, 0)}</h2>
    <h2>A média das notas com reduce é: ${notasReduce.reduce(somarReduce, 0)/notasReduce.length}`

function somarReduce(total, numero) {
    return total + numero
}
// Encapsulando uma estrutura "arrow function" dentro do método reduce()
let notasArrow = [2, 4, 5, 4, 3]
document.querySelector('#resultadoArrow').innerHTML = `
    <h2>A soma das notas com arrow é: ${notasArrow.reduce((t, n) => n + t, 0)}</h2>
    <h2>A média das notas com arrow é: ${notasArrow.reduce((t, n) => n + t, 0)/notasArrow.length}`