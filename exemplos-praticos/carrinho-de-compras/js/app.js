if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', preparado)

} else {
    preparado()
}


function preparado() {

    var removerBotoesItensCarrinho = document.getElementsByClassName('btn-danger')

    for(var i = 0; i < removerBotoesItensCarrinho.length; i++) {
        var botao = removerBotoesItensCarrinho[i]

        botao.addEventListener('click', removerCarrinhoItem)
    }

    var quantidadeEntradas = document.getElementsByClassName('cart-quantity-input')

    for(var i = 0; i < quantidadeEntradas.length; i++) {

        var entrada = quantidadeEntradas[i]

        entrada.addEventListener('click', quantidadeAlterada)

    }

    var addParaCarrinhoBotoes = document.getElementsByClassName('shop-item-button')

    for(var i = 0; i < addParaCarrinhoBotoes.length; i++) {

        var botao = addParaCarrinhoBotoes[i]

        botao.addEventListener('click', addNoCarrinhoClicado)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', compraCliquei)
}

function compraCliquei() {
    console.log("compraCliquei");
    var carrinhoItens = document.getElementsByClassName('cart-items')[0]

    while(carrinhoItens.hasChildNodes()) {
        carrinhoItens.removeChild(carrinhoItens.firstChild)
    }
    atualizarCarrinhoTotal()
}

function removerCarrinhoItem(e) {
    console.log("removerCarrinhoItem");
    var botaoClicado = e.target

    botaoClicado.parentElement.parentElement.remove()

    atualizarCarrinhoTotal()
}

function quantidadeAlterada(e) {
    console.log("quantidadeAlterada");
    var entrada = e.target

    if (isNaN(entrada.value) || entrada.value <= 0) {
        entrada.value = 1
    }
    atualizarCarrinhoTotal()
}

function addNoCarrinhoClicado(e){
    console.log("addNoCarrinhoClicado");
    
    var botao = e.target 
    var lojaItem = botao.parentElement.parentElement
    var titulo = lojaItem.getElementsByClassName('shop-item-title')[0].innerText
    var preco = lojaItem.getElementsByClassName('shop-item-price')[0].innerText
    var imagemSrc = lojaItem.getElementsByClassName('shop-item-image')[0].src 

    addItemNoCarrinho(titulo, preco, imagemSrc)
    atualizarCarrinhoTotal()
}
function addItemNoCarrinho(titulo, preco, imagemSrc) {

    var carrinhoLinha = document.createElement('div')
    carrinhoLinha.classList.add('cart-row')

    var carrinhoItens = document.getElementsByClassName('cart-items')[0]
    var carrinhoItemNomes = carrinhoItens.getElementsByClassName('cart-item-title')

    for(var i = 0; i < carrinhoItemNomes.length; i++) {

        if (carrinhoItemNomes[i].innerText == titulo) {
            
            alert('Este item já foi adicionado ao carrinho')

            return
        }
    }
    var carrinhoLinhaConteudos = `
        <div class="cart-item cart-column">
           <img class="cart-item-image" src="${imagemSrc}" width="100" height="100">
           <span class="cart-item-title">${titulo}</span>
        </div>
        <span class="cart-price cart-column">${preco}</span>
        <div class="cart-quantity cart-column">
           <input class="cart-quantity-input" type="number" value="1">
           <button class="btn btn-danger" type="button"> REMOVER</button>
        </div>
       `
       carrinhoLinha.innerHTML = carrinhoLinhaConteudos
       carrinhoItens.append(carrinhoLinha)
       carrinhoLinha.getElementsByClassName('btn-danger')[0].addEventListener('click', removerCarrinhoItem)
       carrinhoLinha.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantidadeAlterada)
}

function atualizarCarrinhoTotal() {
    var carrinhoItemContainer = document.getElementsByClassName('cart-items')[0]
    var carrinhoLinhas = carrinhoItemContainer.getElementsByClassName('cart-row')
    var total = 0

    for(var i = 0; i < carrinhoLinhas.length; i++) {

        var carrinhoLinha = carrinhoLinhas[i]

        var precoElemento = carrinhoLinha.getElementsByClassName('cart-price')[0]
        var quantidadeElemento = carrinhoLinha.getElementsByClassName('cart-quantity-input')[0]
        var preco = parseFloat(precoElemento.innerText.replace('R$', ''))
        var quantidade = quantidadeElemento.value

        total = total + (preco * quantidade)
    }

    total = Math.round(total * 100) /100

    document.getElementsByClassName('cart-total-price')[0].innerText = 'R$' + total
}