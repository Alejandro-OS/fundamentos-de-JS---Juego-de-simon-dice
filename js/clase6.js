var personas = {
    nombre: 'daniel',
    apellido: 'sepulveda',
    edad: 20
}

console.log(personas.nombre.toUpperCase())

function atibutoEspecifico({ nombre }){  //accede directamente al atributo del objeto
    console.log(nombre.toLowerCase())
}
// otra forma

function atributo(persona){
    var { nombre } = persona
    console.log(nombre.toLowerCase())
}

atibutoEspecifico({nobmre: 'pepito'})    // se pasa el atributo en especifico

//atributos por referencia

function cumpleanos(persona){
    persona.edad += 1
}

function cumpleanos2 (persona){
    return {                                        // se copian los areibutos del objeto
        ...persona,
        edad: persona.edad + 1
    }
}