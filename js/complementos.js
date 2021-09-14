// manejo de fechas

function diasEntreFechas(fecha1, fecha2) {
    const unDia = 1000 * 60 * 60 * 24
    const diferencia = Math.abs(fecha1 - fecha2)

    return Math.floor(diferencia / unDia)
}

const hoy = new Date()
const nacimiento = new Date(1990, 7, 12)

// recursividad

/*
13  |_4___
13 - 4 = 9      1
9 - 4 = 5       1
5 - 4 = 1       1
1 - 4 = -3      0
*/
function divisionEntera(dividendo, divisor) {
    if (dividendo < divisor) {
        return 0
    }

    return 1 + divisionEntera(dividendo - divisor, divisor)
}

//memorizacion

/*
!6 = 6 * 5 * 4 * 3 * 2 * 1 = 720
!12 = 12 * 11 * 10 * 9 * 8 * 7 * !6
*/

function factorial(n) {
    if (!this.cache) {
        this.cache = {}
    }

    debugger
    if (this.cache[n]) {
        return this.cache[n]
    }

    if (n === 1) {
        return 1
    }

    this.cache[n] = n * factorial(n - 1)
    debugger
    return this.cache[n]
}


//closures

function crearSaludo(finalDeFrase) {
    return function (nombre) {
        console.log(`Hola ${nombre} ${finalDeFrase}`)
    }
}

const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('güey')
const saludoColombiano = crearSaludo('amigo')

saludoArgentino('Sacha') // Hola Sacha che
saludoMexicano('Sacha') // Hola Sacha güey
saludoColombiano('Sacha') // Hola Sacha amigo

//estructuras de datos inmutables

const sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28
}

// const cumpleanos = persona => persona.edad++

const cumpleanosInmutable = persona => ({
    ...persona,
    edad: persona.edad + 1
})


//Cambiando el contexto al llamar a una función

const sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc'
}

const yesika = {
    nombre: 'Yesika',
    apellido: 'Cortés'
}

function saludar(saludo = 'Hola') {
    console.log(`${saludo}, mi nombre es ${this.nombre}`)
}

// const saludarASacha = saludar.bind(sacha)
// const saludarAYesika = saludar.bind(yesika)
//
// setTimeout(saludar.bind(sacha, 'Hola che'), 1000)

// saludar.call(sacha, 'Hola che')

saludar.apply(sacha, ['Hola che'])
