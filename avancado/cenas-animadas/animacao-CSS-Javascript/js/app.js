var x = document.querySelector('#img_txt')

x.addEventListener('mouseover', funcao, false)
x.addEventListener('mouseout', funcao1, false)

function funcao() {
    document.querySelector('#toto').setAttribute('style', 'display:block;')
}
function funcao1() {
    document.querySelector('#toto').setAttribute('style', 'display:none;')
}