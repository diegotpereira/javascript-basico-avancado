let titulo = 'Bitcoin'

console.log(titulo.indexOf('B'));
console.log(titulo.indexOf('i'));
console.log(titulo.indexOf('t'));

console.log(titulo.slice(0, 3));
console.log(titulo.slice(1, 3));
console.log(titulo.slice(3));
console.log(titulo.slice(3, 5));

let email = 'teste@gmail.com'
let localPorta = email.slice(0, email.indexOf('@'))

console.log(localPorta);