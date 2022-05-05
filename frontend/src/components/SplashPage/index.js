import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getAllImages } from "../../store/images";
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

  let sessionLinks;

  if(!sessionUser){
    sessionLinks = (
    <div className='splash-header'>
    <h1> Click to find your inspiration. </h1>
    <h3>Join the Clicker community, home to a couple of images and a couple of people.</h3>
    <NavLink className="splash-signup-link btn" to='/signup'>
      Sign up here
    </NavLink>
    </div>
    )} else{
    sessionLinks = (
    <div className='splash-header'>
      <h1>Don't just click, create your inspiration. </h1>
      <h3>Click the button below to be able to share and inspire.</h3>
      <NavLink className="splash-signup-link btn" to='/upload'>
        Upload
      </NavLink>
    </div>)}
  return(
    <>
      <div className="slideshow-container">
        <img className="img-slideshow" src={backgroundImg} alt={backgroundImg} />
        {sessionLinks}
      </div>
    </>
  )



}

export default SplashPage;
