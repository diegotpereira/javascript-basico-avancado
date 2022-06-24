const elementos = Array.from(document.querySelectorAll('.fill'))

function preencher(item, index) {
    const fundoCor = getComputedStyle(item).backgroundColor,
    fillLayer = document.createElement('div')

    fillLayer.classList.add('fill-layer')

    item.style.backgroundColor = 'transparent'
    item.style.position = 'relative'
    item.style.overflow = 'hidden'

    setTimeout(function() {
        fillLayer.style.backgroundColor = fundoCor
        item.appendChild(fillLayer)
    }, index * 100)
}
elementos.forEach(preencher)