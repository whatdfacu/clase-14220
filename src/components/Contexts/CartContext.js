import { createContext, useContext, useState } from 'react'

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

    const value = {
        handleUp,
        handleDown,
        onAdd,
        number
    }
    
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}