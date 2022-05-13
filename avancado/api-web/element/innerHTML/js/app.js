for (index = 0; index < 7; index++) {
    x = 'txt' + index
    document.getElementById(x).firstChild.nodeValue = '&<>'
}
document.getElementById("innerHTMLtxt").textContent = document.getElementById("txt").innerHTML
document.getElementById("textContenttxt").textContent = document.getElementById("txt").textContent


const d = document.getElementById('d')
dump(d.innerHTML)