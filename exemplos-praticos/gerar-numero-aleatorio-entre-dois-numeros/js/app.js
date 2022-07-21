// entrada do usuário
const min = parseInt(prompt('Digite um valor minimo: '))
const max = parseInt(prompt('Digite um valor maximo: '))

// gerar um numero aleatorio
const numero = Math.floor(Math.random() * (max - min + 1)) + min 

// exibir um número aleatório
console.log(`Valor aleatório entre ${min} e ${max} é ${numero}`);