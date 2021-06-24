import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import "./ItemCard.css"

const anchorStyle = {
  color: 'white',
  fontSize: 15,
};

function ItemCard({ users }) {

  return (
    <div className="ItemCard">
      {users.map((user) => {
        return (
          <Card key={user.id}>
            <Image src={user.avatar_url} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{user.login}</Card.Header>
              <Card.Meta>
                <span className="date">{user.id}</span>
              </Card.Meta>
              <Card.Description>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noreferrer"
                    style={anchorStyle}>
                <Button primary fluid>
                    User Profile
                </Button>
                  </a>
              </Card.Description>
            </Card.Content>
          </Card>
        );
      })}
    </div>
  );
}

export default ItemCard