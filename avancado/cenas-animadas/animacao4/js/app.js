// https://www.sliderrevolution.com/design/cool-javascript-animations/
setInterval(function() {
    $('#image').rotate({ count: 99999, forcedJS: true, duration: 4})
}, 52)

setInterval(function() {
    $('#image2').rotate({ count: 999999, forcedJS: true, endDeg:-360, duration: 4})
}, 52)

$.fn.rotate = function(opcoes) {
    prefixes=['-Webkit-', '-Moz-', '-O-', '-ms-', '']
    opts= $.extend({
        startDeg: false,
        endDe:
    })
}