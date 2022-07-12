const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('A primeira Promise foi resolvida');
        resolve(10)
    }, 1 * 1000);
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('A segunda Promise foi resolvida');
        resolve(20)
    }, 2 * 1000);
})
Promise.race([p1, p2])
.then(value => console.log(`Resolvida: ${value}`))
.catch(reason => console.log(`Rejeitada:  ${reason}`))