// JavaScript Document
//adiciona mascara de cnpj
function MascaraCNPJ(cnpj){
    if(mascaraInteiro(cnpj)==false){
            event.returnValue = false;
    }       
    return formataCampo(cnpj, '00.000.000/0000-00', event);
}

//adiciona mascara de cep
function MascaraCep(cep){
            if(mascaraInteiro(cep)==false){
            event.returnValue = false;
    }       
    return formataCampo(cep, '00.000-000', event);
}

//adiciona mascara de data
function MascaraData(data){
    if(mascaraInteiro(data)==false){
            event.returnValue = false;
    }       
    return formataCampo(data, '00/00/0000', event);
}

//adiciona mascara ao telefone
function MascaraTelefone(tel){  
    if(mascaraInteiro(tel)==false){
            event.returnValue = false;
    }       
    return formataCampo(tel, '(00) 0000-0000', event);
}

//adiciona mascara ao CPF
function MascaraCPF(cpf){
    if(mascaraInteiro(cpf)==false){
            event.returnValue = false;
    }       
    return formataCampo(cpf, '000.000.000-00', event);
}

//valida telefone
function ValidaTelefone(tel){
    exp = /\(\d{2}\)\ \d{4}\-\d{4}/
    if(!exp.test(tel.value))
            alert('Numero de Telefone Invalido!');
}

//valida CEP
function ValidaCep(cep){
    exp = /\d{2}\.\d{3}\-\d{3}/
    if(!exp.test(cep.value))
            alert('Numero de Cep Invalido!');               
}

//valida data
function ValidaData(data){
    exp = /\d{2}\/\d{2}\/\d{4}/
    if(!exp.test(data.value))
            alert('Data Invalida!');                        
}

//valida o CPF digitado
// function ValidarCPF(Objcpf){
//     var cpf = Objcpf.value;
//     exp = /\.|\-/g
//     cpf = cpf.toString().replace( exp, "" ); 
//     var digitoDigitado = eval(cpf.charAt(9)+cpf.charAt(10));
//     var soma1=0, soma2=0;
//     var vlr =11;

//     for(i=0;i<9;i++){
//             soma1+=eval(cpf.charAt(i)*(vlr-1));
//             soma2+=eval(cpf.charAt(i)*vlr);
//             vlr--;
//     }       
//     soma1 = (((soma1*10)%11)===10 ? 0:((soma1*10)%11));
//     soma2=(((soma2+(2*soma1))*10)%11);

//     var digitoGerado=(soma1*10)+soma2;
//     if(digitoGerado!=digitoDigitado)        
//             alert('CPF Invalido!');         
// }

// function ValidarCPF(Objcpf) {
//     var cpfUsuario = Objcpf.value;
//     exp = /\.|\-/g;
//     cpfUsuario = cpfUsuario.toString().replace(exp, "");
//     var digitoDigitado = eval(cpfUsuario.charAt(9) + cpfUsuario.charAt(10));
//     var soma1 = 0, soma2 = 0;
//     var vlr = 11;

//     for (i = 1; i <= 9; i++) {
//         soma1 += eval(cpfUsuario.charAt(i) * (vlr - 1));
//         soma2 += eval(cpfUsuario.charAt(i) * vlr);
//         vlr--;
//     }
//     soma1 = soma1 % 11 < 2 ? 0 : 11 - soma1 % 11;
//     soma2 = (((soma2 + (2 * soma1)) * 10) % 11);

//     var digitoGerado = (soma1 * 10) + soma2;
//     if (digitoGerado !== digitoDigitado)
//     {
//         alert('CPF Invalido!');
//         Objcpf.value = '';
//     } else if (digitoGerado === 00000000000)
//     {
//         alert('CPF Invalido!');
//         Objcpf.value = '';
//     }
// }
// function ValidarCPF(cpf) {	
// 	cpf = cpf.replace(/[^\d]+/g,'');	
// 	if(cpf == '') return false;	
// 	// Elimina CPFs invalidos conhecidos	
// 	if (cpf.length != 11 || 
// 		cpf == "00000000000" || 
// 		cpf == "11111111111" || 
// 		cpf == "22222222222" || 
// 		cpf == "33333333333" || 
// 		cpf == "44444444444" || 
// 		cpf == "55555555555" || 
// 		cpf == "66666666666" || 
// 		cpf == "77777777777" || 
// 		cpf == "88888888888" || 
// 		cpf == "99999999999")
// 			return false;		
// 	// Valida 1o digito	
// 	add = 0;	
// 	for (i=0; i < 9; i ++)		
// 		add += parseInt(cpf.charAt(i)) * (10 - i);	
// 		rev = 11 - (add % 11);	
// 		if (rev == 10 || rev == 11)		
// 			rev = 0;	
// 		if (rev != parseInt(cpf.charAt(9)))		
// 			return false;		
// 	// Valida 2o digito	
// 	add = 0;	
// 	for (i = 0; i < 10; i ++)		
// 		add += parseInt(cpf.charAt(i)) * (11 - i);	
// 	rev = 11 - (add % 11);	
// 	if (rev == 10 || rev == 11)	
// 		rev = 0;	
// 	if (rev != parseInt(cpf.charAt(10))) {
//         alert('CPF Invalido!'); 
// 		return false;	
//     } else {
//         alert('CPF Válido!')
//         return true;  
//     } 
// }

