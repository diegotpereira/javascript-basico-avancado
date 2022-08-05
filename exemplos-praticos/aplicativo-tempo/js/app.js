var entradaValor = document.querySelector('#cidadeEntrada')
var btn = document.querySelector('#add')

var cidade = document.querySelector('#cidadeSaida')
var descricao = document.querySelector('#descricao')
var tempo = document.querySelector('#tempo')
var vento = document.querySelector('#vento')

apiChave = '3045dd712ffe6e702e3245525ac7fa38'
function conversao(valor) {

    return (valor - 273).toFixed(2)
}

btn.addEventListener('click', function() {

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+entradaValor.value+'&appid='+apiChave)
    
    .then(res => res.json())
    .then(data => {
        console.log(data);
        var nomeValor = data['name']
        var desc = data['weather']['0']['description']
        var temperatura = data['main']['temp']
        var ventoVelocidade = data['wind']['speed']

        

        cidade.innerHTML = `cidade: ${nomeValor}`
        descricao.innerHTML = `Condições: ${desc}`
        tempo.innerHTML = `Temperatura: ${conversao(temperatura)} ºC`
        vento.innerHTML = `Velocidade do Vento: ${ventoVelocidade} km/h`
    })
    // .catch(err => alert('Você digitou o nome da cidade errado'))
})