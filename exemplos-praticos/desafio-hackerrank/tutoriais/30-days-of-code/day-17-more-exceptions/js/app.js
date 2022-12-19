let stringEntrada = ['4', '3, 5', '2, 4', '-1, -2', '-1, 3'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    var minhaCalculadora = new Calculadora();
    var t = parseInt(lerEntrada());

    while (t--> 0) {
        
        var num = (lerEntrada().split(' '));

        try {
            
            var n = parseInt(num[0]);
            var p = parseInt(num[1]);
            var ans = minhaCalculadora.power(n, p);

            console.log(ans); // 243, 16, n and p should be non-negative

        } catch (error) {
            
            console.log(error);
        }
    }
}

principal();

function Calculadora() {

    this.power = function(n, p) {

        if(n < 0 || p < 0)

            throw "n and p should be non-negative";

        var ans = 1;

        for(let  i = 0; i < p; i++) {

            ans *= n;
        }
        return ans;
    }

}