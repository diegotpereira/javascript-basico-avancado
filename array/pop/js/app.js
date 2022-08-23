let pilha = [1, 2, 3, 4, 5]
// pilha.push(5)
console.log(pilha);

console.log(pilha.pop());
console.log(pilha);

console.log(pilha.pop());
console.log(pilha);

console.log(pilha.pop());
console.log(pilha);

console.log(pilha.pop());
console.log(pilha);

console.log(pilha.pop());
console.log(pilha);

// Inverter uma string usando stack
function reverte(str) {

    let pilha = []

    // 
    for(let i = 0; i < str.length; i++) {

        pilha.push(str[i])

    }
    let reverteString = ''

    while(pilha.length > 0) {

        reverteString += pilha.pop()
    }

    return reverteString
}

console.log(reverte('JavaScript Pilha'));


