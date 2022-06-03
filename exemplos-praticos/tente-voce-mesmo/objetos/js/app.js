// objetos
function Pessoa(nome, sobrenome, idade, corOlhos) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
    this.corOlhos = corOlhos

    this.mudarNome = mudarNome 

    function mudarNome(nome) {
        this.sobrenome = nome 
    }
}
novaPessoa = new Pessoa("Diego", "Pereira", 40, "castanhos")
novaPessoa.mudarNome("Teixeira")
document.write(novaPessoa.sobrenome);
console.log(Pessoa);

// bloco de código laço 
function minhaFuncao() {
    var x
    var txt = ""
    var pessoa = {
        fnome: "Bill",
        lnome: "Gates",
        idade: 56
    }
    for(x in pessoa) {
        txt = txt + pessoa[x]
    }
    document.getElementById('demo').innerHTML = txt
}