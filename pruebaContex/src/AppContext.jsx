import { createContext} from "react";
import { useState } from "react";

export const ModalContext = createContext()



// eslint-disable-next-line react/prop-types
function AppContext({ children }){
    const [showButton, setShowButton] = useState(true)
    const [newShowButton, setNewShowButton] = useState(false)
    const [user, setUser] = useState(
        {
            nombre: "alfredo",
            edad: 45,
            nacionalidad: "chileno"
        }
    )
    
    function changeName(){
        setUser({nombre:"marcelo"})
        setShowButton(!showButton)
        setNewShowButton(!newShowButton)
    }

    function newChangeName(){
        setUser({nombre:"alfredo"})
        setNewShowButton(!newShowButton)
        setShowButton(!showButton)
    }



    return (
        <ModalContext.Provider value={{user, changeName, newChangeName, showButton, newShowButton}}>
            {children}
        </ModalContext.Provider>
    )
}

export default AppContext