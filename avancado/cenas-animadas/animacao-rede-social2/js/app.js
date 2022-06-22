var enEl = document.querySelector('#codepen')
var faEl = document.querySelector('#facebook')
var twEl = document.querySelector('#twitter')
var giEl = document.querySelector('#github')
var liEl = document.querySelector('#linkedin')
var stEl = document.querySelector('#stack')

var opac = 0.1 
var opacSimbol = true
renderizarLoop()

function renderizarLoop() {
    setTimeout(function() {
        if (opacSimbol == true) {
            opac += 0.1

            if (opac >= 1)
               opacSimbol = false 
        }
        if (opacSimbol == false) {
            opac -= 0.1
            if (opac <= 0.3)
               opacSimbol = true 
        }
        enEl.style.opacity = opac
        faEl.style.opacity = opac
        twEl.style.opacity = opac
        giEl.style.opacity = opac 
        liEl.style.opacity = opac 
        stEl.style.opacity = opac 

        window.requestAnimationFrame(renderizarLoop)
    }, 300)
}