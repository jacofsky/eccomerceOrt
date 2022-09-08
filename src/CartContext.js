import React, { createContext, useEffect, useState } from "react";
import { sneakersBd } from "./bd/sneakers";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [productos, setProductos] = useState([])
    const [cant, setCant] = useState(0)
    const [sneakers, setSneakers] = useState(null)

    useEffect(() => {
        setSneakers(sneakersBd) 

    }, [])

    const getSneakersByBrand = (brand) => {
        
        
        
        return sneakers.filter(sneaker => sneaker.brand === brand)
    }

    const getSneakersByName = (name) => {
        
        return sneakers.find(sneaker => sneaker.title === name)
    }
    

    const addItems = (item, cant) => {
        let confirmacion = isInCart(item.id)
        if(!confirmacion){
            let ItemInfo = {
                id : item.id,
                info : item,
                cantidad : cant    
            }
            setProductos(productos => [...productos, ItemInfo])
        }
    }

    console.log(productos)

    const isInCart = (id) => {
        let esta = productos.find(item => item.id === id)
        if(esta === undefined){
            return false;
        } else{
            return true;
        }
    }

    const removeItem = (id) => {
        console.log(id)
        console.log(productos.filter(item => item.id !== id))
        setProductos(productos.filter(item => item.id !== id))
    }

    const sneakersLength = () => {
        let cant = 0;
        productos.forEach((i) => (cant += i.cant));
        setCant(cant);
        return cant;
    };
    
    const clear = () => {
        setProductos([])
    }

    return(
        <CartContext.Provider 
        value={{
            productos,
            sneakersLength,
            addItems,
            removeItem,
            clear,
            cant,
            sneakers,
            getSneakersByBrand,
            getSneakersByName
          }}>
            {children}
        </CartContext.Provider>
    )
}