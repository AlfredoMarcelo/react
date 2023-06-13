import Gender from './Gender'
import Clothes from './Clothes'
import './ModalGeneroTipo.css'

// eslint-disable-next-line react/prop-types
export default function ModalGeneroTipo({genders, clothes}) {
    

    return (
        <div className='vtex-container-gender-type'>
            <div className="container-gender">
                {/* eslint-disable-next-line react/prop-types */}
                {genders.map((gender, index)=>{
                    return (<Gender gender={gender.genderName} key={index} imagesrc={gender.imagesrc}/>)
                }) }
            </div>
            <div className="container-clothes">
                {/* eslint-disable-next-line react/prop-types */}
                {clothes.map((clothe, index)=>{
                    return (<Clothes type={clothe.type} key={index} imagesrc={clothe.imagesrc}/>)
                }) }
            </div>
        </div>
    )
}