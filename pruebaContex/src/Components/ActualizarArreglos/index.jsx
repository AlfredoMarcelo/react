import React, { useState } from 'react'

export default function ActualizarArreglo(){
    const [arreglo, setArreglo] = useState ([
        {id:1, name:'alfredo'},
        {id:2, name:'marcelo'},
        {id:3, name:'leonardo'},
        {id:4, name:'miguel'},
    ])

    function ActualizarArreglo(id){
        setArreglo(arreglo.filter((persona)=> persona.id !== id))
    }


    return(
        <>
            <h1>Manera de actualizar arreglo</h1>
            <ul>
                {
                    arreglo.map((persona, i)=>{
                        return (
                            <li key={persona.id}>
                                {persona.name}
                                <button onClick={() => ActualizarArreglo(persona.id)}>eliminar</button>
                            </li>
                        )
                    }
                    )

                }
            </ul>
        </>
    )
}