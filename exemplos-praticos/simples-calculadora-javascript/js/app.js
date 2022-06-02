document.getElementById('leitor').readOnly = true

let tela = document.getElementById('leitor')
botoes = document.querySelectorAll('button')

let valorTela = ''

for(item of botoes) {
    item.addEventListener('click', (e)=> {
        // console.log("foi pressionado");
        botaoTexto = e.target.innerText 

        if (botaoTexto == 'x') {
            botaoTexto = '*'
            valorTela += botaoTexto
            tela.value = valorTela
        } else if (botaoTexto == 'C') {
            valorTela = ""
            tela.value = valorTela
        } else if (botaoTexto == '=') {
            tela.value = eval(valorTela)
        } else {
            valorTela += botaoTexto
            tela.value = valorTela
        }
    })
}
document.addEventListener('keydown', function(event) {
    // O evento keydown é disparado quando uma tecla é pressionada. 
    // Diferente do evento keypress, o keydown é disparado para teclas 
    // que produzem e que não produzem um caractere.
    console.log(event.which);
    console.log("evento disparado");
    if (event.shiftKey == 57) {
        event.key = '('
    } else if (event.shiftKey == 48) {
        event.key = ')'
    } else if (event.shiftKey == 53) {
        event.key = '%'
    }
    if (event.keyCode == 88) {
        valorTela += '*'
        tela.value = valorTela
    }
    if (event.key <= 9 || event.key == '+' ||
        event.key == '-' || event.key == '*' ||
        event.key == '.' || event.key == '/' ||
        event.key == '%' || event.key == '(' ||
        event.key == ')') {
        valorTela += event.key 
        tela.valor = valorTela
    }
    if (event.keyCode == 13 || event.keyCode == 187) {
        tela.value = eval(valorTela)
    } else if (event.keyCode == 46) {
        valorTela = ''
        tela.value = ''
        tela.value = valorTela
        console.clear()
    } else if (event.keyCode == 8) {
        valorTela = valorTela.slice(0, -1)
        tela.value = valorTela
    } else if (event.keyCode == 67) {
        valorTela = ''
        valor.value = valorTela
        console.clear()
    } else if (event.keyCode == 82) {
        location.reload()
    }
})

window.onerror = function() {
    alert('POR FAVOR, INSIRA A EXPRESSÃO VÁLIDA')
    valorTela = ""
    tela.value = valorTela
    console.clear()
}