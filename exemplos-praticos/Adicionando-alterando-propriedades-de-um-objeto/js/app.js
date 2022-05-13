let cliente = {
    nome: "Bob",
    sobrenome: 'Marley',
    idade: 36,
    nacionalidade: 'jamaicano'
}
document.querySelector("#cliente").innerHTML =
    "idade do cliente: " + cliente.idade + "</br>" +
    "escolaridade: " + cliente.escolaridade + "</br>"

// alterando a propriedade idade
cliente.idade = 55

// adicionado uma nova propriedade
cliente.escolaridade = "superior completo"

// lendo o objeto modificado
document.querySelector('#clienteAlterado').innerHTML =
    "idade do cliente: " + cliente.idade +
    " escolaridade: " + cliente.escolaridade + "</br>"

// adicionado novo metodo
cliente.mudar = function() {
    document.querySelector('#clienteAlterado').style.color = '#ff0000'
}