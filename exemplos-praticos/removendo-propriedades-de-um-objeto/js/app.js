let cliente = {
        // propriedades
        nome: 'Peter',
        sobrenome: 'Tosh',
        idade: 55,
        nacionalidade: 'jamaicano',
        escolaridade: 'superior completo',
        // metodos
        mudar: function() {
            document.querySelector('#objetoAlterado').style.color = '#ff0000'
        }
    }
    // lendo idade e escolaridade objeto original
document.querySelector('#objetoOriginal').innerHTML =
    "Nome do cliente: " + cliente.nome + "<br />" +
    " Escolaridade: " + cliente.escolaridade + "<br />"

// deletando a propriedade escolaridade e o metodo 
delete cliente.escolaridade

// lendo idade e escolaridade do objeto original
document.querySelector('#objetoAlterado').innerHTML =
    "Nome do cliente: " + cliente.nome + "<br />" +
    "escolaridade: " + cliente.escolaridade + "<br />"