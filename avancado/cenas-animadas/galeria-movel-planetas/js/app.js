https://codepen.io/simoberny/pen/aqjEbz
var elemento = document.getElementById('mobile_control')
var hammertime = new Hammer(elemento)

hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL})
hammertime.on('swipeleft', function(ev) {
    cmover('prev')
})
hammertime.on('swiperight', function(ev) {
    cmover('next')
})

function cmover(dir) {
    var n_planeta = 8, next_id
    var prev, next
    var top = $('#p1' + planeta_id)
    var orbita = $('.planet_container')

    top.removeClass('pt')

    if (planeta_id == 0) {
        prev = $('#p1' + planeta_id)
        next = $('#p1' + (planeta_id)%n_planeta)
    } else {
        prev = $('#p1' + (planeta_id - 1))
        next = $('#p1' + (planeta_id + 1)%n_planeta)
    }
    if (dir == 'prev') {
        next_id = (planeta_id + 1)% n_planeta
    }
}

var foto_planeta = ["https://i.kinja-img.com/gawker-media/image/upload/s--gBFsZfZv--/c_scale,fl_progressive,q_80,w_800/18mozgxwgu2ibjpg.jpg", "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg", "http://cdn.sci-news.com/images/enlarge3/image_4461e-Jupiter.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Jewel_of_the_Solar_System.jpg/1280px-Jewel_of_the_Solar_System.jpg", "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/275px-Neptune_Full.jpg", "http://annesastronomynews.com/wp-content/uploads/2012/02/Mercury-has-a-large-iron-core-which-generates-a-magnetic-field-and-is-heavily-cratered-with-regions-of-smooth-plains.-It-has-no-natural-satellites-and-no-substantial-atmosphere.jpg", "https://www.universetoday.com/wp-content/uploads/2008/10/Venus-e1489179310371.jpg"]
var planeta = ["terra", "marte", "jupiter", "saturno", "urano", "netuno", "mercurio", "venus"]