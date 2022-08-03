const horaPonteiro = document.querySelector('#hora')
const minutoPonteiro = document.querySelector('#minuto')
const segundoPonteiro = document.querySelector('#segundo')

var data = new Date()

console.log(data);

let hor = data.getHours()
let min = data.getMinutes()
let seg = data.getSeconds()

let horPosicao = (hor * 360 / 12 + (min * (360/60) / 12)), minPosicao = ((min * 360/60) + (seg * (360/60)/60)), segPosicao = seg * 360/60

function rodarRelogio() {
    segPosicao += 6
    minPosicao += (6 / 60)
    horPosicao += (3 / 360)

    horaPonteiro.style.transform = "rotate(" + horPosicao + "deg)"
    minutoPonteiro.style.transform = "rotate(" + minPosicao + "deg)"
    segundoPonteiro.style.transform = "rotate(" + segPosicao + "deg)"
}

var intervalo = setInterval(rodarRelogio, 1000)

