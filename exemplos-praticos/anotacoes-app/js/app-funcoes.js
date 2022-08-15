'use strict'

const getSalvarNotas = () => {

    const notasJson = localStorage.getItem('notas')

    try {
        
        return notasJson ? JSON.parse(notasJson) : []
    } catch (e) {
        
        return []
    }
}

// salvar notas no localStorage
const salvarNotas = (notas) => {

    localStorage.setItem('notas', JSON.stringify(notas))
}

// remover notas por id
const removerNotas = (id) => {

    const indice = notas.findIndex((nota) => nota.id === id)

    if (indice > -1) {
        
        notas.splice(indice, 1)
    }
}

// Gerar a estrutura DOM para uma nota
const gerarNotaDOM = (nota) => {

    const notaElemento = document.createElement('a')
    const textoElemento = document.createElement('p')
    const statusElemento = document.createElement('p')

    // Configurar o texto do título da nota
    if (nota.titulo.length > 0) {
        
        textoElemento.textContent = nota.titulo

    } else {
        textoElemento.textContent = 'Nota sem nome'
    }

    textoElemento.classList.add('lista-item__titulo')
    notaElemento.appendChild(textoElemento)

    // Configurar o link
    notaElemento.setAttribute('href', `./editar.html#${nota.id}`)
    notaElemento.classList.add('lista-item')

    // Configurar a mensagem de status
    statusElemento.textContent = gerarUltimoEditado(nota.updatedAt)
    statusElemento.classList.add('lista-item__subtitulo')
    notaElemento.appendChild(statusElemento)

    return notaElemento
}

const renderizarNotas = (notas, filtros) => {

    const notasElemento = document.querySelector('#notas')
    notas = classificarNotas(notas, filtros.classificarPor)

    const filtradosNotas = notas.filter((nota) => {

        const titulo = nota.titulo.toLowerCase()
        const filtro = filtros.buscarTexto.toLowerCase()

        return titulo.includes(filtro)
    })
    notasElemento.innerHTML = ''

    if (filtradosNotas.length > 0) {
        
        filtradosNotas.forEach((nota) => {

            const p = gerarNotaDOM(nota)

            notasElemento.appendChild(p)
        })
    } else {

        const vaziaMensagem = document.createElement('p')
        vaziaMensagem.textContent = 'Nenhuma nota para mostrar'
        vaziaMensagem.classList.add('vazia-mensagem')
        notasElemento.appendChild(vaziaMensagem)
    }
}
const classificarNotas = (notas, classificarPor) => {

    if (classificarPor === 'porEdicao') {
        
        return notas.sort((a, b) => {

            if (a.updatedAt > b.updatedAt) {
                
                return -1

            } else if (a.updatedAt < b.updatedAt) {
                
                return 1

            } else {

                return  0
            }
        })
    } else if (classificarPor === 'porCriacao') {
        
        return notas.sort((a, b) => {

            if (a.createdAt > b.createdAt) {
                
                return - 1

            } else if (a.createdAt < b.createdAt) {
                
                return 1

            } else {

                return 0
            }
        })
    } else if (classificarPor === 'alfabetico') {
        
        return notas.sort((a, b) => {

            if (a.titulo.toLowerCase() < b.titulo.toLowerCase()) {
                
                return - 1

            } else if (a.titulo.toLowerCase() > b.titulo.toLowerCase()) {
                
                return 1

            }  else {

                return 0
            }
        })
    } else {

        return notas
    }
}
// Gerar a última mensagem editada
const gerarUltimoEditado = (tempoCarimbo) => `Última edição ${moment(tempoCarimbo).fromNow()}`