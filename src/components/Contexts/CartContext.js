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

    const finishPurchase = () => {
        console.log(`compra terminada`)
    }

    const cartView = () => {
        let characterMap = cart.map((char) => {return char.name});

        console.log(characterMap)
        console.log(characterMap[0])
        console.log(characterMap[1])
        console.log(characterMap[2])
    }

    const value = {
        number,
        handleUp,
        handleDown,
        onAdd,
        finishPurchase,
        cartView
    }
    
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}