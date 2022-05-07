import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './splashPage.css';

function SplashPage(){
  const imgArr = ['/images/chloe-leis.jpg',
  '/images/pascal-debrunner.jpg',
  '/images/sergey-pesterev.jpg'];

  const sessionUser = useSelector(state => state.session.user);
  const [ backgroundImg, setBackgroundImg ] = useState([]);
  const [ index, setIndex ] = useState(0);



  useEffect(() => {
    const imgIndex = setInterval(() =>{
      setIndex(prev => (prev + 1) % 3 );

    }, 5000);

    return () => clearInterval(imgIndex);
  }, []);

  useEffect(() =>{
    setBackgroundImg(imgArr[index])
  }, [index])

  return(
    <>
      <div className="slideshow-container">
        <img className="img-slideshow" src={backgroundImg} alt={backgroundImg} />
        <div className='splash-header'>
          <h1> Click to find your inspiration. </h1>
          <h4>Join the Clicker community, home to a couple of images and a couple of people.</h4>
          <NavLink className="splash-signup-link btn" to='/signup'>
            Sign up here
          </NavLink>
        </div>
     </div>
    </>
  )



}

export default SplashPage;
