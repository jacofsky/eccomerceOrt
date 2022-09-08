import React from 'react';
import SneakerList from '../SneakerList/SneakerList.js';
import './ItemListContainer.css';
import PropTypes from 'prop-types';

const ItemListContainer = ({greeting}) => {

    return (
        <div>
            <h1 className="greetingStyle">{greeting}</h1>
            
            <SneakerList/>
        </div>
    )
}

ItemListContainer.propTypes = {
    greeting: PropTypes.string
}

export default ItemListContainer
