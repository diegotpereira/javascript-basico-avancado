var btn = document.querySelector('button');
var texto = document.querySelector('p');


// btn.addEventListener('click', atualizarBotao);
btn.addEventListener('click', function() {

    atualizarBotao();
})

function atualizarBotao() {

    if (btn.textContent === 'Iniciar Máquina') {
        
        btn.textContent = 'Parar a Máquina!'
        texto.textContent = 'A Máquina Iniciou'

    } else {
        btn.textContent = 'Iniciar Máquina'
        texto.textContent = 'A Máquina está parada.'
    }
}