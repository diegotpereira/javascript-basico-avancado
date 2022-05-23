var idade = 18
var temCarteira = true 

if (idade >= 18) {
    alert('Pode dirigir')
} else {
    alert('Não pode dirigir')
}
if (idade >= 18 && temCarteira) {
    alert('Pode dirigir')
} else {
    alert('Não pode dirigir')
}

temCarteira = false 

if (idade >= 18 || temCarteira) {
    alert('Pode dirigir')
} else {
    alert('Não pode dirigir')
}