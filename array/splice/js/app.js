let pontuacao = [1, 2, 3, 4, 5]
let deletadaPontuacao = pontuacao.splice(0, 3)

console.log(pontuacao);
console.log(deletadaPontuacao);

// Inserindo elementos usando splice()

let cores = ['vermelho', 'verde', 'blue']
cores.splice(2, 0, 'roxo')

console.log(cores);

cores.splice(1, 0, 'amarelo', 'rosa')

console.log(cores);

// Substituindo elementos usando o splice()
let linguagens = ['C', 'C++', 'Java', 'JavaScript']

linguagens.splice(1, 1, 'Python')

console.log(linguagens);