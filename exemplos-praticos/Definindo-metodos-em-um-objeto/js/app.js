let cliente = {
    // propriedades
    nome: 'Carlos',
    profissao: 'professor',
    idade: 52,

    // metodos
    mostrar: function() {
        document.querySelector('#dados').style.color = 'black'
        document.querySelector('#dados').style.display = 'block'
    },
    apagar: function() {
        document.querySelector('#dados').style.display = 'none'
    },
    mudar: function() {
        document.querySelector('#dados').style.color = '#ff0000'
    }
}
document.getElementById('dados').innerHTML =
    "<ul>" +
    "<li>Nome: " + cliente.nome + "</li>" +
    "<li>Profissão: " + cliente.profissao + "</li>" +
    "<li>Idade: " + cliente.idade + "</li>" +
    "</ul>"