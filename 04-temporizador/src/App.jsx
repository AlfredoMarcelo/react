import { useState } from 'react'
import Temporizador from './temporizador/Temporizador'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Temporizador/>
    </>
  )
}

export default App
