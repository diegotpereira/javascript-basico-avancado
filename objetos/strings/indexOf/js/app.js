let str = 'encontrar substring na string'
let index = str.indexOf('str')

console.log(index);

// contar ocorrências de uma substring
let str1 = 'Você não sabe o que não sabe até saber.'
let substr = 'sabe'

let contar = 0 

let index1 = str1.indexOf(substr)

while(index !== -1) {
    contar++
    index = str1.indexOf(substr, index + 1)
}

console.log(contar);