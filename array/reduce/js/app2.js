let numeros = [1, 2, 3]

let soma = numeros.reduce(function(acumulador, atualValor) {

    return acumulador + atualValor
})

console.log(soma);

let carrinhoCompras = [

    {
        produto: 'telefone',
        qtd: 1,
        preco: 699
    },
    {
        produto: 'Protetor de tela',
        qtd: 1,
        preco: 9.98
    },
    {
        produto: 'Cartão de Memoria',
        qtd: 2,
        preco: 20.99
    }
]

let total = carrinhoCompras.reduce(function(acumulador, atual) {

    return acumulador + atual.qtd * atual.preco
}, 0)

console.log(total);

// O método reduceRight()
let numeross = [1, 2, 3]

let somas = numeross.reduceRight(function(acumula, atualValor) {

    return acumula + atualValor

    console.log('acumulador: ', acumula, 'atual: ', atualValor);
})

console.log(somas);