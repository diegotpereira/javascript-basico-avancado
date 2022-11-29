window.onload = () => {

    let entradas = [];
    let operador = '';

    const exibirResultado = () => {

        const resposta = document.getElementById('resposta');

        let valor1 = entradas[0];
        let valor2 = entradas[1] === undefined ? '' : entradas[1];

        resposta.innerText = `${valor1} ${operador} ${valor2}`;
    };

    const definaOperador = op => {

        if (entradas[1] === undefined) {
            
            operador = op;
        }

        exibirResultado();
    };

    const definirValores = num => {

        if (entradas.length === 0) {
            
            entradas[0] = num;

        } else if (entradas.length === 1 && operador.length === 0) {
            
            entradas[0] += num;

        } else if (entradas.length === 1 && operador.length > 0) {
            
            entradas[1] = num;

        } else if (entradas.length === 2 && operador.length > 0) {
            
            entradas[1] += num;
        }

        exibirResultado();
    };

    const btn0 = document.getElementById('btn0');

    btn0.addEventListener('click', () => {

        definirValores('0');
    });

    const btn1 = document.getElementById('btn1');

    btn1.addEventListener('click', () => {

        definirValores('1');
    });

    const btnSom = document.getElementById('btnSom');

    btnSom.addEventListener('click', () => {

        definaOperador('+');
    });

    const btnSub = document.getElementById('btnSub');

    btnSub.addEventListener('click', () => {

        definaOperador('-');
    });

    const btnMul = document.getElementById('btnMul');

    btnMul.addEventListener('click', () => {

        definaOperador('*');
    });

    const btnDiv = document.getElementById('btnDiv');
      
    btnDiv.addEventListener('click', () => {

        definaOperador('/');
    });

    const btnCal = document.getElementById('btnCal');
    btnCal.addEventListener('click', () => {

        entradas = [''];
        operador = '';

        exibirResultado();
    });

    const btnIgu = document.getElementById('btnIgu');

    btnIgu.addEventListener('click', () => {

        if (entradas.length === 2 && operador.length > 0) {
            
            let a = parseInt(entradas[0], 2);
            let b = parseInt(entradas[1], 2);

            switch(operador) {

                case '+':
                    entradas = [(a + b).toString(2)];
                    break;

                case '-':
                    entradas = [(a - b).toString(2)];
                    break;

                case '*':
                    entradas = [parseInt(a * b, 0).toString(2)];
                    break;

                case '/':
                    entradas = [parseInt(a / b, 0).toString(2)];
                    break;
            }

            operador = '';

            exibirResultado();
        }
    });
};