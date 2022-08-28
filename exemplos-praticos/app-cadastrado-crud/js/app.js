'use strict'

const lerCliente = () => getLocalStorage()   


const salvarCliente = () => {

    debugger


    if (ehCampoValido()) {
        
        console.log('é campo valido');
        const cliente = {

            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade: document.getElementById('cidade').value
            
        }
        
        const index = document.getElementById('nome').dataset.indice
        console.log("O indice " + index);

        if (index   == 'novo') {
            criarCliente(cliente)
            atualizarTabela()
            fecharModal()

        } else {
            atualizarCliente(index, cliente)
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

const setLocalStorage = (dbCliente) => localStorage.setItem('dbCliente', JSON.stringify(dbCliente))



const atualizarTabela = () => {

    const dbCliente = lerCliente()
    limparTabela()
    dbCliente.forEach(criarLinha)
    
}

const limparTabela = () => {
    const linhas = document.querySelectorAll('#tabelaCliente>tbody tr')
    linhas.forEach(linha => linha.parentNode.removeChild(linha))
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



const editarOuDeletar = (e) => {

    if (e.target.type == 'button') {

        const [acao, index] = e.target.id.split('-')
        
        if (acao == 'editar') {
            
            editarCliente(index)

        } else {
            const cliente  = lerCliente()[index]
            const resposta = confirm(`Tem certeza que deseja escluir o cliente ${cliente.nome}`)

            if (resposta) {
                deletarCliente(index)
                atualizarTabela()
            }
        }
    }
}

atualizarTabela()

const editarCliente = (index) => {

    const cliente = lerCliente()[index]
    cliente.index = index
    preencherCampos(cliente)
    abrirModal()
}

const preencherCampos = (cliente) => {

    document.getElementById('nome').value = cliente.nome
    document.getElementById('email').value = cliente.email
    document.getElementById('celular').value = cliente.celular
    document.getElementById('cidade').value = cliente.cidade
    document.getElementById('nome').dataset.indice = cliente.index 
}

const abrirModal = () => document.getElementById('modal').classList.add('active')

const fecharModal = () => {

    limparCampos()
    document.getElementById('modal').classList.remove('active')
}

const limparCampos = () => {

    const campos = document.querySelectorAll('modal-campo')
    campos.forEach(campo => campo.value = "")
    document.getElementById('nome').dataset.index = 'novo'
}

const deletarCliente = (index) => {

    const dbCliente = lerCliente()

    // splice() altera o conteúdo de uma lista, adicionando 
    // novos elementos enquanto remove elementos antigos.
    dbCliente.splice(index, 1)
    setLocalStorage(dbCliente)
}

document.getElementById('salvar').addEventListener('click', salvarCliente)
document.querySelector('#tabelaCliente>tbody').addEventListener('click', editarOuDeletar)
document.getElementById('cadastrarCliente').addEventListener('click', abrirModal)
document.getElementById('modalFechar').addEventListener('click', fecharModal)
document.getElementById('cancelar').addEventListener('click', fecharModal)