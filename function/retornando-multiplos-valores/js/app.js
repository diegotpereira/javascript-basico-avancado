// function getNomes() {
//     // obter nomes do banco de dados ou API
//     let nome = 'Diego',
//     sobrenome = 'Pereira'


//     return [nome, sobrenome]
// }
// let nomes = getNomes()

// const nome = nomes[0],
// sobrenome = nomes[1]

// // const [nome, sobrenome] = getNomes()

// retornando multiplos valores
function getNomes() {
    let nome = 'Diego',
    sobrenome = 'Pereira'

    return  {
        'nome': nome,
        'sobrenome': sobrenome
    }
}

getNomes()