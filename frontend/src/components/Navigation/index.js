import React, {useEffect, useState} from 'react';
import { NavLink, useHistory, Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded, path }){
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);

  const pathArr = ['/', '/login', '/signup'];
  const [nav, setNav] = useState(true);

  //Checks if the user is logged and will present the appropiate links
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
  // console.log(pathArr.includes(path))
  // useEffect(()=>{
  //   if(!pathArr.includes(path))
  //   {
  //     setNav(false)
  //   } else {
  //     setNav(true)
  //   }
  // }, [path])

  let uploadHandle = () =>{
    if(!sessionUser){
      return '/login';

    } else {
      return '/upload';

    }
  }

  return (
    <header>
    <div className={nav ? "nav-bar" : "nav-bar-change"}>
      <div className='nav-bar-left'>
        <NavLink exact to="/">
          <img className="logo-img" src='/images/logo3.svg' alt="logo"/>
        </NavLink>
        <NavLink to="/explore">
          Explore
        </NavLink>
      </div>
      <div className="nav-bar-center">

      </div>
      <div className= "nav-bar-right">
      <NavLink to={uploadHandle}>
        <i  class="fa-solid fa-cloud-arrow-up fa-2xl"></i>
      </NavLink>
      {isLoaded && sessionLinks}
      </div>
    </div>
    </header>
  );
}

export default Navigation;
