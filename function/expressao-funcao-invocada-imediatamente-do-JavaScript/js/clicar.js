(function(_) {
    let contar = 1
    _('h1').click(function() {
        _(this).text('jQuery Demo' + ' clicado ' + contar++)
    })
})(jQuery)