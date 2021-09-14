var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28,
  ingeniero: true,
  cocinero: false,
  cantante: true,
  dj: false,
  guitarrista: false,
  drone: false
}

var juan = {
  nombre: 'Juan',
  apellido: 'Gomez',
  edad: 13
}
  
function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`)

  if (persona.ingeniero) {
    console.log('Ingeniero')
  } else {
    console.log('No es ingeniero')
  }

  if (persona.cocinero) {
    console.log('Cocinero')
  }else {
    console.log('no es coninero')
  }

  if (persona.dj) {
    console.log('DJ')
  }

  if (persona.cantante) {
    console.log('Cantante')
  }else {
    console.log('no es cantante')
  }

  if (persona.guitarrista) {
    console.log('Gutiarrista')
  }

  if (persona.drone) {
    console.log('Piloto de drone')
  }
  
}
  
imprimirProfesiones(sacha)

const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}

//funciones anonimas

const esmayordeEdad = function(persona){
  return persona.edad >= MAYORIA_DE_EDAD
}

const esmayordeEdad = persona => {             //arrow function
  return persona.edad >= MAYORIA_DE_EDAD
}

const esmayyordeedad = persona => persona.edad >= MAYORIA_DE_EDAD       //igual a la linea 76

const esmayyordeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD            //tambien igual a la linea 76
