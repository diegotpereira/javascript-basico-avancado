
import { knightlOnAChessboard } from '../js/app.js'

import assert from 'assert';

describe('knightlOnAChessboard', function() {
  it('deve retornar a matriz correta para n = ', function() {
    
    const resultado = knightlOnAChessboard(5);

    const esperado = [
      [4, 4, 2, 8],
      [4, 2, 4, 4],
      [2, 4, -1, -1],
      [8, 4, -1, 1]
    ];

    assert.deepStrictEqual(resultado, esperado);
  });
});


describe('knightlOnAChessboard', function() {
  it('deve retornar a matriz correta para n = 6', function() {
    
    const resultado = knightlOnAChessboard(6);

    const esperado = [
      [5, 4, 3, 2, 5],
      [4, -1, 2, -1, -1],
      [3, 2, -1, -1, -1],
      [2, -1, -1, -1, -1],
      [5, -1, -1, -1, 1]
    ];

    assert.deepStrictEqual(resultado, esperado);
  });
});


describe('knightlOnAChessboard', function() {
  it('deve retornar a matriz correta para n = 7', function() {
    
    const resultado = knightlOnAChessboard(7);

    const esperado = [
      [6, 4, 4, 8, 2, 12],
      [4, 3, 4, 2, 16, 3],
      [4, 4, 2, 4, 4, 4],
      [8, 2, 4, -1, -1, -1],
      [2, 16, 4, -1, -1, -1],
      [12, 3, 4, -1, -1, 1]
    ];

    assert.deepStrictEqual(resultado, esperado);
  });
});