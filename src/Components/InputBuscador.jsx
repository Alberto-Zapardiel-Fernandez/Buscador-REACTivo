import React from 'react'

const InputBuscador = ({ setNombreABuscar }) => {
  //Método para setear el value del input en el state del padre
  const buscar = e => {
    setNombreABuscar(e.target.value)
  }

  return (
    <>
      <input
        type='text'
        name='buscador'
        id='buscador'
        placeholder='Busca personas'
        onChange={buscar}
      />
    </>
  )
}

export default InputBuscador
