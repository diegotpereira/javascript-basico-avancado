// window.onload = function() {
    
// }

function dentro() {
    document.querySelector("#meuInput").style.background = "red"
}
function fora() {
    document.querySelector("#meuInput").style.background = "blue"
}
document.querySelector('#meuInput').addEventListener('focus', dentro)
document.querySelector('#meuInput').addEventListener('blur', fora)