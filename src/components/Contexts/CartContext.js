import { createContext, useContext, useState } from 'react'
import ItemCard from '../ItemCard/ItemCard';
import { Link } from 'react-router-dom'

const CartContext = createContext()

export function useCartContext() {

    return useContext(CartContext)
}

export function CartProvider({ children }) {

    const [cart, setCart] = useState([])

    const [number, setNumber] = useState(0);
    const handleUp = () => {
        setNumber(number + 1);
    };
    const handleDown = () => {
        setNumber(number - 1);
    };

    const onAdd = (item) => {
        setCart([...cart, item])
        console.log(cart)
    }
    
    const finishPurchase = () => {
        console.log(`compra terminada`)
    }
    
    const characterMap = cart.map((char) => {return(    
        <div key={char.char_id}>
        <Link to={`/detail/${char.char_id}`}>
            <ItemCard data={char}/>
        </Link>
        </div>
    )})

        const value = {
        number,
        handleUp,
        handleDown,
        onAdd,
        finishPurchase,
        characterMap
    }
    
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}