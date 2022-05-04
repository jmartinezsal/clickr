import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login" id="login-btn">Log In</NavLink>
        <NavLink to="/signup" id="signup-btn">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className="nav-bar">
      <div className='nav-bar-left'>
        {/* <NavLink exact to="/">
          <img src='/images/logo.svg' alt="logo"/>
        </NavLink> */}
      </div>
      <ul className= "nav-bar-right">

          {isLoaded && sessionLinks}

      </ul>
    </div>
  );
}

export default Navigation;
