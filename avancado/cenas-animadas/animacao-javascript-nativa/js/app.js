var caixa = document.querySelector('.caixa')



caixa.animate([
    {
        transform: 'scaleX(1)', offset: 0
    },
    {
        transform: 'scaleX(2)', offset: 0.3
    },
    {
        transform: 'scaleX(0.5)', offset: 0.6
    },
    {
        transform: 'scaleX(1)', offset: 1
    }
], {
    duration: 1000,
    iterations: 999
})
