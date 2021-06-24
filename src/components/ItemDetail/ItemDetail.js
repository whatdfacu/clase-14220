import React, { useState, useEffect } from "react";
import ItemCard from "../ItemCard/IremCard";
import axios from "axios";
import './ItemDetail.css';


function ItemDetail() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios('https://api.github.com/users').then((res) => setUsers(res.data));
  }, []);

  return (
    <>
    <div className='ItemDetail'>
      <ItemCard users={users} />
    </div>
    </>
  );
}

export default ItemDetail;
