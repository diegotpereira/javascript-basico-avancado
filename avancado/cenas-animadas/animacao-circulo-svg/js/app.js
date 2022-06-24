function jonu(x) {
    document.getElementById('hel').setAttribute('r', x)

    if (x == 0 || x < 40) {
        x = x + 1
        var a  = setTimeout('jonu(' + x + ')', 15)
    }
}
function jon(l) {
    document.getElementById('hel').setAttribute('r', l)

    if (l < 40 && l > 10) {
        l = l - 1

        var a = setTimeout('jon(' + l + ')', 15)
    }
}