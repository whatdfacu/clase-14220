import { useCartContext } from "../../components/Contexts/CartContext";
import { Button } from "semantic-ui-react";

function Cart() {
    const {cartView} = useCartContext()

	return (
        <>
        <div>
        <Button onClick={cartView}>CONSOLE LOG</Button>
        </div>
        </>

	);
}

export default Cart
