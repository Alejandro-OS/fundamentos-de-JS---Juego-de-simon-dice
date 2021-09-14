var daniel ={
    nombre: 'daniel'
}

var otroDaniel = {
    nombre: 'daniel'
}

daniel == otroDaniel //false, por que compara referencia de las variables al mismo espacio de memoria

var daniel2 = daniel

daniel == daniel2 // true, las dos variables apuntan al mismo espacio de memoria

var otraPersona = {
    ...daniel
}

daniel == otraPersona // lo mismo que daniel == otroDaniel