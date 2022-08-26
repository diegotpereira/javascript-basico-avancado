   


const salvarCliente = () => {

    if (ehCampoValido()) {
        
        console.log('é campo valido');
        const cliente = {

            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade: document.getElementById('cidade').value
            
        }
        
        const index = document.getElementById('nome').dataset.index

        if (index == 'novo') {
            
            criarCliente(cliente)
            atualizarTabela()
            fecharModal()

        } else {
            atualizarTabela()
            fecharModal()
        }
    }
}

const ehCampoValido = () => {

    return document.getElementById('form').reportValidity()
}

const criarCliente = (cliente) => {

    const dbCliente = getLocalStorage()
    dbCliente.push(cliente)
    setLocalStorage(dbCliente)

}

const atualizarCliente = (index, cliente) => {

    const dbCliente = lerCliente()
    dbCliente[index] = cliente

    setLocalStorage(dbCliente)
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('dbCliente')) ?? []

const setLocalStorage = (dbCliente) => localStorage.setItem("dbCliente", JSON.stringify(dbCliente))

const lerCliente = () => getLocalStorage()

const atualizarTabela = () => {

    const dbCliente = lerCliente()

    console.log(dbCliente);

    dbCliente.forEach(criarLinha)
    
}

const criarLinha = (cliente, index) => {

    const novaLinha = document.createElement('tr')

    novaLinha.innerHTML = `

            <td>${cliente.nome}</td>
            <td>${cliente.email}</td>
            <td>${cliente.celular}</td>
            <td>${cliente.cidade}</td>

            <td>
               <button type="button" class="botao verde" id="editar-${index}">Editar</button>
               <button type="button" class="botao vermelho" id="deletar-${index}">Excluir</button>
            </td>
    
    `
    document.querySelector('#tabelaCliente>tbody').appendChild(novaLinha)
}

atualizarTabela()

const editarOuDeletar = (e) => {

    if (e.target.type == 'button') {

        const [acao, index] = e.target.id.split('-')
        
        if (acao == 'editar') {
            
            editarCliente(index)

        } else {
            const cliente  = lerCliente()[index]
            const resposta = confirm(`Tem certeza que deseja escluir o cliente ${cliente.nome}`)
        }
    }
}

const editarCliente = (index) => {

    const cliente = lerCliente()[index]
    cliente.index = index

    console.log(cliente);


    preencherCampos(cliente)

    abrirModal()
}

const preencherCampos = (cliente) => {

    document.getElementById('nome').value = cliente.nome
    document.getElementById('email').value = cliente.email
    document.getElementById('celular').value = cliente.celular
    document.getElementById('cidade').value = cliente.cidade
    document.getElementById('nome').dataset.index = cliente.index
}

const abrirModal = () => document.getElementById('modal').classList.add('active')

const fecharModal = () => {

    limparCampos()
    document.getElementById('modal').classList.remove('active')
}

const limparCampos = () => {

    const campos = document.querySelectorAll('modal-campo')
    campos.forEach(campo => campo.value = "")
    document.getElementById('nome').dataset.index = novo
}

document.getElementById('salvar').addEventListener('click', salvarCliente)
document.querySelector('#tabelaCliente>tbody').addEventListener('click', editarOuDeletar)
document.getElementById('cadastrarCliente').addEventListener('click', abrirModal)
document.getElementById('modalFechar').addEventListener('click', fecharModal)