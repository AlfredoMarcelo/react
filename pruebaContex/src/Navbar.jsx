import { useContext } from "react"
import { ModalContext } from "./AppContext"

function Navbar(){
    const {user} = useContext(ModalContext)
    console.log(user);
    return <h1>hola navbar  {user.nombre}</h1>
}

export default Navbar