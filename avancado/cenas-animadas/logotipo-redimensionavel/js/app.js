console.clear()

const elRedimencionar = document.querySelector('#redimensionar')
const elChar = document.querySelector('.i')
const elRed = document.querySelector('.redi')
const elMencionar = document.querySelector('.mencionar')

const getReacao = (el) => {
    return el.getBoundingClientRect()
}

function virar(facaAlgumaCoisa, primeiroEls, getUltimoEls = () => primeiroEls) {
    const primeiraReacoes = primeiroEls.map(getReacao)

    requestAnimationFrame(() => {
        facaAlgumaCoisa()
        // ultimo
        let ultimoEls = getUltimoEls
        ultimoEls.forEach((ultimoEl, i) => {
            const primeiraReacao = primeiraReacoes[i]
            const ultimaReacao = getReacao(ultimoEl)

            // Inverter
            const dx = ultimaReacao.x - primeiraReacao.x 
            const dy = ultimaReacao.y - primeiraReacao.y 
            const dw = ultimaReacao.width / primeiraReacao.width
            const dh = ultimaReacao.height / primeiraReacao.height

            ultimoEl.dataset.flipping = true 

            ultimoEl.style.setProperty("--dx", dx)
            ultimoEl.style.setProperty("--dy", dy)
            ultimoEl.style.setProperty("--dw", dw)
            ultimoEl.style.setProperty("--dh", dh)
            ultimoEl.style.setProperty("--w", ultimaReacao.width)

        })
        requestAnimationFrame(() => {
            ultimoEls.forEach(ultimoEl => {
                delete ultimoEl.dataset.flipping
            })
        })
    })
}

const widths = [5, .25, 2.5, 4, 1];
let widthIndex = 0;

function setWidth(s) {
    virar(() => {
    elChar.style.width = s + 'em';
  }, [elRed, elChar, elMencionar]);
}

elRedimencionar.addEventListener('click', e => {
  widthIndex = (widthIndex + 1) % widths.length;
  
  setWidth(widths[widthIndex]);
});

// set starting width
setWidth(widths[0]);

setTimeout(()=>{
    elRedimencionar.click();
},1000);