// function ValidarCPF(strCPF) {
//     var Soma;
//     var Resto;
//     Soma = 0;
//   if (strCPF == "00000000000") return false;

//   for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
//   Resto = (Soma * 10) % 11;

//     if ((Resto == 10) || (Resto == 11))  Resto = 0;
//     if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

//   Soma = 0;
//     for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
//     Resto = (Soma * 10) % 11;

//     if ((Resto == 10) || (Resto == 11))  Resto = 0;
//     if (Resto != parseInt(strCPF.substring(10, 11) ) ) {
//         alert('CPF Inválido!')
//         return false;
//     } else {
//         alert('CPF Válido')
//         return true;
//     }
// }
// function ValidarCPF(f,campo){

//         pri = eval("document."+f+"."+campo+".value.substring(0,3)");
//     seg = eval("document."+f+"."+campo+".value.substring(4,7)");
//     ter = eval("document."+f+"."+campo+".value.substring(8,11)");
//     qua = eval("document."+f+"."+campo+".value.substring(12,14)");

//     var i;
//     var numero;

//     numero = (pri+seg+ter+qua);

//     s = numero;
//     c = s.substr(0,9);
//     var dv = s.substr(9,2);
//     var d1 = 0;

//     for (i = 0; i < 9; i++){
//        d1 += c.charAt(i)*(10-i);
//     }

//     if (d1 == 0){
//        var result = "falso";
//     }

//     d1 = 11 - (d1 % 11);
//     if (d1 > 9) d1 = 0;

//     if (dv.charAt(0) != d1){
//        var result = "falso";
//     }

//     d1 *= 2;
//     for (i = 0; i < 9; i++){
//        d1 += c.charAt(i)*(11-i);
//     }

//     d1 = 11 - (d1 % 11);
//     if (d1 > 9) d1 = 0;

//     if (dv.charAt(1) != d1){
//        var result = "falso";
//     }


//     if (result == "falso") {
//        alert("CPF inválido!");
//        aux1 = eval("document."+f+"."+campo+".focus");
//        aux2 = eval("document."+f+"."+campo+".value = ''");

//     }
// }

// function ValidarCPF(c){
//         var i;
//         s = c;
//         var c = s.substr(0,9);
//         var dv = s.substr(9,2);
//         var d1 = 0;
//         var v = false;
     
//         for (i = 0; i < 9; i++){
//             d1 += c.charAt(i)*(10-i);
//         }
//         if (d1 == 0){
//             alert("CPF Inválido")
//             v = true;
//             return false;
//         }
//         d1 = 11 - (d1 % 11);
//         if (d1 > 9) d1 = 0;
//         if (dv.charAt(0) != d1){
//             alert("CPF Inválido")
//             v = true;
//             return false;
//         }
     
//         d1 *= 2;
//         for (i = 0; i < 9; i++){
//             d1 += c.charAt(i)*(11-i);
//         }
//         d1 = 11 - (d1 % 11);
//         if (d1 > 9) d1 = 0;
//         if (dv.charAt(1) != d1){
//             alert("CPF Inválido")
//             v = true;
//             return false;
//         }
//         if (!v) {
//             alert(c + "nCPF Válido")
//         }
//     }
// //valida numero inteiro com mascara
// function mascaraInteiro(){
//     if (event.keyCode < 48 || event.keyCode > 57){
//             event.returnValue = false;
//             return false;
//     }
//     return true;
// }

