const itens = document.querySelectorAll('.nav--header-1 > .nav__item')
const rootEl = document.querySelector('.layout')

const cores = ['hsla(14, 97%, 65%, 0.4)']

const estado = {
    navigationItens: {},
    root: rootEl
}

for(let navItemIndex = 0; navItemIndex < itens.length; ++navItemIndex) {
    const estadoItem = {
        cor: cores[navItemIndex % cores.length],
        elemento: itens[navItemIndex],
        id: navItemIndex,
        ehAtivo: false,
        tipo: 'DEFAULT'
    }
    const subNav = itens[navItemIndex].querySelector('.nav')

    if (subNav) {
        estadoItem.childNavigation = subNav
        estadoItem.tipo = 'PARENT'
    }
    estadoItem.onClick = (event) => {
        const atualOnClick = () => {
            if (estado.ativoItem === navItemIndex) {
                
                return 
            }
            if (estado.ativoItem) {
                estado.ativoItem = null 
            }
            if ('PARENT' === estado.navigationItens[navItemIndex].tipo) {
                estado.ativoItem = navItemIndex

                animacaoExibir(estado)
            }
        }
        if (estado.ativoItem) {
            
            return animacaoEsconder(estado, atualOnClick)
        }
        return atualOnClick()
    }

    estado.navigationItens[navItemIndex] = estadoItem
}

// Adiciona este item ao estado.
const animacaoExibir = (estado) => {
    const animacao = anime.timeline()
    console.log(estado.navigationItens[estado.ativoItem]);

    animacao.add({
        backgroundColor: estado.navigationItens[estado.ativoItem].cores,
        begin: () => {
            estado.root.classList.add('nav--active')
        },
        complete: () => {
            estado.navigationItens[estado.ativoItem].elemento.classList.add('nav__item--active')
        },
        duration: 450,
        easing: 'easeOutExpo',
        opacity: 1,
        translateX: [
            {
                delay: 300,
                value: '270px'
            },
        ],
        scaleX: [
            {
                value: 0
            },
            {
                value: 1
            },
        ],
        targets: '.layout__frontdrop',
    })
    .add({
        duration: 70,
        opacity: [0, 1],
        targets: estado.navigationItens[estado.ativoItem].childNavigation,
    })
    .add({
        delay: anime.stagger(70),
        opacity: [0, 1],
        translateY: ['100%', '0'],
        targets: estado.navigationItens[estado.ativoItem].childNavigation.querySelectorAll('.nav__item'),
    })

    return animacao
}

const animacaoEsconder = (estado, complete) => {
    const animacao = anime.timeline({
        complete: complete
    })
    animacao.add({
        duration: 210,
        opacity: [1, 0],
        translateY: [0, '+=50px'],
        targets: estado.navigationItens[estado.ativoItem].childNavigation,
    })
    .add({
        complete: () => {
            estado.root.classList.remove('nav-active')
            estado
            .navigationItens[estado.ativoItem]
            .elemento
            .classList
            .remove('nav__item--active')
        },
        duration: 250,
        easing: 'easeOutCirc',
        scaleX: [
            {
                value: 0
            }
        ],
        translateX: [
            {
                value: 0
            }
        ],
        targets: '.layout__frontdrop'
    })
    return animacao
}

(() => {
    // Pronto para lutar.
    const introAnimacao = anime.timeline({
        complete: () => {
            for(let estadoItemIndex = 0; estadoItemIndex < Object.values(estado.navigationItens).length; ++estadoItemIndex) {
                estado.navigationItens[estadoItemIndex].elemento.addEventListener(
                    'click',
                    estado.navigationItens[estadoItemIndex].onClick
                )
                // Redefinir a transformação para evitar o z-index implícito / posição relativa ao gatilho.
                estado.navigationItens[estadoItemIndex].elemento.style.trasform = ''
            }
        }
    })
    introAnimacao.add({
        duration: 350,
        delay: 1000,
        easing: 'easeOutCirc',
        targets: '.layout__backdrop',
        scaleX: [0, 1],
    })
    .add({
        delay: anime.stagger(75),
        duration: 450,
        easing: 'easeOutCirc',
        opacity: [0, 1],
        translateY: ['100%', '0%'],
        targets: '.nav--header-1 > .nav__item:not(.nav__item--home)',
    })
    .add({
        easing: 'easeOutExpo',
        targets: '.layout__backdrop',
        translateX: [
            {
                delay: 350,
                value: (67) + '%'
            },
        ],
    })
    .add({
        duration: 350,
        easing: 'easeOutExpo',
        targets: '.hero-title',
        opacity: [0, 1],
        translateY: ['50px', '0'],
    })
    .add({
        duration: 350,
        easing: 'easeOutExpo',
        targets: '.hero-text',
        opacity: [0, 1],
        translateY: ['0', '-3rem'],
    }, '-=100')
})()