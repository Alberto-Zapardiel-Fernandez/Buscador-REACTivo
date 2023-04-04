import React, { useEffect, useState } from 'react'
import InputBuscador from './InputBuscador.jsx'
import ListaItems from './ListaItems.jsx'
import { fetchData } from '../functions.js'

function Buscador() {
  const [users, setUsers] = useState([])
  const [nombreABuscar, setNombreABuscar] = useState('')

  //useEffect para hacer la call a la API al iniciar la App

  useEffect(() => {
    fetchData(setUsers)
  }, [])

  return (
    <div className='App'>
      {/*Enviamos el set del state para obtener el nombre */}
      <InputBuscador setNombreABuscar={setNombreABuscar}></InputBuscador>
      {/*Enviamos los usuarios y el nombre para filtrar */}
      <ListaItems
        usuarios={users}
        nombre={nombreABuscar}
      ></ListaItems>
    </div>
  )
}
export default Buscador
