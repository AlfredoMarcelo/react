import './Marca.css'


// eslint-disable-next-line react/prop-types
export default function Marca({brand, imagesrc,key}){

    function handleClic(e){
        console.log(e.target.dataset.name)
    }
    return(
        <div  key={key}>
            <h5>{brand}</h5>
            <div className='container-brand-image'>
                <img className="brand-image" onClick={(e)=>handleClic(e)} src={imagesrc} alt={brand} data-name={brand} />
            </div>
        </div>
    )
}