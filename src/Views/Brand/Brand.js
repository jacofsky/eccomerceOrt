import React, {useState, useEffect, useContext} from 'react'
import SneakerCard from '../../Componentes/SneakerCard/SneakerCard'
import { CartContext } from '../../CartContext'

const Brand = ({match}) => {

    const selectedBrand = match.params.brand;
    const [brandSneakers, setBrandSneakers] = useState([])

    const {getSneakersByBrand} = useContext(CartContext)

    useEffect(() => {
      
      const sneakers = getSneakersByBrand(selectedBrand)

      setBrandSneakers(sneakers)
    },[selectedBrand])

    return (
        <div className="container-fluid">
          <h1>Bienvenido a {selectedBrand}</h1>
          <div className="row justify-content-center">
            {brandSneakers?.map(sneaker => <SneakerCard key={sneaker.id} sneakerInfo={sneaker}/>)}
          </div>
        </div>
    )
}

export default Brand
