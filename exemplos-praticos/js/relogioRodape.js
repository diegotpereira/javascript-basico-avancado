function relogio() {
    var hoje = new Date()

    window.status = hoje.toString()

    setTimeout(" relogio()", 1000)
}
relogio()

console.log(hoje);