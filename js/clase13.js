//callbacks

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

const onPeopleResponse = function (persona) {
  console.log(`Hola, yo soy ${persona.name}`)
}

function obtenerPersonaje(id) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(url, opts, onPeopleResponse)
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)  // se ve el asincronismo de javaScript





// asi se arregla el asincronismo pero se incurre en el callback-hell
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  $.get(url, opts, function (persona) {
    console.log(`Hola, yo soy ${persona.name}`)

    if (callback) {
      callback()
    }
  })
}

obtenerPersonaje(1, function () {
  obtenerPersonaje(2, function () {
    obtenerPersonaje(3, function () {
      obtenerPersonaje(4, function () {
        obtenerPersonaje(5, function () {
          obtenerPersonaje(6, function () {
            obtenerPersonaje(7)                   //esto es un callback-hell
          })
        })
      })
    })
  })
})



//si ocurre un error en medio de los callbacks

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  $
    .get(url, opts, callback)
    .fail(() => {
      console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`)
    })
}

obtenerPersonaje(1, function (personaje) {
  console.log(`Hola, yo soy ${personaje.name}`)

  obtenerPersonaje(2, function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}`)

    obtenerPersonaje(3, function (personaje) {
      console.log(`Hola, yo soy ${personaje.name}`)

      obtenerPersonaje(4, function (personaje) {
        console.log(`Hola, yo soy ${personaje.name}`)

        obtenerPersonaje(5, function (personaje) {
          console.log(`Hola, yo soy ${personaje.name}`)

          obtenerPersonaje(6, function (personaje) {
            console.log(`Hola, yo soy ${personaje.name}`)

            obtenerPersonaje(7, function (personaje) {
              console.log(`Hola, yo soy ${personaje.name}`)
            })
          })
        })
      })
    })
  })
})

// promesas para no utilizar callbacks

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
      .get(url, opts, function (data) {
        resolve(data)
      })
      .fail(() => reject(id))
  })
}

function onError(id) {
  console.log(`Sucedió un error al obtener el personaje ${id}`)
}

obtenerPersonaje(1)
  .then(function (personaje) {
    console.log(`El personaje 1 es ${personaje.name}`)
  })
  .catch(onError)

//en cadenar promesas

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
      .get(url, opts, function (data) {
        resolve(data)
      })
      .fail(() => reject(id))
  })
}

function onError(id) {
  console.log(`Sucedió un error al obtener el personaje ${id}`)
}

obtenerPersonaje(1)
  .then(personaje1 => {
    console.log(`El personaje 1 es ${personaje1.name}`)
    return obtenerPersonaje(2)
  })
  .then(personaje2 => {
    console.log(`El personaje 2 es ${personaje2.name}`)
    return obtenerPersonaje(3)
  })
  .then(personaje3 => {
    console.log(`El personaje 3 es ${personaje3.name}`)
    return obtenerPersonaje(4)
  })
  .then(personaje4 => {
    console.log(`El personaje 4 es ${personaje4.name}`)
    return obtenerPersonaje(5)
  })
  .then(personaje5 => {
    console.log(`El personaje 5 es ${personaje5.name}`)
    return obtenerPersonaje(6)
  })
  .then(personaje6 => {
    console.log(`El personaje 6 es ${personaje6.name}`)
    return obtenerPersonaje(7)
  })
  .then(personaje7 => {
    console.log(`El personaje 7 es ${personaje7.name}`)
  })
  .catch(onError)



  // multiples promesas en paralelo

  const API_URL = 'https://swapi.co/api/'
  const PEOPLE_URL = 'people/:id'
  const opts = { crossDomain: true }
  
  function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
      const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
      $
        .get(url, opts, function (data) {
          resolve(data)
        })
        .fail(() => reject(id))
    })
  }
  
  function onError(id) {
    console.log(`Sucedió un error al obtener el personaje ${id}`)
  }
  
  var ids = [1, 2, 3, 4, 5, 6, 7]
  // var promesas = ids.map(function (id) {
  //   return obtenerPersonaje(id)
  // })
  var promesas = ids.map(id => obtenerPersonaje(id))
  Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)




// Async-await

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
      .get(url, opts, function (data) {
        resolve(data)
      })
      .fail(() => reject(id))
  })
}

function onError(id) {
  console.log(`Sucedió un error al obtener el personaje ${id}`)
}

async function obtenerPersonajes() {
  var ids = [1, 2, 3, 4, 5, 6, 7]
  var promesas = ids.map(id => obtenerPersonaje(id))
  try {
    var personajes = await Promise.all(promesas)
    console.log(personajes)
  } catch (id) {
    onError(id)
  }
}

obtenerPersonajes()