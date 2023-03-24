let form = document.getElementById('form');
let entrada = document.getElementById('entrada')
let mensagem = document.getElementById('msg');
let postagens = document.getElementById('postagens');

// validação do formulário 
form.addEventListener('submit', (e) => {

    e.preventDefault()

    console.log('botão clicado');

    validacaoFormulario()
});

let validacaoFormulario = () => {

    if (entrada.value == "") {
        
        mensagem.innerHTML = 'A postagem não pode ficar em branco';
        console.log("falha");

    } else {
        
        aceitarDados();

        // console.log('sucesso');
        // mensagem.innerHTML = '';
    }
};

let dado = {};
let aceitarDados = () => {

    
    dado["text"] = entrada.value;
    criarPostagem();
    // console.log(dado);
};

// criação de postagens
let criarPostagem = () => {

    postagens.innerHTML += `
        <div>
            <p>${dado.text}</p>
            <span class="opcoes">
                <i onClick="editarPostagem(this)" class="fa fa-edit"></i>
                <i onClick="deletarPostagem(this)" class="fas fa-trash-alt"></i>
            </span>
        </div>
    `;
    entrada.value = "";
};

// deletar postagens
let deletarPostagem = (e) => {

    e.parentElement.parentElement.remove();
}

// editar postagens
let editarPostagem = (e) => {

    entrada.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}