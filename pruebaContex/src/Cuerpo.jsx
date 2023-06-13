import { useContext } from "react"
import { ModalContext } from "./AppContext"

function Cuerpo() {
    const {changeName, showButton} = useContext(ModalContext)
    console.log(changeName)
    return (
        <div>
            <p>Cambiar nombre</p>
            {showButton && <button onClick={changeName}>hazlo</button>}
        </div>
    )
}

export default Cuerpo