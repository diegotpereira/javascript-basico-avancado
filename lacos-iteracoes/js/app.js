var btn = document.getElementById('btn')

function quantos(selecioneObjeto) {
    var numeroSelecionado = 0

    for (var index = 0; index < selecioneObjeto.options.length; index++) {
        if (selecioneObjeto.options[index].selected) {
            numeroSelecionado++
        }
    }
    return numeroSelecionado
}

btn.addEventListener('click', function() {
    alert('Total de opções selecionadas: ' + quantos(document.selecioneForm.tipoMusica))
})