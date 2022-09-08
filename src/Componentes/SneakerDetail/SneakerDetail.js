import React, {useState, useContext} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import { CartContext } from '../../CartContext'
import './SneakerDetail.css'


const SneakerDetail = ({sneakerInfo}) => {

    const {productos, addItems} = useContext(CartContext)
    const [cant, setCant] = useState(0);

    const onAdd = (cantidad) => {
        setCant(cantidad)
        if(cant > 0){
            addItems(sneakerInfo, cant)
        }
    }


    return (
        <div className="row">


            <img src={sneakerInfo.media.imageUrl} alt="" className="col-12 col-md-6"/>
            
            <div className="col-12 col-md-6">
                <h2>{sneakerInfo.title}</h2>
                <p className="text-start">Marca: {sneakerInfo.brand}</p>
                <p className="text-start">Fecha de salida: {sneakerInfo.releaseDate}</p>
                <p>${sneakerInfo.retailPrice}</p>
                <ItemCount stock={sneakerInfo.cantidad} initial={1} numProductos={cantidad => onAdd(cantidad)}/>
                {productos.length > 0 ? <Link to={`/Carrito`}><button className="carroActive mt-4" 
                >Ir al carro</button></Link> : <button className="carroDisable mt-4" disabled>Ir al carro</button>}
            </div>
        </div>
    )
}

SneakerDetail.propTypes = {
    sneakerInfo: PropTypes.shape({
        brand: PropTypes.string,
        cantidad: PropTypes.number,
        media: PropTypes.shape({
            smallImageUrl: PropTypes.string,
            thumbUrl: PropTypes.string,
            imageUrl: PropTypes.string,

        }),
        releaseDate: PropTypes.string,
        brand: PropTypes.string,
        retailPrice: PropTypes.number,
        name: PropTypes.string,
        id: PropTypes.string,
    }).isRequired
}

export default SneakerDetail
