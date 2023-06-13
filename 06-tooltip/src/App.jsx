import TooltipText from './tooltip/TooltipText'
import './App.css'

function App() {

  return (
    <>
      <p>Lorem ipsum dolor <TooltipText tooltip={"Equipo Ingles"}>Chelsea</TooltipText> sit amet consectetur adipisicing elit. Distinctio libero molestias laboriosam incidunt cumque magni quod modi doloremque fugit dolorem!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <TooltipText tooltip={"Equipo Ingles"}>Manchester city</TooltipText> Distinctio libero molestias laboriosam incidunt cumque magni quod modi doloremque fugit dolorem!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio libero molestias laboriosam incidunt <TooltipText tooltip={"Equipo Español"}>Real Madrid</TooltipText> cumque magni quod modi doloremque fugit dolorem!</p>
    </>
  )
}

export default App
