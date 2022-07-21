// Escreva um programa JavaScript para exibir o dia e a hora atuais no formato a seguir.

var hoje = new Date()
var dia = hoje.getDay()

var listaDeDias = ['Domingo', 'Segundo', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

console.log('Hoje é : ' + listaDeDias[dia] + '.');

var hora = hoje.getHours()
var minuto = hoje.getMinutes()
var segundo = hoje.getSeconds()

var prefixar = (hora >= 12) ? ' PM' : ' AM'

hora = (hora >= 12) ? hora - 12 : hora 

if (hora === 0 && prefixar === ' PM') {
    if (minuto === 0 && segundo === 0) {
        hora = 12
        prefixar = 'Meio-dia'
    } else {
        hora = 12
        prefixar = ' Dia'
    }
}
if (hora === 0 && prefixar === ' AM') {
    if (minuto === 0 && segundo === 0) {
        hora = 12
        prefixar = ' Meia-noite'
    } else {
        hora = 12 
        prefixar = ' AM'
    }
}
console.log('Hora atual : ' + hora + prefixar + ' : ' + minuto + ' : ' + segundo);

