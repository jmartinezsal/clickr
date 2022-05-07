import React, { useState} from 'react';
import { NavLink, useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../../store/session.js'
import './Navigation.css';

function Navigation({ isLoaded, path }){
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);

  const handleLogout = (e) =>{
    e.preventDefault();
    dispatch(logout());

    history.push('/');
  }

  //Checks if the user is logged and will present the appropiate links
  let sessionLinks;
  let exploringLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink to= "/upload">
          <i class="fa-solid fa-cloud-arrow-up fa-2xl"></i>
        </NavLink>
          <i onClick= {handleLogout} className="fa-solid fa-arrow-right-from-bracket fa-2xl"></i>
      </>
    );
    exploringLinks = (
      <div className="nav-bar-center">
        <NavLink to="/explore">
          Explore
        </NavLink>
      </div>
    )
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login" id="login-btn">Log In</NavLink>
        <NavLink to="/signup" id="signup-btn">Sign Up</NavLink>
      </>
    );
  }
  // console.log(pathArr.includes(path))
  // useEffect(()=>{
  //   if(!pathArr.includes(path))
  //   {
  //     setNav(false)
  //   } else {
  //     setNav(true)
  //   }
  // }, [path])



  return (
    <header>
    <div className="nav-bar">
      <div className='nav-bar-left'>
        <NavLink exact to="/">
          <img className="logo-img" src='/images/logo3.svg' alt="logo"/>
        </NavLink>
      </div>
        {isLoaded && exploringLinks}
      <div className= "nav-bar-right">
        {isLoaded && sessionLinks}
      </div>
    </div>
    </header>
  );
}

export default Navigation;
