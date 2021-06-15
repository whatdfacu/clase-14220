import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const UserCard = (props) => (
  <Card>
    <Image src={props.photo} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.whenJoined}</span>
      </Card.Meta>
      <Card.Description>
      {props.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href='https://sleepy-haibt-9bed50.netlify.app/'>
        <Icon name='user' />
        {props.friendsCount}
      </a>
    </Card.Content>
  </Card>
)

export default UserCard