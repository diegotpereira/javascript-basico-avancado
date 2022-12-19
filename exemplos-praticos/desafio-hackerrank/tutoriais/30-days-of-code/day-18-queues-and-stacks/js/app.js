let stringEntrada = ['racecar'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    // leia a string s
    var s = lerEntrada();
    var len = s.length;

    // criar o objeto de classe Solution p
    var obj =  new Solucao();

    for(let i = 0; i < len; i++) {

        obj.pushCharacter(s.charAt(i));
        obj.enqueueCharacter(s.charAt(i));
    }

    var ehPalindrome = true;

    
    /*
    pop o personagem superior da pilha
    desenfileirar o primeiro caractere da fila
    compare os dois personagens */
    for(var i = 0; i < len / 2; i++) {

        if(obj.popCharacter() != obj.dequeueCharacter()) {
            ehPalindrome = false;
            break;
        }
    }

    if(ehPalindrome) {

        console.log("The word, "+ s +", is a palindrome."); // saída The word, racecar, is a palindrome.

    } else {

        console.log("The word, "+s+", is not a palindrome.");
    }
}

principal();

function Solucao() {

    this.stack = [];
    this.queue = [];

    Solucao.prototype.pushCharacter = this.stack.push;
    Solucao.prototype.popCharacter = this.stack.pop;
    Solucao.prototype.enqueueCharacter = this.queue.push;
    Solucao.prototype.dequeueCharacter = this.queue.shift;
}