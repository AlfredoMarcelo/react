import { useEffect, useState } from "react"


const Temporizador = () =>{
    
    let [targetSeconds, setTargetSeconds] = useState(null)
    let [elapsedSeconds, setElapsedSeconds] = useState(0)
    
    // useEffect esta realizado para poder contener  efectos secundarios
    useEffect(function() {
        if(targetSeconds === null) return

        setElapsedSeconds(0)

        let interval = setInterval(function(){
            setElapsedSeconds((elapsedSeconds) => elapsedSeconds + 1)
        }, 1000)
        
        return () => {
            clearInterval(interval)
        }
    },[targetSeconds])


    function parseForm(ev){
        ev.preventDefault()
        let seconds = ev.target.seconds.value
        setTargetSeconds(parseInt(seconds))
    }

    if(elapsedSeconds > targetSeconds && targetSeconds !== null){

        return(<>
            <p>se termino el conteo</p>
            <button onClick={()=>setTargetSeconds(null)}>Volver</button>
        
        </>) 
    }

    if(targetSeconds !== null){
        return(
            <p>Soy un conteo hasta el {targetSeconds} y voy contando {elapsedSeconds}</p>
        )
    }

    return(
        <>
            <p>Segundos a contar</p>
            <form action="#" onSubmit={ev => parseForm(ev)}>
                <input type="number" name="seconds" id="" />
                <button>Iniciar</button>         
            </form>
        </>
    )
}

export default Temporizador