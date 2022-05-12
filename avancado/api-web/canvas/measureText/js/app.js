const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let texto = ctx.measureText('Olá Mundo')
console.log(texto.width);