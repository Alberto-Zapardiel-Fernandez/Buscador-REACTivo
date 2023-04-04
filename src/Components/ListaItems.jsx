import React from 'react'

const ListaItems = ({ usuarios, nombre }) => {
  //Si existe el nombreABuscar renderizamos, si no, sacamos un texto
  if (nombre) {
    return (
      <div
        className='contenedor-items'
        key={nombre}
      >
        {usuarios.map(user => {
          if (user.nombre.toUpperCase().includes(nombre.toUpperCase()) && nombre) {
            //Si el usuario contiene las letras del input renderizamos el usuario, esto podría ser otro componente ⬇️ (pasarle el user como prop y ya imprimir)
            return (
              <div
                onClick={() => alert(`${user.nombre} te saluda`)}
                key={user.telefono}
                className='item'
              >
                <p>Nombre: {user.nombre}</p>
                <p>Teléfono: {user.telefono}</p>
                <img
                  src={user.imageSrc}
                  alt='usuario'
                />
              </div>
            )
          }
        })}
      </div>
    )
  } else {
    //Texto a sacar si el input está vacío
    return <p style={{ fontSize: '22px' }}>Escribe algo para buscar ⬆️</p>
  }
}

export default ListaItems
