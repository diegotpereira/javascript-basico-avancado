// programa para passar uma função como parâmetro
function saudar() {
    return 'Ola'
}

// passando função saudar() por um parametro
function nome(usuario, funcao) {
    // acessando a função passada
    const mensagem = funcao()

    console.log(`${mensagem} ${usuario}`);
}
nome('Diego', saudar)
nome('Diogo', saudar)
nome('Douglas', saudar)