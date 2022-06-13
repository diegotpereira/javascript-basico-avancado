var str = 'if (a) {1 + 1;} else {1 + 2}'
var a = true 
var b = eval(str)

alert('b é : ' + b)

a = false
b = eval(str)
alert('b é: ' + b)