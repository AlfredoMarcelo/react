import './ModalGeneroTipo.css'


// eslint-disable-next-line react/prop-types
export default function Clothes({type, imagesrc,key}){

    function handleClic(e){
        console.log(e.target.dataset.type)
    }
    return(
        <div key={key}>
            <h5>{type}</h5>
            <div className='container-clothes-image'>
                <img className="clothes-image" onClick={(e)=>handleClic(e)} src={imagesrc} alt={type} data-clothes={type} />
            </div>
        </div>
    )
}