var Carrasco = (function() {

    'use strict'

    function Carrasco(elementoId) {

        this.elementoId = elementoId

        this.palavras = [

            'PROGRAMADOR', 'JAVASCRIPT', 'CRIATIVO', 'PIRULITO', 'CULTURA', 'GILETE', 'CHAVE', 'ESCREVER'
        ]
    };

    Carrasco.prototype.redefinir = function() {

        // variaveis
        this.PARADO = false 
        this.ERROS = 0
        this.TENTATIVAS = []
        this.PALAVRA = this.palavras[Math.floor(Math.random() * this.palavras.length)]

        this.ocultarElementoPorClasse('forca')
        this.mostreElementoPorIdComConteudo(this.elementoId + "_tentativaCaixa", null)
        this.mostreElementoPorIdComConteudo(this.elementoId + "_palavra", this.getAdivinhePalavra())
    };

    Carrasco.prototype.tentativa = function(letras) {
        letras = letras.charAt(0).toUpperCase()

        // Verifique se o jogo está parado ou se o usuário já adivinhou nessa letra
        if (this.PARADO || this.TENTATIVAS.indexOf(letras) > -1) {
            
            // Então não vamos fazer nada
            return
        }
        // Adicione a letra ao nosso array TENTATIVAS
        this.TENTATIVAS.push(letras)

        // Atualize a dica de palavra e a lista de letras adivinhadas para o usuário
        this.mostreElementoPorIdComConteudo(this.elementoId + "_palavra", this.getAdivinhePalavra())
        this.mostreElementoPorIdComConteudo(this.elementoId + "_tentativas", this.TENTATIVAS.join(''))

        // Verifique se nossa palavra não contém a letra adivinhada
        if (this.PALAVRA.indexOf(letras) < 0) {
            
            // Suposição incorreta, aumenta nossos erros em um
            this.ERROS++

            // Mostrar a próxima parte do personagem carrasco
            this.mostreElementoPorIdComConteudo(this.elementoId + "_" + this.ERROS, null)

            // Verifique se acabou o jogo
            if (this.ERROS === 6) {
                
                this.mostreElementoPorIdComConteudo(this.elementoId + "_final", "FIm de Jogo!<br/>A palavra foi: " + this.PALAVRA)
                this.PARADO = true
            }
        } else if (this.PALAVRA.indexOf(this.getAdivinhePalavra()) !== -1) {
            
            // Condição de vitória
            this.mostreElementoPorIdComConteudo(this.elementoId + "_final", "Você conseguiu!<br/>A palavra foi: " + this.PALAVRA)
            this.PARADO = true 
        }
    };
    Carrasco.prototype.mostreElementoPorIdComConteudo = function(elementoId, content) {
        if (content !== null) {
            
            document.getElementById(elementoId).innerHTML = content
        }
        document.getElementById(elementoId).style.opacity = 1
    };

    Carrasco.prototype.ocultarElementoPorClasse = function(elementoClasse) {
        
        var elementos = document.getElementsByClassName(elementoClasse), i

        for(i = 0; i < elementos.length; i++) {
            elementos[i].style.opacity = 0
        }
    };
    Carrasco.prototype.getAdivinhePalavra = function() {

        var resultado = "", i;

        for(i = 0; i < this.PALAVRA.length; i++) {

            resultado += (this.TENTATIVAS.indexOf(this.PALAVRA[i]) > -1) ?
            this.PALAVRA[i] : "_"
        }
        return resultado
    };
    return new Carrasco('carrasco')
}())