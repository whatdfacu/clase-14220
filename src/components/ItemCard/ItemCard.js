import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import "./ItemCard.css"

const ItemCard = ({ data }) => {
	return (
		<div className='ItemCard'>
			<Card>
				<Image src={data.img} wrapped ui={false} />
				<Card.Content>
					<Card.Header>{data.name}</Card.Header>
					<Card.Meta>
						<span className='date'>{data.birthday}</span>
					</Card.Meta>
					<Card.Description>Status: {data.status}</Card.Description>
				</Card.Content>
			</Card>
		</div>
	);
};

export default ItemCard;