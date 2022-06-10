// https://www.fabiobmed.com.br/site/excelente-codigo-para-mascara-e-validacao-de-cnpj-cpf-cep-data-e-telefone/

// adiciona mascara para o CNPJ
function MascaraCNPJ(cnpj) {
    if (mascaraInteiro(cnpj) == false) {
        event.returnValue = false;
    }
    return formataCampo(cnpj, '00.000.000/0000-00', event)
}

// valida numero inteiro com mascara
function mascaraInteiro() {
    if (event.keyCode < 48 || event.keyCode > 57) {
        event.returnValue = false 

        return false 
    }
    return true
}

// formata de forma generica os campos
function formataCampo(campo, Mascara, evento) {
    var bolMascara 
    var Digitado = evento.keyCode

    exp = /\-|\.|\/|\(|\)| /g

    campoSoNumeros = campo.value.toString().replace(exp, "")

    var posicaoCampo = 0
    var novoValorCampo = ""
    var TamanhoMascara = campoSoNumeros.length

    if (Digitado != 8) {
        for(index = 0; index <= TamanhoMascara; index++) {
            bolMascara = ((Mascara.charAt(index) == "-") || 
                          (Mascara.charAt(index) == ".") ||
                          (Mascara.charAt(index) == "/"))
            bolMascara = bolMascara || ((Mascara.charAt(index) == "(") ||
                                        (Mascara.charAt(index) == ")") ||
                                        (Mascara.charAt(index) == " "))

            if (bolMascara) {
                novoValorCampo += Mascara.charAt(index)
                TamanhoMascara++ 
            } else {
                novoValorCampo += campoSoNumeros.charAt(posicaoCampo)
                posicaoCampo++ 
            }
        }
        campo.value = novoValorCampo

        return true 
    } else {
        return true 
    }
}

// funções de validação
function ValidarCNPJ(ObjCnpj) {
    var cnpj = ObjCnpj.value 
    var valida = new Array(6,5,4,3,2,9,8,7,6,5,4,3,2)
    var dig1 = new Number
    var dig2 = new Number
    exp = /\.|\-|\//g
    cnpj = cnpj.toString().replace(exp, "")
    var digito = new Number(eval(cnpj.charAt(12) + cnpj.charAt(13)))

    for(index = 0; index < valida.length; index++) {
        dig1 += (index > 0 ? (cnpj.charAt(index - 1) * valida[index]) : 0)
        dig2 += cnpj.charAt(index) * valida[index]
    }
    dig1 = (((dig1 % 11) < 2) ? 0: (11-(dig1 % 11)))
    dig2 = (((dig2 % 11) < 2) ? 0: (11-(dig2 % 11)))

    if (((dig1 * 10) + dig2) != digito) 
    alert('CNPJ Invalido')
}