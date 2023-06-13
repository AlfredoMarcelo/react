import ModalLogica from './modalLogica/ModalLogica'
import './App.css'
import { useState } from 'react'

function App() {
  const [marcaSeleccionada, setMarcaSeleccionada] = useState(false)

  function handleActiveModal() {
    setMarcaSeleccionada(!marcaSeleccionada)
  }
  return (
    <>
    <button onClick={handleActiveModal}>{marcaSeleccionada ? 'Desactivar' : 'Activar'}</button>
    {marcaSeleccionada && <ModalLogica/>}
     
    </>
  )
}

export default App
