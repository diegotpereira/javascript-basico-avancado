// Elementos
const iniciar_sfx = new Audio('./mp3/start.mp3')

const buracos = document.querySelectorAll('.buraco')


// Modal
const modal = document.querySelector('.modal')

modal.addEventListener('click', e => {
    e.preventDefault()

    const selecionar = e.target.className;

    switch(selecionar) {

        case 'e':

        break;
        
    }
    modal.classList.add('hide')
    iniciar_sfx.currentTime = 0
    iniciar_sfx.play()
})

// Ouvintes de eventos (Listeners)
buracos.forEach(buraco => buraco.addEventListener('mousedown', subir))
buracos.forEach(buraco => buraco.addEventListener('touchstart', subir))


// Funções 
function subir(e) {
    e.preventDefault()
}