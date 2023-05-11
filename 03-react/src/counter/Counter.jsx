import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    function handleCount(){
        setCount(count + 1)
    }

    return(
        <div>
            <p>Haz hecho clic {count} veces a este boton</p>
            <button onClick={handleCount}>Incrementar</button>
        </div>
    )
}

export default Counter