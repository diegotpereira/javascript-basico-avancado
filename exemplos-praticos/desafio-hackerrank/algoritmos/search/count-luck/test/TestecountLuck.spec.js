import {countLuck} from '../js/app.js';

import assert from 'assert';

describe('countLuck', () => {
  it('deve retornar 1 para a primeira entrada', () => {
    let matrix = ['*.M', '.X.'];
    let k = 1;
    let esperado = 'Impressed';
    let result = countLuck(matrix, k);
    assert.strictEqual(esperado, result);
  });

  it('deve retornar 3 para a segunda entrada', () => {
    let matrix = ['.X.X......X','.X*.X.XXX.X','.XX.X.XM...','......XXXX.'];
    let k = 3;
    let esperado = 'Impressed';
    let result = countLuck(matrix, k);
    assert.strictEqual(esperado, result);
  });

  it('deve retornar 4 para a terceira entrada', () => {
    let matrix = ['.X.X......X', '.X*.X.XXX.X', '.XX.X.XM...', '......XXXX.'];
    let k = 4;
    let esperado = 'Oops!';
    let result = countLuck(matrix, k);
    assert.strictEqual(esperado, result);
  });
});
