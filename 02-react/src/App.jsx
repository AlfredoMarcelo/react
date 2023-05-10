import { useState } from 'react'
import CartaPresentacion from './CartaPresentacion'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>HOla desde app</h1>
      <CartaPresentacion/>
    </>
  )
}

export default App
