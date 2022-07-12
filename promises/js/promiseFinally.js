const p = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) resolve('sim')
    reject('não')
})
p.then(console.log)
.catch(console.error)
.finally(() => console.log('Eu sempre sou executado'))