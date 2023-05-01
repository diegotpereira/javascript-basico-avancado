import { sillyGame } from '../js/app.js'

import assert from 'assert';

describe('sillyGame', function() {

    it('imprima o nome do vencedor em uma nova linha Bob', function() {

        const n = 1;
        const esperado = 'Bob';
        const resultado = sillyGame(n);
        
        assert.deepStrictEqual(esperado, resultado);
    })

    it('imprima o nome do vencedor em uma nova linha Alice', function() {

        const n = 2;
        const esperado = 'Alice';
        const resultado = sillyGame(n);
            
        assert.deepStrictEqual(esperado, resultado);
    })

    it('imprima o nome do vencedor em uma nova linha Alice', function() {

        const n = 5;
        const esperado = 'Alice';
        const resultado = sillyGame(n);
        
        assert.deepStrictEqual(esperado, resultado);
    })
})