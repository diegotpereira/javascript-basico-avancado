const app = new Vue({
    el: '#app',
    data() {
        return {
            triturar: null,
            caindo: null
        }
    },
    methods: {
        destruir() {
            this.triturar = anime({
                targets: '#original',
                height: 0,
                duration: 10000,
                easing: 'linear'
            })
            this.caindo = anime({
                targets: '#quadro',
                translateY: '101%',
                duration: 10000,
                easing: 'linear'
            })
        },
        arteSelecionada(e) {
            this.triturar.pause()
            this.caindo.pause()

            carregarImagem(
                e.target.files[0],
                canvas => {
                    let url = canvas.toDataURL('image/jpeg')

                    document.getElementById('original').style.backgroundImage = `url(${url})`

                    let elementos = Array.from(document.getElementsByClassName('destruir'))

                    elementos.forEach(elemento => elemento.style.backgroundImage = `url(${url})`)

                    document.getElementById('original').style.height = '100%'
                    document.getElementById('quadro').style.transform = 'translateY(0)'

                    this.destruir()
                },
                {
                    canvas: true,
                    crop: true,
                    maxHeight: 566,
                    maxWidth: 392,
                    orientation: true 
                }
            )
        }
    },
    mounted() {
        this.destruir()
    },
})