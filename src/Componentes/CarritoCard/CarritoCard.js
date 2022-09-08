import React, {useContext} from 'react'
import { CartContext } from '../../CartContext';
import { IoCloseSharp } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";


const CarritoCard = ({itemInfo}) => {

    const { removeItem } = useContext(CartContext)

    return (
        
            

            <tr>
                <td className="w-25"><img src={itemInfo.info.media.smallImageUrl} className="w-25 h-25" alt={itemInfo.info.title} /></td>
                <td>{itemInfo.info.title}</td>
                <td>{itemInfo.cantidad}</td>
                <td>{itemInfo.info.retailPrice * itemInfo.cantidad}$</td>
                <td><button onClick={() => removeItem(itemInfo.id)}><IoCloseSharp/></button></td>
            </tr>
        
    )
}

export default CarritoCard
