function add(a, b) {

    return a + b
}

let soma = add 

function media(a, b, fn) {

    return fn(a, b) / 2
}

let resultado = media(10, 20, soma)

console.log(resultado);

let produtos = [

    {
        nome: 'iPhone',
        preco: 900
    },
    {
        nome: 'Samsung Galaxy',
        preco: 850
    },
    {
        nome: 'Sony Xperia',
        preco: 700
    }
]

function comparaPor(propNome) {

    return function(a, b) {

        let x = a[propNome],
            y = b[propNome]

        if (x > y) {
            
            return 1

        } else if (x < y) {
            
            return -1

        } else {

            return 0
        }
    }
}

console.log('Produto classificado por nome:');
produtos.sort(comparaPor('nome'))

console.table(produtos)