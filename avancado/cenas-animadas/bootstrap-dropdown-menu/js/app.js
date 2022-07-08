(function ($, window, undefined) {
    var $todosDropdowns = $();

    $.fn.dropdownHover = function(opcoes) {
        if('ontouchstart' in document) return this;

        $todosDropdowns = $todosDropdowns.add(this.parent())

        return this.each(function() {
            var $this = $(this),
            $parent = $this.parent(),
            defaults = {
                delay: 500,
                instantlyCloseOthers: true 
            },
            data = {
                delay: $(this).data('delay'),
                instantlyCloseOthers: $(this).data('close-others')
            },
            showEvent = 'show.bs.dropdown',
            hideEvent = 'hide.bs.dropdown',
            settings = $.extend(true, {}, defaults, opcoes, data),
            timeout;

            $parent.hover(function (event) {
                if (!$parent.hasClass('open') && !$this.is(event.target)) {
                    return true;
                }
                abrirDropdown(event)
            }, function() {
                timeout = window.setTimeout(function() {
                    $parent.removeClass('open')
                    $this.trigger(hideEvent)
                }, settings.delay)
            })

            $this.hover(function (event) {
                if (!$parent.hasClass('open') && !$parent.is(event.target)) {
                    return true 
                }
                abrirDropdown(event)
            })
            $parent.find('.dropdown-submenu').each(function() {
                var $this = $(this)
                var subTimeout

                $this.hover(function() {
                    window.clearTimeout(subTimeout)
                    $this.children('.dropdown-menu').show()
                    $this.siblings().children('.dropdown-menu').hide()
                }, function() {
                    var $submenu = $this.children('dropdown-menu')
                    subTimeout = window.setTimeout(function() {
                        $submenu.hide()
                    },settings.delay)
                })
            })
            function abrirDropdown(event) {
                $todosDropdowns.find(':focus').blur()

                if(settings.instantlyCloseOthers === true)
                $todosDropdowns.removeClass('open')

                window.clearTimeout(timeout)
                $parent.addClass('open')
                $this.trigger(showEvent)
            }
        })
    }
    $(document).ready(function() {
        $('[data-hover="dropdown"]').dropdownHover()
    })
})(jQuery, this)

$(document).ready(function() {
    var itens = {
        home : ($("#tt-home li").length),
        blog : ($("#tt-blog li").length),
        livros : ($("#tt-livros li").length),
        brindes : ($("#tt-brindes li").length),
        midia : ($("#tt-midia li").length),
        noticias : ($("#tt-noticias li").length),
        contato : ($("#tt-contato li").length)
    }
    jQuery.each(itens, function(i, val) {
        $("#tt-" + i).addClass('tt-nav__itemcontar-' + val)
    })
    $('.dropdown').on({
        'hide.bs.dropdown' : function(e) {
            $(this).on('click', function(e) {
                var self = $(this)
                $(this).toggleClass('is-clicked').siblings('.dropdown').removeClass('is-clicked')

                if ('ontouchstart' in document && self.hasClass('open', 'is-clicked')) {
                    e.stopPropagation();
                } else {
                    return this
                }
            })
        }
    })

    $('.dropdown').on({
        'show.bs.dropdown' : function(e){
            $(this).on('click', function(e) {
                if ('ontouchstart' in document) {
                    return this
                } else {
                    e.stopPropagation()
                }
            })
        }
    })
})
