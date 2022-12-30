let stringEntrada = ['6', '1', '2', '2', '3', '3', '4'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    var T = parseInt(lerEntrada());
    var head = null;
    var minhaLista = new Solucao();

    for(let index = 0; index < T; index += 1) {

        var data = parseInt(lerEntrada());
        head = minhaLista.insert(head, data);
    }

    head = minhaLista.removeDuplicates(head);
    minhaLista.display(head);

}

principal();

function Node(data) {

    this.data = data;
    this.next = null;
}

function Solucao() {

    this.removeDuplicates = function(head) {

        let prev = head;

        while (prev) {
            
            let next = prev.next;

            (next && prev.data == next.data) ? (prev.next = next.next) : (prev = prev.next);
        }

        return head;
    }

    this.insert = function(head, data) {

        var p = new Node(data);

        if(head == null) {

            head = p;

        } else if (head.next == null) {
            
            head.next = p;

        } else {

            var start = head;

            while (start.next != null) {
                
                start = start.next;
            }
            start.next = p;
        }

        return head;
    }
    this.display = function(head) {

        var start = head;

        while (start) {
            
            console.log(start.data + "");
            start = start.next;
        }
    }
}