import React from 'react'
import { Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from 'prop-types';





const SneakerCard = ({sneakerInfo}) => {
    console.log(sneakerInfo)
    return (
        <div className="sneakerCard col-12 col-md-3 py-2">
            <Card style={{ width: '18rem', margin: '0 auto' }}>
                <Card.Img variant="top" src={sneakerInfo.media.imageUrl ? sneakerInfo.media.imageUrl : 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'} />
            <Card.Body>
                <Card.Title className="justify-content-start">{sneakerInfo.name}</Card.Title>
                    <Card.Text>
                    {sneakerInfo.retailPrice}$
                    </Card.Text>
                    <Link to={`/Detalle/${sneakerInfo.title}`}><Button> Mas informacion</Button></Link>
            </Card.Body>
            </Card>
        </div>
    )
}

SneakerCard.propTypes = {
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

export default SneakerCard
