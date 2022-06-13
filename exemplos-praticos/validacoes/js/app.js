const submit = document.getElementById('submit')
submit.addEventListener('click', validar)

function validar(e) {
    e.preventDefault()

    if( document.meuForm.nome.value == "" ) {
        alert( "Por favor, forneça seu nome!" );
        document.meuForm.nome.focus() ;
        return false;
    }

    validarEmail()
    // if( document.meuForm.email.value == "" ) {
    //     alert( "Por favor, forneça seu email!" );
    //     document.meuForm.email.focus() ;
    //     return false;
    // }
    if( document.meuForm.cep.value == "" || isNaN(document.meuForm.cep.value) || document.meuForm.cep.value.length != 8) {
        alert( "Forneça seu cep no formato #####-###" );
        document.meuForm.cep.focus() ;
        return false;
    }
    if( document.meuForm.pais.value == "-1" ) {
        alert( "Por favor, forneça seu país!" );
        document.meuForm.pais.focus() ;
        return false;
    }
    return true
}
function validarEmail() {
    var emailID = document.meuForm.email.value

    atPos = emailID.indexOf('@')
    dotPos = emailID.lastIndexOf('.')

    if (atPos < 1 || (dotPos - atPos < 2)) {
        alert('Por favor seu endereço de email está incorreto')
        document.meuForm.email.focus()

        return false 
    }
    return (true)
}