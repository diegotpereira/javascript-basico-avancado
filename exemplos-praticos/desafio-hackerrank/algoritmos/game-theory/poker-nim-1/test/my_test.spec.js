
import { pokerNim } from '../js/app.js';

import assert from 'assert';

describe('pokerNim', function() {

    it('deve retornar "Second" se a soma do XOR de todas as pilhas for diferente de 0', function() {

        const resultado = pokerNim(2, [2, 1, 3]);

        assert.equal(resultado, 'Second')
    });
});

describe('pokerNim', function() {

    it('deve retornar "First" se a soma do XOR de todas as pilhas for diferente de 0', function() {

        const resultado = pokerNim(2, [2, 5]);

        assert.equal(resultado, 'First')
    });
});


describe('pokerNim', function() {

    it('deve retornar "First" se a soma do XOR de todas as pilhas for diferente de 0', function() {

        const resultado = pokerNim(2, [1, 2]);

        assert.equal(resultado, 'First')
    });
});

describe('pokerNim', function() {

    it('deve retornar "First" se a soma do XOR de todas as pilhas for diferente de 0', function() {

        const resultado = pokerNim(2, [3, 5]);

        assert.equal(resultado, 'First')
    });
});