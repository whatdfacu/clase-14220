import React, { useState, useEffect } from "react";
import ItemCard from "../ItemCard/ItemCard";
import axios from "axios";
import './ItemList.css';
import { Link } from 'react-router-dom'

function ItemList() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		axios('https://www.breakingbadapi.com/api/characters').then((res) => {

			setItems(res.data);
		});
	}, []);

	return (
		<div className='ItemList'>
			{items.map((item) => {
				return (
					<div key={item.char_id}>
						<Link to={`/detail/${item.char_id}`}>
							<ItemCard data={item} />
						</Link>
					</div>
				);
			})}
		</div>
	);
}

export default ItemList;