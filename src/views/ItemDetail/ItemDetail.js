import React, { useEffect, useState } from 'react'
import './ItemDetail.css'
import axios from 'axios';
import { Card, Image } from 'semantic-ui-react'

function ItemDetail({ match }) {

	let ItemID = match.params.id
	const [items, setItems] = useState([]);
	
	useEffect(() => {
		axios(`https://www.breakingbadapi.com/api/characters/${ItemID}`).then((res) =>
			setItems(res.data)
		);
	}, [ItemID]);

	return (
		<div className='ItemCard'>
			{items.map((item) => {

				return (
					<Card key={item.char_id}>
						<Image src={item.img} wrapped ui={false} />
						<Card.Content>
							<Card.Header>{item.name}</Card.Header>
							<Card.Meta>
								<span className='date'>{item.birthday}</span>
							</Card.Meta>
							<Card.Description>Status: {item.status}</Card.Description>
						</Card.Content>
					</Card>
				)
			})}
		</div>
	);
}

export default ItemDetail
