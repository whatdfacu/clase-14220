import React, { useState, useEffect } from "react";
import UserCard from "../UserCard/UserCard";
import axios from "axios";
import './ItemDetail.css';


function ItemDetail() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios('https://api.github.com/users').then((res) => setUsers(res.data));
  }, []);

  return (
    <div className='ItemDetail'>
      <UserCard users={users} />
    </div>
  );
}

export default ItemDetail;
