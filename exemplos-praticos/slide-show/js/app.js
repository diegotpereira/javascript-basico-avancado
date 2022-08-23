'use strict'

const imagens = [

    {
        'id': '1', 
        'url': './img/chrono.jpg'
    },
    {
        'id': '2',
        'url': './img/inuyasha.jpg'
    },
    {
        'id': '3',
        'url': './img/tenchi.jpg'
    },
    {
        'id': '4',
        'url': './img/tenjhotenge.jpg'
    },
    {
        'id': '5',
        'url': './img/yuyuhakusho.jpg'
    },
    {
        'id': '6',
        'url': './img/ippo.png'
    }
]

const containerItens = document.querySelector('#container-itens')

const carregarImagem = (imagens , container) => {

    imagens.forEach(imagem => {

        container.innerHTML += `
            <div class='item'>
               <img src='${imagem.url}'
            </div>
        `
    })
}

carregarImagem(imagens, containerItens)

let itens = document.querySelectorAll('.item')

const anterior = () => {
    containerItens.appendChild(itens[0])
    itens = document.querySelectorAll('.item')
}

const proximo = () => {

    const ultimoItem = itens[itens.length - 1]
    containerItens.insertBefore(ultimoItem, itens[0])
}

document.querySelector('#anterior').addEventListener('click', anterior)
document.querySelector('#proximo').addEventListener('click', proximo)