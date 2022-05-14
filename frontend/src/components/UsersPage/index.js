import React from 'react';
import { useSelector } from 'react-redux';

function UsersPage(){



  return(
    <div className="users-page">
      <div className="background-picture-container">
        <div className="user-info-background-container">

        </div>
      </div>
      <div className="user-profile-nav">
        <ul>
          <li>About</li>
          <li>Photostream</li>
          <li>Albums</li>
          <li>Faves</li>
        </ul>
      </div>
    </div>
  )
}

export default UsersPage;