// //valida o CNPJ digitado
// function ValidarCNPJ(ObjCnpj){
//     var cnpj = ObjCnpj.value;
//     var valida = new Array(6,5,4,3,2,9,8,7,6,5,4,3,2);
//     var dig1= new Number;
//     var dig2= new Number;

//     exp = /\.|\-|\//g
//     cnpj = cnpj.toString().replace( exp, "" ); 
//     var digito = new Number(eval(cnpj.charAt(12)+cnpj.charAt(13)));

//     for(i = 0; i<valida.length; i++){
//             dig1 += (i>0? (cnpj.charAt(i-1)*valida[i]):0);  
//             dig2 += cnpj.charAt(i)*valida[i];       
//     }
//     dig1 = (((dig1%11)<2)? 0:(11-(dig1%11)));
//     dig2 = (((dig2%11)<2)? 0:(11-(dig2%11)));

//     if(((dig1*10)+dig2) != digito)  
//             alert('CNPJ Invalido!');

// }

// function ValidarCPF(Objcpf) {
//         var cpfUsuario = Objcpf.value;
//         exp = /\.|\-/g;
//         cpfUsuario = cpfUsuario.toString().replace(exp, "");
//         var digitoDigitado = eval(cpfUsuario.charAt(9) + cpfUsuario.charAt(10));
//         var soma1 = 0, soma2 = 0;
//         var vlr = 11;
    
//         for (i = 1; i <= 9; i++) {
//             soma1 += eval(cpfUsuario.charAt(i) * (vlr - 1));
//             soma2 += eval(cpfUsuario.charAt(i) * vlr);
//             vlr--;
//         }
//         soma1 = (((soma1 * 10) % 11) === 10 ? 0 : ((soma1 * 10) % 11));
//         soma2 = (((soma2 + (2 * soma1)) * 10) % 11);
    
//         var digitoGerado = (soma1 * 10) + soma2;
//         if (digitoGerado !== digitoDigitado)
//         {
//             alert('CPF Invalido!');
//             Objcpf.value = '';
//         } else if (digitoGerado === 00000000000)
//         {
//             alert('CPF Invalido!');
//             Objcpf.value = '';
//         }
//     }

function validarCPF(Objcpf) {
        var cpfUsuario = Objcpf.value;
        exp = /\.|\-/g;
        cpfUsuario = cpfUsuario.toString().replace(exp, "");
        var digitoDigitado = eval(cpfUsuario.charAt(9) + cpfUsuario.charAt(10));
        var soma1 = 0, soma2 = 0;
        var vlr = 11;
    
        for (i = 1; i <= 9; i++) {
            soma1 += eval(cpfUsuario.charAt(i) * (vlr - 1));
            soma2 += eval(cpfUsuario.charAt(i) * vlr);
            vlr--;
        }
        soma1 = (((soma1 * 10) % 11) === 10 ? 0 : ((soma1 * 10) % 11));
        soma2 = (((soma2 + (2 * soma1)) * 10) % 11);
    
        var digitoGerado = (soma1 * 10) + soma2;
        if (digitoGerado !== digitoDigitado)
        {
            alert('CPF Invalido!');
            Objcpf.value = '';
        } else if (digitoGerado === 00000000000)
        {
            alert('CPF Invalido!');
            Objcpf.value = '';
        }
    }
    
//formata de forma generica os campos
function formataCampo(campo, Mascara, evento) { 
    var boleanoMascara; 

    var Digitato = evento.keyCode;
    exp = /\-|\.|\/|\(|\)| /g
    campoSoNumeros = campo.value.toString().replace( exp, "" ); 

    var posicaoCampo = 0;    
    var NovoValorCampo="";
    var TamanhoMascara = campoSoNumeros.length;; 

    if (Digitato != 8) { // backspace 
            for(i=0; i<= TamanhoMascara; i++) { 
                    boleanoMascara  = ((Mascara.charAt(i) == "-") || (Mascara.charAt(i) == ".")
                                                            || (Mascara.charAt(i) == "/")) 
                    boleanoMascara  = boleanoMascara || ((Mascara.charAt(i) == "(") 
                                                            || (Mascara.charAt(i) == ")") || (Mascara.charAt(i) == " ")) 
                    if (boleanoMascara) { 
                            NovoValorCampo += Mascara.charAt(i); 
                              TamanhoMascara++;
                    }else { 
                            NovoValorCampo += campoSoNumeros.charAt(posicaoCampo); 
                            posicaoCampo++; 
                      }              
              }      
            campo.value = NovoValorCampo;
              return true; 
    }else { 
            return true; 
    }
}