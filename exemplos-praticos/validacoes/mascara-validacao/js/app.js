// https://www.fabiobmed.com.br/site/excelente-codigo-para-mascara-e-validacao-de-cnpj-cpf-cep-data-e-telefone/

// adiciona mascara para o CNPJ
function MascaraCNPJ(cnpj) {
    if (mascaraInteiro(cnpj) == false) {
        event.returnValue = false;
    }
    return formataCampo(cnpj, '00.000.000/0000-00', event)
}

// valida numero inteiro com teclas digitadas entre numero código 48(valor 0) e 57(valor 9)
function mascaraInteiro() {
    if (event.keyCode < 48 || event.keyCode > 57) {
        event.returnValue = false 

        return false 
    }
    return true
}

// funcção de mascara para o cpf
function MascaraCPF(cpf) {
    if(mascaraInteiro(cpf) == false) {
        event.returnValue = false
    }
    return formataCampo(cpf, '000.000.000-00', event)
}
// Mascara Cep
function MascaraCep(cep) {
    if(mascaraInteiro(cep == false)) {
        event.returnValue = false 
    }
    return formataCampo(cep, '00.000-000', event)
}
// mascara data
function MascaraData(data) {
    if (mascaraInteiro(data) == false) {
        event.returnValue = false 
    }
    return formataCampo(data, '00/00/0000', event)
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

    // exp() retorna ex, onde x é o argumento, e e é a Constante de Euler
    exp = /\.|\-|\//g
    cnpj = cnpj.toString().replace(exp, "")

    // A função eval() computa um código JavaScript representado como uma string.
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
// função validar cpf
function ValidarCPF(ObjCpf) {
    var cpf = ObjCpf.value 
    exp = /\.|\-/g

    cpf = cpf.toString().replace(exp, "")
    var digitoDigitado = eval(cpf.charAt(9) + cpf.charAt(10))
    var soma1 = 0;
    var soma2 = 0;
    var valor = 11;

    for(index = 0; index < 9; index++) {
        soma1 += eval(cpf.charAt(index) * (valor - 1))
        soma2 += eval(cpf.charAt(index) * valor)

        valor--
    }
    soma1 = (((soma1 * 10) % 11) == 10 ? 0: ((soma1 * 10) % 11))
    soma2 = (((soma2 + (2 * soma1)) * 10) % 11)

    var digitadoGerado = (soma1 * 10) + soma2 

    if (digitadoGerado != digitoDigitado) 
        alert('CPF Inválido')
}
// valida CEP
function ValidaCep(cep) {
    exp = /\d{2}\.\d{3}\-\d{3}/

    if (!exp.test(cep.value)) {
        alert('Número de Cep Inválido!')
    }
}

// Valida Telefone 
function ValidaTelefone(tel) {
    exp = /\(\d{2}\)\ \d{4}\-\d{4}/

    if (!exp.test.tel.value) {
        alert('Número de Telefone Inválido')
    }
}

// Valida Data
function ValidaData(data) {
    exp = /\d{2}\/\d{2}\/\d{4}/

    if (!exp.test(data.value)) {
        alert('Data Inválida')
    }
}