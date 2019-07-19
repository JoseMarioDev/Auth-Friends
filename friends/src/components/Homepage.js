import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddFriend from './AddFriend';

const Homepage = () => {
  const [friends, setFriends] = useState([]);

  function getFriends(res) {
    setFriends(res);
  }

  useEffect(() => {
    const url = 'http://localhost:5000/api/friends';
    const token = localStorage.getItem('token');

    axios
      .get(url, {
        headers: { Authorization: `${token}` },
      })
      .then(res => {
        console.log(res);
        getFriends(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {friends.map(friend => (
        <div
          key={friend.id}
          style={{
            padding: '10px',
            border: '1px solid grey',
            margin: '10px',
            display: 'inline-block',
            textAlign: 'left',
            width: '400px',
            height: '200px',
          }}
        >
          <h2>Name: {friend.name}</h2>
          <h2>Age: {friend.age}</h2>
          <h2>Email: {friend.email}</h2>
        </div>
      ))}
      <AddFriend />
    </div>
  );
};
export default Homepage;
