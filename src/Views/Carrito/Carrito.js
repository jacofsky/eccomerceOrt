import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../CartContext'
import CarritoCard from '../../Componentes/CarritoCard/CarritoCard'
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Carrito = () => {

    const {productos} = useContext(CartContext)
    const [total, setTotal] = useState()

     useEffect(() => {
         let totalAcumulado = 0;
         setTotal(totalAcumulado)
         for (let i = 0; i < productos.length; i++) {
             totalAcumulado = totalAcumulado + (productos[i].info.retailPrice * productos[i].cantidad)
             console.log(totalAcumulado)
             setTotal(totalAcumulado)
         }

    }, [productos])

    return (
        <div className="container">
            <Table>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map(producto => <CarritoCard itemInfo={producto} />)}
                </tbody>
            </Table>


            <div>
                <p>Total: {total}$</p>
            </div>

            <div>
                <Link to={`/formulario`}>Pasar a finalizar la compra</Link>
            </div>

           
        </div >
    )
}

export default Carrito
