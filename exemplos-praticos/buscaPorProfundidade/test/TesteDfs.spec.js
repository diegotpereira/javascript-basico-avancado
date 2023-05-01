import {dfs} from '../js/matrizBidimensional.js'

import assert from 'assert';

describe('dfs', function() {

    it('deve retornar a lista', function() {

        const matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];

        let esperado = [1, 4, 7, 8, 5, 2, 3, 6, 9];
        

        const resultado = dfs(matrix)

        assert.deepStrictEqual(resultado, esperado);
    })
})