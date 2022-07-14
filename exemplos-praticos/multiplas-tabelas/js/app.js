var linhas = prompt("Quantas linhas para sua tabela de multiplicação?")
var colunas = prompt("Quantas colunas para sua tabela de multiplicação?")

if (linhas == "" || linhas == null) 
    linhas = 10

if (colunas == "" || colunas == null) 
    colunas = 10

criarTabela(linhas, colunas)

function criarTabela(linhas, colunas) {
    var j = 1
    var saida = "<table border='1' width='500' cellspacing='0' cellpadding='5'>"

    for(index = 1; index <= linhas; index++) {
        saida = saida + "<tr>"

        while (j <= colunas) {
            saida = saida + "<td>" + index * j + "</td>"
            j = j + 1
        }
        saida = saida + "</tr>"
        j = 1
    }
    saida = saida + "</table>"
    document.write(saida)
}