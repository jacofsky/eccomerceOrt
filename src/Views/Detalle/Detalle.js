import React, {useState, useEffect, useContext} from 'react'
import SneakerDetail from '../../Componentes/SneakerDetail/SneakerDetail';
import { CartContext } from '../../CartContext';



const Detalle = ({match}) => {


    const selectedSneaker = match.params.id;
    const [sneakerInfo, setSneakerInfo] = useState()
    
    const {getSneakersByName} = useContext(CartContext)

    useEffect(() => {

        const info = getSneakersByName(selectedSneaker)
        console.log(info);
        setSneakerInfo(info)

    },[])

    return (
        <div className="container">
            <h1>Detalle</h1>
            {sneakerInfo && <SneakerDetail key={sneakerInfo.id}  sneakerInfo={sneakerInfo}/>}
        </div>
    )
}

export default Detalle
