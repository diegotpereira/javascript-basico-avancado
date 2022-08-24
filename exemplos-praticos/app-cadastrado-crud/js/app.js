const cliente = {

    nome: 'Diego',
    email: 'diego@gmail.com',
    celular: '998360638',
    cidade: 'Gravatai'
}




const criarLinha = () => {

    const novaLinha = document.createElement('tr')

    novaLinha.innerHTML = `

            <td>${cliente.nome}</td>
            <td>${cliente.email}</td>
            <td>${cliente.celular}</td>
            <td>${cliente.cidade}</td>

            <td>
               <button type="button" class="botao verde">Editar</button>
               <button type="button" class="botao vermelho">Excluir</button>
            </td>
    
    `
    document.querySelector('#tabelaCliente>tbody').appendChild(novaLinha)
}

criarLinha()