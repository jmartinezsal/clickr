import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import './pageNotFound.css'

function PageNotFound(){
  let history = useHistory();

  useEffect(() =>{
    setTimeout(() =>{
      history.push('/');
    }, 5000)

  },[])

  return(
    <div className='page-not-found'>
    <img src="/images/logo2.svg" alt="logo-not-found" />
    <h2>YOU MUST HAVE CLICKED ON THE WRONG THING</h2>
    <p>Do not worry about it, we'll take you back so you can
      click on other things</p>
    </div>
  )
}

export default PageNotFound;
