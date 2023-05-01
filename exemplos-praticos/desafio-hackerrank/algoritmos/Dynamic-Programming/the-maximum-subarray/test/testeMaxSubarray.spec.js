import { maxSubarray } from '../js/app.js'

import assert from 'assert';

describe('maxSubarray', function() {

    it('deve retornar as somas máximas de subarray e subsequência', function() {

        const arr = [1, 2, 3, 4]
        
        // const experado = {resultado: 10, subarr_soma: 10};
        const experado = [10, 10]

        const resultado = maxSubarray(arr);

        assert.deepStrictEqual(resultado, experado); 
    })

    it('deve retornar as somas máximas de subarray e subsequência [10,   11]', function() {

        const arr = [2, -1, 2, 3, 4, -5]

        // const experado = {resultado: 10, subarr_soma: 11};
        const experado = [10,   11];

        const resultado = maxSubarray(arr);

        assert.deepStrictEqual(resultado, experado); 
    })
})


describe('maxSubarray', function() {

    it('deve retornar as somas máximas de subarray e subsequência [-1, -1]', function() {

        const arr = [-2, -3, -1, -4, -6]
        
        // const experado = {resultado: 10, subarr_soma: 10};
        const experado = [-1, -1]

        const resultado = maxSubarray(arr);

        assert.deepStrictEqual(resultado, experado); 
    })
})