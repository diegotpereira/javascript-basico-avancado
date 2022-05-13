var produto = prompt('Nome do produto')
var valor = prompt('Preço')

var lista = compra(produto, valor)

function compra(produto, valor) {
    return "<table border='1' style='width:70%; text-align:center'>" +
        "<tr>" +
        "<th>Produto</th>" +
        "<th>Valor da Compra</th>" +
        "</tr>" +
        "<tr>" +
        "<td>" + produto + "</td>" +
        "<td>" + valor + "</td>" +
        "</tr>" +
        "</table";
}
document.getElementById('tabelaCompras').innerHTML = lista