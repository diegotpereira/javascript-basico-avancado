function minhaFunc() {
    let idade = Math.floor(Math.random() * 100)
    let maiorIdade = (idade >= 18) ? idade + ' anos: Maior de idade' : idade + ' anos: Menor de idade'

    document.querySelector('#demo').innerHTML = maiorIdade
}