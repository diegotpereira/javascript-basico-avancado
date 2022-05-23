var numero = 9.9
var formatado = numero.toFixed(2)

formatado = "R$ " + formatado
formatado =  formatado.replace(".", ",")
console.log(formatado);

// ou
var numero1 = 9.9
var formatado1 = "R$ " + numero1.toFixed(2).replace(".", ",")
console.log(formatado1);

// texto
var texto = "R$ 120,35"
var soNumero = texto.replace("R$ ", "")
soNumero = soNumero.replace(",", ".")
var valor = parseFloat(soNumero)

console.log(valor);