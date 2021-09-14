var nombre = 'Sacha'

function imprimirNombre(){
    nombre = nombre.toUpperCase()            // <-- esta modificando la variable global
    console.log(nombre)
}

imprimirNombre()

function nombreImprimir(nombre){
    //window.nombre                       // <--- se refiere a la variable global
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

nombreImprimir(nombre)