var divs = new Array()
divs[0] = "errNome"
divs[1] = "errSobrenome"
divs[2] = "errEmail"
divs[3] = "errUid"
divs[4] = "errPassword"
divs[5] = "errConfirme"

function validar() {
    var entradas = new Array()
    entradas[0] = document.getElementById('nome').value 
    entradas[1] = document.getElementById('sobreNome').value 
    entradas[2] = document.getElementById('email').value 
    entradas[3] = document.getElementById('uid').value 
    entradas[4] = document.getElementById('password').value 
    entradas[5] = document.getElementById('confirme').value

    var erros = new Array()
    erros[0] = "<span style='color:red'>Por favor digite seu nome!</span>"
    erros[1] = "<span style='color:red'>Por favor digite seu sobrenome!</span>"
    erros[2] = "<span style='color:red'>Por favor digite seu email!</span>"
    erros[3] = "<span style='color:red'>Por favor digite seu id!</span>"
    erros[4] = "<span style='color:red'>Por favor digite seu password!</span>"
    erros[5] = "<span style='color:red'>Por favor confirme sua senha!</span>"

    for(index in entradas) {
        var errMensagem = erros[index]
        var div = divs[index]

        if(entradas[index] == "" ) 
            document.getElementById(div).innerHTML = errMensagem
        else if (index == 2) {
        var atPos = entradas[index].indexOf("@")
        var dotPos = entradas[index].lastIndexOf(".")

        if(atPos < 1 || dotPos < atPos + 2 || dotPos + 2 >= entradas[index].length)
            document.getElementById('errEmail').innerHTML = "<span style='color: red'>Digite um email valido!</span>"
        else 
        document.getElementById(div).innerHTML = "OK!"
    } else if(index == 5) {
        var primeiro = document.getElementById('password').value 
        var segundo = document.getElementById('confirme').value

        if (segundo != primeiro) 
            document.getElementById('errConfirme').innerHTML = "<span style='color: red'>Suas senhas não correspondem!</span>"
        else 
            document.getElementById(div).innerHTML = "OK!"
    }   else 
            document.getElementById(div).innerHTML = "OK!"
    }
}
function finalValidar() {
    var contar = 0

    for(index = 0; index < 6; index++) {
        var div = divs[index]

        if(document.getElementById(div).innerHTML == "OK")
        contar = contar + 1
    }
    if(contar == 6)
    document.getElementById("errFinal").innerHTML = "Todos os dados inseridos estão corretos!"
}