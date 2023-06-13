import { useContext } from "react"
import { ModalContext } from "./AppContext"


function Pies(){
    const {user, newShowButton, newChangeName} = useContext(ModalContext)
    
    return (
        <div>
            <h1>Hola {user.nombre} desde pies</h1>
            {newShowButton && <button onClick={newChangeName}>Cambiar nombre</button>}
        </div>
    )
}

export default Pies