import { useState } from "react"
import ListView from "./ListView";
import jugadores from "./items"

// Este componente se encarga de contener la logia y traspasa la info al otro para presentar

//componentes de presentacion y componentes contenedores
//const jugadores = items.slice()
//console.log(jugadores);
function List(){
    let [items, setItems] = useState(jugadores)
    
    function filterItems(searchPattern){
        if(searchPattern === ""){
            setItems(jugadores)
        } else {
            let newItems = filterItemsBySearchPattern(searchPattern)
            setItems(newItems)
        }
    }

    function filterItemsBySearchPattern(searchPattern){
        let filterItems = jugadores.map(item => item.toLocaleLowerCase().includes(searchPattern.toLocaleLowerCase())? item : null)
        return filterItems
    }
    
    return(
        <>
            <ListView elements={items} funcFilterItems={filterItems}/>
            {/* <ul>
                {jugadores.map((jugador,index)=>{
                    return <li key={index}>{jugador}</li>
                })}
            </ul> */}
        </>
    )
}

export default List