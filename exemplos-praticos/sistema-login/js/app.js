const formEntrar = document.getElementById('entrar-form')
const btnEntrar = document.getElementById('entrar-form-enviar')
const mensagemErro = document.getElementById('entrar-erro-msg')

btnEntrar.addEventListener('click', (e) => {

    e.preventDefault()
    
    const usuarioNome = formEntrar.usuarioNome.value
    const senha = formEntrar.password.value

    if (usuarioNome === 'admin' && senha === '123') {
        
        alert('Você fez login com sucesso.')
        location.reload()

    } else {

        mensagemErro.style.opacity = 1
    }
})