let cidades = [
    {
        nome: 'Los Angeles',
        populacao: 3792621
    },
    {
        nome: 'New York',
        populacao: 8175133
    },
    {
        nome: 'Chicago',
        populacao: 2695598
    },
    {
        nome: 'Houston',
        populacao: 2099451
    },
    {
        nome: 'Filadelfia',
        populacao: 1526006
    }
]

let grandeCidades = []

for(let i = 0; i < cidades.length; i++) {

    if (cidades[i].populacao > 3000000) {
        
        grandeCidades.push(cidades[i])
    }
}

console.log(cidades);
console.log(grandeCidades);

let grandeCidades1 = cidades.filter(function(e) {

    return e.populacao > 3000000
})

console.log(grandeCidades1);