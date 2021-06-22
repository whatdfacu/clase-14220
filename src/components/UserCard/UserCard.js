import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const UserCard = ({users}) => (
  <Card>
    <Image src={users.url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{}</Card.Header>
      <Card.Meta>
        <span className="date">{users.title}</span>
      </Card.Meta>
      <Card.Description>{users.body}</Card.Description>
    </Card.Content>
  </Card>
);

export default UserCard