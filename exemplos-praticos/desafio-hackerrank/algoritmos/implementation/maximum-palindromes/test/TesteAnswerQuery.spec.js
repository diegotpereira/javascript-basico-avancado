import { answerQuery } from '../js/app.js';
import assert from 'assert';

describe('answerQuery', function() {
    it('O número máximo de palíndromos únicos é 2', function() {
        const resultado = answerQuery(1, 4); 
        const esperado = 2;
        assert.strictEqual(resultado, esperado);
    });
});


describe('answerQuery', function() {
    it('O número máximo de palíndromos únicos é 1', function() {
        const resultado = answerQuery(2, 3); 
        const esperado = 1;
        assert.strictEqual(resultado, esperado);
    });
});

describe('answerQuery', function() {
    it('O número máximo de palíndromos únicos é 2', function() {
        const resultado = answerQuery(1, 4); 
        const esperado = 2;
        assert.strictEqual(resultado, esperado);
    });
});

describe('answerQuery', function() {
    it('O número máximo de palíndromos únicos é 2', function() {
        const resultado = answerQuery(14, 17); 
        const esperado = 2;
        assert.strictEqual(resultado, esperado);
    });
});