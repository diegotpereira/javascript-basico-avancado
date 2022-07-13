let str = new String('Javascript tipo String')

console.log(str.length);
console.log(str.valueOf());
console.log(str.toString());
console.log(str.toLocaleString());
console.log(str[0]);
console.log(str.charAt(0));

// concatenação de string
let nome = 'Diego'
let nomeCompleto = nome.concat(' ', 'Pereira')
console.log(nome);
console.log(nomeCompleto);


let nome1 = 'Diego'
let nomeCompleto1 = nome1 + ' ' + 'Perira'
console.log(nome1);
console.log(nomeCompleto1);

let str1 = 'String Javascript'
console.log(str.substr(0, 10));
console.log(str.substr(11, 6));

let str2 = 'String Javascript'
console.log(str.substring(4, 10));

let str3 = 'Esta é uma string'
console.log(str.indexOf("é"));
console.log(str.indexOf('é', 3));

// Removendo caracteres de espaço em branco
let limparString = ' ola '
let novaString = limparString.trim()

console.log(novaString);

// Substituindo substrings
let str4 = 'O bebê chuta a bola'

// substituir o por um
let novaString1 = str4.replace(/O/g, "Um")

console.log(novaString1);
