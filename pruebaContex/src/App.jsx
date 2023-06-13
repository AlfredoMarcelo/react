import AppContext from './AppContext'
import Navbar from './Navbar'
import './App.css'
import Cuerpo from './Cuerpo'
import Pies from './Pies'

function App() {

  return (
    <>
      <AppContext>
        <Navbar/>
        <Cuerpo/>
        <Pies />
      </AppContext>
    </>
  )
}

export default App
