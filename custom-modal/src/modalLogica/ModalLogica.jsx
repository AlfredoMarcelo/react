import ModalGeneroTipo from '../modalGeneroTipo/ModalGeneroTipo';
import ModalMarcas from '../modalMarcas/ModalMarcas';

export default function ModalLogica(){

    const marcas = [{brand:'vans', imagesrc: 'https://e1.pngegg.com/pngimages/145/470/png-clipart-swag-o-d-brand-icon-set-4-vansoffthewall-vans-off-the-wall-logo.png'}, {brand:'rockford', imagesrc:'https://vallenevado.com/wp-content/uploads/2017/05/Rockford-logo-300x300.png'}, {brand: 'cat', imagesrc: 'https://cdn.freebiesupply.com/logos/thumbs/2x/cat-1-logo.png'}, {brand: 'hushpuppies', imagesrc: 'https://media.fashionnetwork.com/m/7705/945d/9b16/04d9/c9ff/508a/feb4/406e/a114/4ba4/4ba4.png'}, {brand: 'merrell', imagesrc: 'https://images.squarespace-cdn.com/content/v1/557786ffe4b0b9063305f0a0/1579130993336-UVVWFPHX9EKLI8M23ZZV/Merrell-Logo-300x300.jpg'}]
    const genders = [{genderName: 'hombre', imagesrc: 'https://loscortesdepelo.com/wp-content/uploads/2021/01/Tintes-de-cabello-para-hombres-8-200x200.jpg'}, {genderName: 'mujer', imagesrc: 'https://i.pinimg.com/236x/3e/04/53/3e0453c27a10b154bcf4cf07d68d445b.jpg'}]
    const clothes = [{type: 'top', imagesrc: 'https://workwearnation.com/cdn/shop/products/5e137a4117c8d_200x200.jpg'}, {type: 'shoes', imagesrc: 'https://www.comercialcopelec.cl/30562-medium_default/1.jpg'}, {type: 'bottom', imagesrc: 'https://images-na.ssl-images-amazon.com/images/I/711V616zGmL._AC_UL200_SR200,200_.jpg'}]
    return (
        <div>
            <h1>Hola desde logicas</h1>
            <div>
                <ModalMarcas marcas={marcas}/>
                <ModalGeneroTipo genders={genders} clothes={clothes} />
            </div>
        </div>
    )
}