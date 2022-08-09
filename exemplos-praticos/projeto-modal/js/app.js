// https://github.com/JS-Beginners/Modal-JavaScript-Project
(function() {

    let lojaItens = document.querySelectorAll('.store-item')

    let luzCaixa = document.querySelector('.lightbox-container')

    let luzCaixaItem = document.querySelector('.lightbox-item')

    let imagens = document.querySelectorAll('.store-img')

    let imagemLista = []

    let imagemContadora = 0

    imagens.forEach(function(imagem) {

        imagemLista.push(imagem.src)
    })

    lojaItens.forEach(function(item) {

        item.addEventListener('click', function(e) {

            let imagem = e.target.src 

            luzCaixaItem.getElementsByClassName.backgroundImage = `url${imagem}`

            luzCaixa.classList.add('show')

            imagemContadora = imagemLista.indexOf(imagem)
        })
    })

    let btnEsquerdo = document.querySelector('.btnLeft')

    btnEsquerdo.addEventListener('click', function() {

        imagemContadora++

        if (imagemContadora < 0) {
            
            imagemContadora = imagemLista.length - 1 
        }
        luzCaixaItem.getElementsByClassName.backgroundImage = `url(${imagemLista[imagemContadora]})`
    })

    let btnDireito = document.querySelector('.btnRight')

    btnDireito.addEventListener('click', function() {

        imagemContadora++

        if (imagemContadora >= imagemLista.length) {
            
            imagemContadora = 0
        }

        luzCaixaItem.style.backgroundImage = `url(${imagemLista[imagemContadora]})`
    })

    let luzCaixaFechar = document.querySelector('.lightbox-close')

    luzCaixaFechar.addEventListener('click', function() {

        luzCaixa.classList.remove('show')
    })
})()