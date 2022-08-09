// https://github.com/JS-Beginners/Modal-JavaScript-Project
(function() {

    let lojaItens = document.querySelectorAll('.store-item')

    let luzCaixa = document.querySelector('.lightbox-container')

    let luzCaixaItem = document.querySelector('.lightbox-item')

    let imagens = document.querySelectorAll('.store-img')

    let imagemLista = []

    let imagemContadora = 0

    imagens.forEach(function(image) {

        imagemLista.push(image.src)
    })

    lojaItens.forEach(function(item) {

        item.addEventListener('click', function(e) {

            let image = e.target.src 

            luzCaixaItem.getElementsByClassName.backgroundImage = `url${image}`

            luzCaixa.classList.add('show')

            imagemContadora = imagemLista.indexOf(image)
        })
    })

    let btnEsquerdo = document.querySelector('.btnLeft')

    btnEsquerdo.addEventListener('click', function() {

        imagemContadora--

        if (imagemContadora < 0) {
            
            imagemContadora = imagemLista.length - 1 
        }
        luzCaixaItem.style.backgroundImage = `url(${imagemLista[imagemContadora]})`
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