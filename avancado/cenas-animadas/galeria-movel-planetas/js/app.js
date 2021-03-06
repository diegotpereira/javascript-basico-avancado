// https://codepen.io/simoberny/pen/aqjEbz
var elemento = document.getElementById('mobile_control')
var hammertime = new Hammer(elemento)

var swiped_top = false

hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL})
hammertime.on('swipeleft', function(ev) {
    cmover('prev')
})
hammertime.on('swiperight', function(ev) {
    cmover('next')
})
hammertime.on('swipeup', function(ev) {
    swiped_top = true
    abrirModal()
})
hammertime.on('swipedown', function(ev) {
    fecharModal()
})

$('.action').on('click', function() {
    cmover($(this).attr('id'))
})

$('.title').each(function() {
    $(this).html('Earth'.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"))
})

anime.timeline({})
.add({
    targets: '.title',
    opacity: [0,1],
    easing: 'easeOutExpo',
    duration: 100
})
.add({
    targets: '.title .letter',
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0,1],
    easing: 'easeOutExpo',
    duration: 1200,
    delay: function(el, i) {
        return 500 + 30 * i
    }
})
var angulo = 0
var planeta_id = 0

function cmover(dir) {
    var n_planeta = 8, next_id
    var prev, next
    var top = $('#p1' + planeta_id)
    var orbit = $('.planet_container')

    top.removeClass('pt')

    if (planeta_id == 0) {
        prev = $('#p1' + (n_planeta-1))
        next = $('#p1' + (planeta_id + 1)%n_planeta)
    } else {
        prev = $('#p1' + (planeta_id - 1))
        next = $('#p1' + (planeta_id + 1)%n_planeta)
    }
    if (dir == 'prev') {
        next_id = (planeta_id + 1)% n_planeta
        angulo -= 45 
        next.addClass('pt')
        planeta_id++
    } else {
        if (planeta_id == 0) {
            next_id = 7 
            planeta_id = 7 
        } else {
            next_id = planeta_id-1
            --planeta_id
        }
        angulo += 45 
        prev.addClass('pt')
    }

    $('.active').removeClass('active')
    $('#p' + planeta_id).addClass('active')
    $('.info_back h1').text(planeta[next_id])

    if (swiped_top) {
        $('.info_back h1').each(function() {
            $(this).html(planeta[planeta_id].replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
        })
        anime.timeline({})
        .add({
            targets: '.info_back h1',
            opacity: [0,1],
            easing: 'easeOutExpo',
            duration: 100
        })
        .add({
            targets: '.info_back h1 .letter',
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: function(el, i) {
                return 500 + 30 * i
            }
        })
    }
    $('.title').each(function() {
        $(this).html(planeta[next_id].replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    })
    anime.timeline({})
    .add({
        targets: '.title .letter',
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0,1],
        easing: 'easeOutExpo',
        duration: 1200,
        delay: function(el, i) {
            return 500 + 30 * i
        }
    })

    $('.pn').each(function(){
        $(this).html(planeta[next_id].replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });

    anime.timeline({})
    .add({
        targets: '.pn .letter',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: 'easeOutExpo',
        duration: 1200,
        delay: function(el, i) {
            return 500 + 30 * i
        }  
    })

    var ani_dir = (dir == 'next') ? '0%' : '100%'

    anime.timeline({})
    .add({
        targets: '.planeta_foto',
        backgroundPosition: ['50% -75%', ani_dir + ' -85%'],
        opacity: {
            value: [1,0]
        },
        duration: 700,
        easing: 'easeOutQuad',
        complete: function(anim) {
            $('.planeta_foto').css('background-image', 'url(' + photo_planet[next_id] + ')')
        }
    })
    .add({
        targets: '.planeta_foto',
        backgroundPosition: ['0% -85%', '50% -75%'],
        opacity: [0.2, 1],
        duration: 500,
        easing: 'easeOutQuad'
    })
    $('.info_back').css('background-image', 'url(' + photo_planet[next_id] + ')')
    orbit.css('transform', 'rotateZ(' + angulo + 'deg)')
}
$('#open_menu').on('click', function() {
    $('.menu').show()
})
$('.close').on('click', function() {
    $('.menu').hide()
})
$('.more').on('click', function() {
    swiped_top = true 
    abrirModal()
})
function abrirModal() {
    anime.timeline({})
    .add({
        targets: '.carousel',
        translateY: ['100%', 0],
        duration: 600,
        easing: 'easeOutQuad'
    })

    $('.info_back h1').each(function() {
        $(this).html(planeta[planeta_id].replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"))
    })

    anime.timeline({})
    .add({
        targets: '.info_back h1',
        opacity: [0,1],
        easing: 'easeOutExpo',
        duration: 100
    })
    .add({
        targets: '.info_back h1 .letter',
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0,1],
        easing: 'easeOutExpo',
        duration: 1200,
        delay: function(el, i) {
            return 500 + 30  * i
        }
    })
}

function fecharModal() {
    if (swiped_top) {
        anime.timeline({})
        .add({
            targets: '.carousel',
            translateY: [0, '100%'],
            duration: 600,
            easing: 'easeOutQuad'
        })
        swiped_top = false
    }
}
var photo_planet = ["https://i.kinja-img.com/gawker-media/image/upload/s--gBFsZfZv--/c_scale,fl_progressive,q_80,w_800/18mozgxwgu2ibjpg.jpg", "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg", "http://cdn.sci-news.com/images/enlarge3/image_4461e-Jupiter.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Jewel_of_the_Solar_System.jpg/1280px-Jewel_of_the_Solar_System.jpg", "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/275px-Neptune_Full.jpg", "http://annesastronomynews.com/wp-content/uploads/2012/02/Mercury-has-a-large-iron-core-which-generates-a-magnetic-field-and-is-heavily-cratered-with-regions-of-smooth-plains.-It-has-no-natural-satellites-and-no-substantial-atmosphere.jpg", "https://www.universetoday.com/wp-content/uploads/2008/10/Venus-e1489179310371.jpg"]
var planeta = ["terra", "marte", "jupiter", "saturno", "urano", "netuno", "mercurio", "venus"]