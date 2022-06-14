for(index = 0; index < navigator.plugins.length; index++) {
    document.write("<tr><td>")
    document.write(navigator.plugins[index].name)
    document.write("</td><td>")
    document.write(navigator.plugins[index].filename)
    document.write("</td><td>")
    document.write(navigator.plugins[index].description)
    document.write("</td></tr>")
}