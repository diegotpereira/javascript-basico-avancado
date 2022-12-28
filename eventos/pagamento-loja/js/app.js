let preco = 100;
let aVista = 10;
let totalAVista = 0;
let precoAPrazo = preco / 3;

totalAVista = (preco - (aVista / 100) * preco);

console.log(`Preço : R$${preco},00`);
console.log(`A vista: R$${totalAVista},00`);
console.log(`Ou 3x de: R$${precoAPrazo.toFixed(2)},00`);