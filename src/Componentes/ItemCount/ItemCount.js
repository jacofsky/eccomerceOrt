import React, {useState} from 'react';
import './ItemCount.css';
import { BsPlusCircleFill, BsDashCircleFill } from "react-icons/bs";
import PropTypes from 'prop-types';


const ItemCount = ({stock, initial, numProductos})  => {
    
    const [contador, setContador] = useState(initial)

    const addOn = () => {
        if(contador < stock ) {
          setContador(contador + 1)
        }
    }
    
    const decreaseOn = () => {
        if(contador > 1) {
            setContador(contador - 1)
          }
    }

    return (
        <div>
            <div className="contadorBox justify-content-center">
                <button onClick={decreaseOn} className="dashCircle"><BsDashCircleFill/></button>
                <p>{contador}</p>
                <button onClick={addOn} className="plusCircle"><BsPlusCircleFill/></button>
            </div>
            <button className="addBolsa" onClick={() => numProductos(contador)}>Agregar al la bolsa</button>
        </div>
    )
   
}

ItemCount.propTypes = {
    stock: PropTypes.number.isRequired,
    initial: PropTypes.number.isRequired,
    numProductos: PropTypes.number.isRequired

}



export default ItemCount
