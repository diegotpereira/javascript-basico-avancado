Vue.component('sbticker', {
    template: '#tickerTpl', 
    data: function() {
        return {
            ActiveNoticiasItem: null,
            Noticias: [
            {
                Titulo: "CSS: lista numerada com subpontos",
                Id: 1,
                Url: "https://www.sb-websolutions.de/index.php?action=ViewBlogPost&postID=34&title=css-nummerierte-liste-mit-unterpunkten"
            },
            {
                Titulo: "Visualização: novo design ACP",
                Id: 2,
                Url: "https://www.sb-websolutions.de/index.php?action=ViewBlogPost&postID=33&title=preview-neues-acp-design"
            },
            {
                Titulo: "SBW se torna social",
                Id: 3,
                Url: "https://www.sb-websolutions.de/index.php?action=ViewBlogPost&postID=32&title=sbw-goes-social"
            }
        ]
        }
    },
    mounted: function () {
        this.ActiveNoticiasItem = this.Noticias[0]
        $(".progresso").bind("animationend", this.onTickerEnd)
    },
    methods: {
        onTickerEnd: function () {
            var noticiasItem = this.ProximaNoticias
            this.ActiveNoticiasItem = noticiasItem
            this.redefinirProgressBar()
        },
        redefinirProgressBar: function () {
            var el = $(".progresso")
            var clonarTicker = $(el).clone(true)
            $(el).before(clonarTicker)
            $(el).remove()
        },
        onTickerStatusIconClick: function (noticiasItem) {
            this.ActiveNoticiasItem = noticiasItem
            this.redefinirProgressBar()
        }
    },
    computed: {
        ProximaNoticias: function() {
            var proximoIndice = this.AtualActiveNoticiasIndice + 1
            var total = this.Noticias.length

            if (proximoIndice >= total) {
                proximoIndice = 0
            }
            return this.Noticias[proximoIndice]
        },
        AtualActiveNoticiasIndice: function () {

            for(var index = 0; index < this.Noticias.length; index += 1) {
                if (this.Noticias[index]["Id"] === this.ActiveNoticiasItem.Id) {
                    return index 
                }
            }
        }
    }
})

new Vue({
    el: "#ticker"
})