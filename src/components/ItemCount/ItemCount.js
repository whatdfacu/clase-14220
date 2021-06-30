import { Button } from "semantic-ui-react";
import { useCartContext } from "../Contexts/CartContext";
import "./ItemCount.css"

/* import { Item } from './Item'; */

function ItemCount( {item} ) {
const { number, handleUp, handleDown, onAdd } = useCartContext()
  return (
    <div className="counter-container">
      <div className="counter-title">
        <p>Items: {number}</p>
      </div>
      <div className="counter">
        <Button onClick={handleUp} positive>
          +
        </Button>
        <Button onClick={handleDown} negative>
          -
        </Button>
      </div>
      <div className="counter">
        <Button onClick={() => onAdd(item)}>
          Añadir al Carro
        </Button>
      </div>
    </div>
  );

}

export default ItemCount;
