import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'


/* import { Item } from './Item'; */

function ItemCount() {

    
    const [number, setNumber] = useState(0);
    const handleUp = () => {
        setNumber(number+1);
    };
    const handleDown = () => {
        setNumber(number-1);
    };

    return (

        <div className='counter-container'>
        <div className='counter-title'>
            <p>Items: {number}</p>
        </div>
        <div className='counter'>
            <Button onClick={handleUp}positive>+</Button>
            <Button onClick={handleDown}negative>-</Button>
        </div>
        </div>

    )
}

export default ItemCount
