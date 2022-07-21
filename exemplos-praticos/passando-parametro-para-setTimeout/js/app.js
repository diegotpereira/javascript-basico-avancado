function saudar() {
    console.log('Olá Mundo');
}

// passando parametro
setTimeout(saudar, 2000)

console.log('Esta mensagem é exibida primeiro');

// Passando Parâmetro para Função
function saudacao(x, y) {
    console.log(x);
    console.log(y);
}
// passando paramentro
setTimeout(saudacao, 3000, 'ola', 'mundo')
console.log('Esta mensagem é exibida primeiro');