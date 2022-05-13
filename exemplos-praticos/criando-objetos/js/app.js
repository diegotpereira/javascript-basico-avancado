let cliente = {
    nome: "Carlos",
    profissao: 'professor',
    idade: 52
}
document.querySelector('#dados').innerHTML = `
    <ul>
       <li>Nome: ${cliente.nome}</li>
       <li>Profissão: ${cliente.profissao}</li>
       <li>Idade: ${cliente.idade}</li>
    </ul>`