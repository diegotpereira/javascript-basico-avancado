var lang = {
    'html': '90%',
    'css': '90%',
    'javascript': '70%',
    'php': '55%',
    'wordpress': '65%',
    'bootstrap': '75%',
    'laravel': '35%'
}
var multiplica = 4

$.each(lang, function(linguagem, porcentagem) {
    var atraso = 700

    setTimeout(function() {
        $('#' + linguagem + '-porcentagem').html(porcentagem)
    }, atraso * multiplica)

    multiplica++
})