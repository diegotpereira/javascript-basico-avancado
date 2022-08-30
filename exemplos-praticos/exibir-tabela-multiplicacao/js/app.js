// Tabela de multiplicação até 10
const numero = parseInt(prompt('Digite um número inteiro: '))

// pegar entrada digitada pelo usuário
for(let i = 1; i <= 10; i++) {

    // multiplicando i com número
    const resultado = i * numero

    // exibir resultado
    console.log(`${numero} * ${i} = ${resultado}`);
}

// Tabela de multiplicação até um intervalo
const numeroIntervalo = parseInt(prompt('Digite um inteiro'))

// pegar intervalo digitado pelo usuário
const intervalo = parseInt(prompt('Digite um intervalo: '))

// criando tabela de multiplicação
for(let i = 1; i <= intervalo; i++) {
    const resultado = i * numeroIntervalo

    console.log(`${numeroIntervalo} * ${i} = ${resultado}`);
}