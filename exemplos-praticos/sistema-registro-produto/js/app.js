const formulario = document.querySelector('#itens-form')
const prodNome = document.querySelector('.entrada-produto')
const prodDesc = document.querySelector('.area-descricao')
const prodQtd = document.querySelector('.entrada-quantidade')
const prodPrec = document.querySelector('.entrada-preco')
const listandoItens = document.querySelector('.colecao')
const btnLimpar = document.querySelector('.limpar-itens')
const filtro = document.querySelector('#filtro')

carregarEventoOuvinte()

function carregarEventoOuvinte() {

    formulario.addEventListener('submit', adicionarProduto)
    listandoItens.addEventListener('click', deletarItem)
    btnLimpar.addEventListener('click', limparItens)
    document.addEventListener('DOMContentLoaded', buscarItens)
    filtro.addEventListener('keyup', filtrarItens)
}

function buscarItens() {

    let itens 

    if (localStorage.getItem('itens')  === null) {
        
        itens = []

    } else {

        itens = JSON.parse(localStorage.getItem('itens'))
    }

    itens.forEach(function(item) {

        // buscar nome
        const div = document.createElement('div')
        div.className = 'colecao-item'
        div.appendChild(document.createTextNode(item))

        // buscar descrição
        const pDescricao = document.createElement('p')
        pDescricao.appendChild(document.createTextNode(prodDesc.value))

        // buscar quantidade
        const pQuantidade = document.createElement('p')
        pQuantidade.appendChild(document.createTextNode(prodQtd.value))

        // buscar preço
        const pPreco = document.createElement('p')
        pPreco.appendChild(document.createTextNode(prodPrec.value))

        //
        const link = document.createElement('a')
        link.className = 'deletar-item'
        link.innerHTML = '<i class="fa fa-remove"></i>'

        div.appendChild(pDescricao)
        pDescricao.appendChild(pQuantidade)
        pQuantidade.appendChild(pPreco)
        pPreco.appendChild(link)

        listandoItens.appendChild(div)
    })
}

function adicionarProduto(e) {

    console.log("Adicionando produtos");

    if (prodNome.value == '') {
        
        alert('Por favor, preencha o campo vazio')
    }

    // campo produto
    const div = document.createElement('div')
    div.className = 'colecao-item'
    div.appendChild(document.createTextNode(prodNome.value))

    // campo descrição
    const pDescricao = document.createElement('p')
    pDescricao.appendChild(document.createTextNode(prodDesc.value))

    // campo quantidade
    const pQuantidade = document.createElement('p')
    pQuantidade.appendChild(document.createTextNode(prodQtd.value))

    // campo preço
    const pPreco = document.createElement('p')
    pPreco.appendChild(document.createTextNode(prodPrec.value))

    // remover
    const link = document.createElement('a')
    link.className = 'deletar-item'
    link.innerHTML = '<i class="fa fa-remove"></i>'


    div.appendChild(pDescricao)
    pDescricao.appendChild(pQuantidade)
    pQuantidade.appendChild(pPreco)
    pPreco.appendChild(link)

    listandoItens.appendChild(div)
    
    armazenarItemLocalstorage(prodNome.value, prodDesc.value)

    // limpar entrada
    prodNome.value = ''
    prodDesc.value = ''
    prodQtd.value = ''
    prodPrec.value = ''

    e.preventDefault();
    

}

function armazenarItemLocalstorage(armazenar) {

    let itens

    if (localStorage.getItem('itens') === null) {
        
        itens = []

    } else {

        itens = JSON.parse(localStorage.getItem('itens'))
    }
    itens.push(armazenar)

    localStorage.setItem('itens', JSON.stringify(itens))
}

function deletarItem(e) {

    if (e.target.parentElement.classList.contains('deletar-item')) {
        
        if (confirm('Tem certeza de que deseja excluir?')) {
            
            e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove()

            // remover do localStorage
            removerItemLocalStorage(e.target.parentElement.parentElement.parentElement.parentElement.parentElement)

        }
    }
}

function removerItemLocalStorage(item) {

    let itens 

    if (localStorage.getItem('itens') === null) {
        
        itens = []

    } else {

        itens = JSON.parse(localStorage.getItem('itens'))
    }

    itens.forEach(function (item) {

        if (item.textContext == item) {
            
            itens.splice(index, 1)
        }
    })
    localStorage.setItem('itens', JSON.stringify(itens))
}

function limparItens() {

    while(listandoItens.firstChild) {

        listandoItens.removeChild(listandoItens.firstChild)
    }
    limparItensLocalStorage()
}

function limparItensLocalStorage() {

    localStorage.clear()
}

function filtrarItens(e) {

    const texto = e.target.value.toLowerCase()

    document.querySelectorAll('.colecao-item').forEach(function(itemColecao) {

        const item = itemColecao.firstChild.textContent

        if (item.toLowerCase().indexOf(texto) != -1) {
            
            itemColecao.style.display = 'block'

        } else {

            itemColecao.style.display = 'none'
        }
    })
}