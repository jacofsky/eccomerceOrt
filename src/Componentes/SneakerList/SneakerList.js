import React, { useContext } from 'react'
import SneakerCard from '../SneakerCard/SneakerCard.js'
import "bootstrap/dist/css/bootstrap.min.css";
import { CartContext } from '../../CartContext.js';
import PropTypes from 'prop-types';


const SneakerList = () => {


    const {sneakers} = useContext(CartContext)
    

    return (
        <div className="container-fluid">
            
            <div className="row justify-content-center">
                {sneakers && sneakers?.map( sneaker => <SneakerCard key={sneaker.id} sneakerInfo={sneaker} />) }
            </div>
        </div>
    )
}

SneakerList.propTypes = {
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


export default SneakerList
