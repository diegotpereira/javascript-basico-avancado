// O método jQuery remove() é usado para remover os elementos 
// selecionados do DOM. Ele remove o próprio elemento selecionado, 
// bem como tudo dentro dele (incluindo todos os textos e nós filhos). 
// Este método também remove os dados e os eventos dos elementos selecionados.

$("button").click((function() {
    $("p").remove();
}));