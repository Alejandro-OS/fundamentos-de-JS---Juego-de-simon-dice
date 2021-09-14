var nombre = 'daniel', apellido = 'sepulveda'

var nombreEnMayusculas = nombre.toUpperCase() +' '+ apellido.toUpperCase()

var minusculas = 'minusculas'
var mayusculas = 'MAYUSCULAS'

var minusculasMayu = minusculas.toUpperCase()             //convertir a mayusculas
var mayusculasMinus = mayusculas.toLowerCase()            //convertir a minusculas
var primeraLetra = nombre.charAt(0)                       // caracter en la posicion(x)
var cantidadDeCaracteres = nombre.length                  //cantidad de caracteres

//nombreEnMayusculas.toUpperCase()  //no funcionó

console.log(nombreEnMayusculas)
console.log(minusculasMayu)
console.log(mayusculasMinus)

//interpolacion de texto

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

console.log(nombreCompleto)

//sub-strings

var str = nombre.substr(1,3)  //desde donde empieza y cuantos toma

console.log(str)