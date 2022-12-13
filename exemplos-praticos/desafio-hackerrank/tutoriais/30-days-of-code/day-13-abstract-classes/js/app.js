let stringEntrada = ['The Alchemist', 'Paulo Coelho', '248'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

class Livro {

    constructor(titulo, autor) {

        if(this.constructor === Livro) {

            throw new TypeError('Não tente instanciar diretamente uma classe abstrata.');

        } else {

            this.titulo = titulo;
            this.autor = autor;
        }
    }

    exibir() {

        console.log('Implemente o método \'exibir\'!');
    }
}

class MeuLivro {

    constructor(titulo, autor, preco) {

        this.titulo = titulo;
        this.autor = autor;
        this.preco = preco;
    }

    exibir() {

        console.log("Titulo: " + this.titulo + "\n" + "Autor: " + this.autor + "\n" + "Preço: " + this.preco);
    }
}

function principal() {

    let titulo = lerEntrada();
    let autor = lerEntrada();
    let preco = +lerEntrada();

    let livro = new MeuLivro(titulo, autor, preco);
    livro.exibir();

    let livros = new Livro(titulo, autor);
    livros.exibir();

    // console.log(livro);
}

principal();