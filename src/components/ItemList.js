import React, { useState, useEffect } from 'react'

export const ItemList = () => {

const [items, setItems] = useState([]);

const fetchData = async () => {
try {
const response = await fetch('https://jsonplaceholder.typicode.com/todos');
const responseJson = await response.json();
setItems(responseJson);
}
catch (error) {
console.log(error);
}
}

useEffect(() => {

fetchData()

}, [])

return (
<div>
{items && items.length > 0 ? items.map(
    (value, i) => <li key={value.id}> {value.userId}</li>
) : "Items not found..."}
</div>
)
}
export default ItemList