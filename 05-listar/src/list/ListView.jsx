//Este componente solo se encarga de presentar la informacion
// eslint-disable-next-line react/prop-types
function ListView({elements, funcFilterItems}){
    console.log(elements);
    return(
        <div>
            <input type="text" onChange={ev => funcFilterItems(ev.target.value)} />
            <ul>
                {
                    // eslint-disable-next-line react/prop-types
                    elements.map((nombre, index) => nombre && <li key={index}>{nombre}</li>)
                }
            </ul>
        </div>
    )
}

export default ListView