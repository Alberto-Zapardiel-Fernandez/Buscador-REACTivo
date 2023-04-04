const usuarios = []
const cantidadResultados = 50
//URL de la API
const API_URL = `https://randomuser.me/api/?results=${cantidadResultados}`

//Método para guardar los datos de los usuarios desde la API, asynchronously para evitar colisiones
export const fetchData = async setUsers => {
  const response = await fetch(API_URL)
  const result = await response.json()
  const resultado = result.results
  //En resultado están todos los datos de los usuarios
  resultado.map(user => {
    insertUser(user, usuarios)
  })
  setUsers(usuarios)
}

//Extracción de los datos necesarios y push en el array de usuarios ( podríamos obtener los que se quisieran que envie la API)
function insertUser(user, usuarios) {
  const name = user.name.first + ' ' + user.name.last
  const phone = user.phone
  const imageSrc = user.picture.medium
  let usuario = { nombre: name, telefono: phone, imageSrc: imageSrc }
  usuarios.push(usuario)
}
