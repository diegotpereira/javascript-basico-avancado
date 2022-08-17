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

        botao.addEventListener('click', addParaCarrinhoClicado)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', compraCliquei)
}

function compraCliquei() {
    console.log("compraCliquei");
}

function removerCarrinhoItem() {
    console.log("removerCarrinhoItem");
}

function quantidadeAlterada() {
    console.log("quantidadeAlterada");
}

function addParaCarrinhoClicado(){
    console.log("addParaCarrinhoClicado");
}