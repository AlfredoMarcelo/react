import Marca from './Marca'
import './ModalMarcas.css'

// eslint-disable-next-line react/prop-types
export default function ModalMarcas({marcas}) {
    console.log(marcas);

    return (
        <div className="vtex-container-marcas">
            {/* eslint-disable-next-line react/prop-types */}
            {marcas.map((marca, index)=>{
                console.log(marca);
                return (<Marca brand={marca.brand} key={index} imagesrc={marca.imagesrc}/>)
            }) }
        </div>
    )
}