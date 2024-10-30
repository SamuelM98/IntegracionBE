import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [persona, setPersona] = useState('')

  const cambiar=()=>{
    const ruta = 'https://randomuser.me/api/'
    fetch(ruta)
    .then(info => info.json())
    .then(data => setPersona(
      <div className='persona'>
        <div className='nombre_completo'>
          <h3>Nombre: {data.results[0].name.first}</h3>
          <h3>Apellido: {data.results[0].name.last}</h3>
        </div>
        <img src={data.results[0].picture.large} alt='imagen'/>
      </div>
    ))
    .catch(e=>console.log('El error fue'+e))
  }

  useEffect(()=>{
    cambiar();
  },[])

  return (
    <div className='cuerpo'>
      {persona}
      <button onClick={cambiar}>Cambiar</button>
    </div>
  )
}

export default App
