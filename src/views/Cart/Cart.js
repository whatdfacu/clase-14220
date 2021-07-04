import { useCartContext } from "../../components/Contexts/CartContext";

function Cart() {
    const {characterMap} = useCartContext()

    return (
        <>
        <div className='ItemList'>
        {characterMap}
        </div>
        </>

    );
}

export default Cart
