import React, {useContext} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carrito.css";
import { BsFillBagFill } from "react-icons/bs";
import { Badge } from 'react-bootstrap';
import { CartContext } from '../../CartContext';
import {Link} from 'react-router-dom';



const Carrito = () => {

    const {productos} = useContext(CartContext)

    return (
        <div>
            <Link to={`/carrito`}> 
            <button className="carritoButton">
                <BsFillBagFill className="carrito"/>
                {productos.length > 0 && <Badge className="carritoItems">{productos.length}</Badge>}
            </button>
            </Link>
        </div>
    )
}

export default Carrito
