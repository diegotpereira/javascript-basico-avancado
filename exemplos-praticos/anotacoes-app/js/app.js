let notas = getSalvarNotas()

const tempoCarimbo = moment().valueOf()

const filtros = {
    buscarTexto: '',
    classificarPor: 'porEdicao'
}

renderizarNotas(notas, filtros)

'use strict'

document.querySelector('#criar-nota').addEventListener('click', () => {

    const id = uuidv4()
    notas.push({
        id: id,
        titulo: '',
        corpo: '',
        createdAt: tempoCarimbo,
        updatedAt: tempoCarimbo
    })
    salvarNotas(notas)
    location.assign(`./editar.html#${id}`)
})

document.querySelector('#buscar-texto').addEventListener('input', (e) => {
    filtros.buscarTexto = e.target.value 

    renderizarNotas(notas, filtros)
})

document.querySelector('#filtrar-por').addEventListener('change', (e) => {
    
})