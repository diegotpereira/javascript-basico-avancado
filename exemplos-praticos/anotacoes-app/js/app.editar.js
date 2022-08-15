const tituloElemento = document.querySelector('#nota-titulo')
const tempoElemento = document.querySelector('#tempo-carimbo')
const corpoElemento = document.querySelector('#nota-corpo')
const notaId = location.hash.substr(1)
let notas = getSalvarNotas()
let nota = notas.find((nota) => nota.id === notaId)

if (!nota) {
    location.assign('./index.html')
}

// Obtenha as informações da nota existente na página
tituloElemento.textContent = gerarUltimoEditado(nota.updatedAt)
tituloElemento.value = nota.titulo 
corpoElemento.value = nota.corpo

tituloElemento.addEventListener('input', ()=> {

    nota.titulo = tituloElemento.value 
    nota.updatedAt = moment().valueOf()
    tempoElemento.textContent = gerarUltimoEditado(nota.updatedAt)
    salvarNotas(notas)
})

corpoElemento.addEventListener('input', () => {
    nota.corpo = corpoElemento.value
    nota.updatedAt = moment().valueOf()
    tempoElemento.textContent = gerarUltimoEditado(nota.updatedAt)

    salvarNotas(notas)
})

document.querySelector('#remover-nota').addEventListener('click', () => {

    removerNotas(nota.id)

    salvarNotas(notas)

    location.assign('./index.html')
})

window.addEventListener('storage', (e) => {

    if (e.key === 'notas') {
        
        notas = JSON.parse(e.novoValor)
        nota = notas.find((nota) => nota.id === notaId)

        if (!nota) {
            location.assign('./index.html')
        }
        tempoElemento.textContent = `Última edição ${moment(nota.updatedAt).fromNow()}`
        tituloElemento.value = nota.titulo 
        corpoElemento.value = nota.corpo
    }
})