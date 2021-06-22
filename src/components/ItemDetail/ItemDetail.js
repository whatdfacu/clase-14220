import React, { useState, useEffect } from "react";
import UserCard from "../UserCard/UserCard";
import axios from "axios";
import './ItemDetail.css';


function ItemDetail() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/photos").then((res) => setUsers(res.data));
  }, []);

  return (
    <>
    <div>
      <div className="container ItemDetail">
        <div className="cardCentrada">
          {users.map((user) => {
            return <UserCard users={user} key={user.id}/>;
              }
            )
          }
        </div>
      </div>
    </div>
    </>
  );
}

export default ItemDetail;
