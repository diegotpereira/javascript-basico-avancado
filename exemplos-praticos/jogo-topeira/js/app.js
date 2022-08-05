// Elementos
const iniciar_sfx = new Audio('./mp3/start.mp3')


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