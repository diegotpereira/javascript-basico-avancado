// receber informações dos usuários
let a = prompt('Digite a primeira variável: ')
let b = prompt('Digite a segunda variável: ')

// criar uma variável temporária
let temp 

// variáveis ​​de troca
temp = a

a = b 

b = temp 

console.log(`O valor de a após a troca: ${a}`);
console.log(`O valor de b após a troca: ${b}`);

// // Atribuição de desestruturação
let c = prompt('Digite a primeira variável: ');
let d = prompt('Digite a segunda variável: ');

// usando atribuição de desestruturação
[c, d] = [d, c];
console.log(`O valor de c após a troca: ${c}`);
console.log(`O valor de d após a troca: ${d}`);


// Usando Operadores Aritméticos
let e = prompt('Digite a primeira variável: ');
let f = prompt('Digite a segunda variável: ');

// operador de adição e subtração
a = a + b 
b = a - b 
a = a - b 


console.log(`O valor de e após a troca: ${e}`);
console.log(`O valor de f após a troca: ${f}`);


// Usando o operador XOR Bitwise
let g = prompt('Digite a primeira variável: ');
let h = prompt('Digite a segunda variável: ');

// operador de adição e subtração
g = g ^ h 
h = g ^ h 
g = g ^ h 


console.log(`O valor de g após a troca: ${g}`);
console.log(`O valor de h após a troca: ${h}`);
