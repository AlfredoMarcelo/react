import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    function handleCount(){
        setCount(count + 1)
    }
    function handleCountZero(){
        setCount(0)
    }

    return(
        <div>
            <p>Haz hecho clic {count} veces a este boton</p>
            <button onClick={handleCount}>Incrementar</button>
            <button onClick={handleCountZero}>Reiniciar</button>
        </div>
    )
}

export default Counter