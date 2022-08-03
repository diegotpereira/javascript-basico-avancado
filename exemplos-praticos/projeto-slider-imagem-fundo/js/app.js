(function() {
    const imagens = [
        "contBcg-0",
        "contBcg-1",
        "contBcg-2",
        "contBcg-3",
        "contBcg-4"
    ]

    const botoes = document.querySelectorAll('.btn')
    const imageDiv = document.querySelector('.img-container')
    let contar = 0

    botoes.forEach(function(botao) {
        botao.addEventListener('click', function(e) {

            if (botao.classList.contains('btn-left')) {
                
                contar--

                if (contar < 0) {

                    contar = imagens.length -1
                }
                imageDiv.style.backgroundImage = `url('./img/${imagens[contar]}.jpeg')`
            }
            if (botao.classList.contains('btn-right')) {
                contar++

                if (contar > imagens.length -1) {
                    contar = 0
                }
                imageDiv.style.backgroundImage = `url('./img/${imagens[contar]}.jpeg')`
            }
        })
    })
})()