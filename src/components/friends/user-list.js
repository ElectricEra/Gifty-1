import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <ul className="collection">

      {props.friends.map(user => {

        return (
          <li key={user.id} className="collection-item avatar" onClick={props.handleFriend.bind(null, user.id)}>
            <img src={user.picture.data.url} alt="pic" className="circle" />
            <p>{user.name}</p>            
          </li>
        );

      })}

    </ul>
  );
}
