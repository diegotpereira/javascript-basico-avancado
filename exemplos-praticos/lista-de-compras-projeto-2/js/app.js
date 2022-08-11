// adicionar itens container
const addItensAcao = document.querySelector('.addItens-acao')
const entrada = document.querySelector('.addItens-entrada')
const enviar = document.querySelector('.addItens-enviar')

// exbir itens container
const lista = document.querySelector('.lista-de-compras')
const exibirItensAcao = document.querySelector('.exibirItens-acao')
const limpar = document.querySelector('.exibirItens-limpar')

// ouvinte enviar
enviar.addEventListener('click', adicionarItem)
document.addEventListener('DOMContentLoaded', exibirArmazenamento)
limpar.addEventListener('click', removeItens)
lista.addEventListener('click', removeUnicoItem)

// funções
function adicionarItem(e) {
    e.preventDefault();
    
    let valor = entrada.value 

    if (valor == '') {
        exibirAcao(addItensAcao, 'Por favor adicione item de compra', false)
    } else {
        exibirAcao(addItensAcao, `${valor} adicionado à lista`, true)
        criarItem(valor)
        atualizarArmazenamento(valor)
    }
}

function atualizarArmazenamento(valor) {

    let listaDeCompras 

    listaDeCompras = localStorage.getItem('lista-de-compras') ? JSON.parse(localStorage.getItem('lista-de-compras')) : []
    listaDeCompras.push(valor)

    localStorage.setItem('lista-de-compras', JSON.stringify(listaDeCompras))
    console.log(listaDeCompras);

}
function exibirArmazenamento() {
    
    let produtos = localStorage.getItem('lista-de-compras')

    if (produtos) {
        
        let armazenamentoItens = JSON.parse(localStorage.getItem('lista-de-compras'))

        armazenamentoItens.forEach(function(elemento) {
            criarItem(elemento)
        })
    }
}

function criarItem(valor) {

    let parente = document.createElement('div')
    parente.classList.add('lista-de-compras-item')

    parente.innerHTML = `
    <h4 class="lista-de-compras-item__titulo">${valor}</h4>
    <a href="#" class="lista-de-compras-item__link">
       <i class="far fa-trash-alt"></i>
    </a>`

    lista.appendChild(parente)
}

function exibirAcao(elemento, texto, valor) {

    if (valor === true) {
        
        elemento.classList.add('sucesso')

        elemento.innerText = texto

        entrada.valor = ''


        setTimeout(() => {
            elemento.classList.remove('sucesso')
        }, 3000);
    } else {
        elemento.classList.add('alerta')
        elemento.innerText = texto
        entrada.valor = ''

        setTimeout(() => {
            elemento.classList.remove('alerta')
        }, 3000);
    }
}

function removeItens() {

    localStorage.removeItem('lista-de-compras')

    let itens = document.querySelectorAll('.lista-de-compras')

    if (itens.length > 0) {
        
        exibirAcao(exibirItensAcao, 'Todos Itens deletados', false)

        itens.forEach(function(elemento) {
            lista.removeChild(elemento)
        })
    } else {

        exibirAcao(exibirItensAcao, 'não há mais itens para excluir', false)
    }
}

function removeUnicoItem(e) {

    e.preventDefault()

    let link = e.target.parentElement 

    if (link.classList.contains('lista-de-compras-item__link')) {
        
        let texto = link.previousElementSibling.innerHTML
        let listaDeCompras = e.target.parentElement.parentElement

        lista.removeChild(listaDeCompras)

        exibirAcao(exibirItensAcao, `${texto} removido da lista`, true)

        editarArmazenamento(texto)
    }
}

function editarArmazenamento(item) {

    let listaDeComprasItens = JSON.parse(localStorage.getItem('lista-de-compras'))
    let indice = listaDeComprasItens.indexOf(item)

    listaDeComprasItens.splice(indice, 1)

    localStorage.removeItem('lista-de-compras')

    localStorage.setItem('lista-de-compras', JSON.stringify(listaDeComprasItens))
}