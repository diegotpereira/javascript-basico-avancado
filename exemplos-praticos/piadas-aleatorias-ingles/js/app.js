const URL = 'https://icanhazdadjoke.com/'
const botao = document.querySelector('.btn')
const resultado = document.querySelector('.resultado')

botao.addEventListener('click', () => {
    buscarPiada()
})

const buscarPiada = async () => {

    resultado.textContent = 'Carregando...'

    try {
        const resposta = await fetch(URL, {

            headers: {
                Accept: 'application/json',
                'User-Agent' : ''
            }
        })

        if (!resposta.ok) {
            
            throw new Error('Erro')
        }

        const data = await resposta.json()
        
        resultado.textContent = data.joke
    } catch (error) {
        console.log(error.message);

        resultado.textContent = 'Houve um erro...'
    }
}

buscarPiada()