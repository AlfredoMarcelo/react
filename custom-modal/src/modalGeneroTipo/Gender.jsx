import './ModalGeneroTipo.css'


// eslint-disable-next-line react/prop-types
export default function Gender({gender, imagesrc,key}){

    function handleClic(e){
        console.log(e.target.dataset.gender)
    }
    return(
        <div  key={key}>
            <h5>{gender}</h5>
            <div className='container-gender-image'>
                <img className="gender-image" onClick={(e)=>handleClic(e)} src={imagesrc} alt={gender} data-gender={gender} />
            </div>
        </div>
    )
}