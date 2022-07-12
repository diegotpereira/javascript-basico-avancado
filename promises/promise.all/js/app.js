const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('A primeira Promise foi resolvida');
        resolve(10)
    }, 1 * 1000);
})
const p2 = new Promise((resolve, reject)=> {
    setTimeout(() => {
        console.log('A segunda Promise foi resolvida');
        resolve(20)
    }, 2 * 1000);
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('A terceira Promise foi resolvida');
        resolve(30)
    }, 3 * 1000);
})
Promise.all([p1, p2, p3]).then((resultados) => {
    const total = resultados.reduce((p, c) => p + c)

    console.log(`Resultados: ${resultados}`);
    console.log(`Total: ${total}`);
})