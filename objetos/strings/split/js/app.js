let str = 'Javascript String split()'
let substrings = str.split(' ', 2)

console.log(substrings);

// usando expressão regular
let paragrafo = "Bom dia! Como vai você? Esse é João. João é meu amigo"
let sentencas = paragrafo.split(/[!, ?, .]/)

console.log(sentencas);