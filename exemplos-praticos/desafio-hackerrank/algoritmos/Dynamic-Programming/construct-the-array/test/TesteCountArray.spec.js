import { countArray } from '../js/app.js';

import assert from 'assert';

describe('countArray', function() {

    it('Existem 3 maneiras de construir a matriz ', function() {

        const resultado = countArray(4, 3, 2);
        const esperado = 3;

        assert.deepStrictEqual(resultado, esperado);
    });
});

describe('countArray', function() {

    it('existem 0 maneiras de construir a matriz ', function() {

        const resultado = countArray(5, 2, 2);
        const esperado = 0;

        assert.deepStrictEqual(resultado, esperado);
    });
});

describe('countArray', function() {

    it('existem 236568308 maneiras de construir a matriz ', function() {

        const resultado = countArray(761, 99, 1);
        const esperado = 236568308;

        assert.deepStrictEqual(resultado, esperado);
    });
});

describe('countArray', function() {

    it('existem 804842436 maneiras de construir a matriz ', function() {

        const resultado = countArray(942, 77, 13);
        const esperado = 804842436;

        assert.deepStrictEqual(resultado, esperado);
    });
});