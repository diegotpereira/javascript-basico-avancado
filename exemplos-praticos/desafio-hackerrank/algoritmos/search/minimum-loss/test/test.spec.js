import { minimumLoss } from '../js/app.js';

import assert from 'assert';

describe('minimumLoss', function() {

    it('deve retornar "2" se a mínima perda possível', function() {

        const resultado = minimumLoss(3, [5, 10, 3]);

        assert.equal(resultado, 2)
    });
});


describe('minimumLoss', function() {

    it('deve retornar "2" se a mínima perda possível', function() {

        const resultado = minimumLoss(5, [20, 7, 8, 2, 5]);

        assert.equal(resultado, 2)
    });
});