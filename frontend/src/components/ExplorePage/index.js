import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink} from "react-router-dom";

import { getAllImages } from "../../store/images";
import './exploreImages.css';

function ExplorePage(){
  const dispatch = useDispatch();

  const imagesObj = useSelector(state => state.images);
  const images = Object.values(imagesObj);

  useEffect(() =>{
    dispatch(getAllImages());
  }, [dispatch])

  const imgClassNames = ['small', 'big', 'tall', 'wide'];

  if(!images) return null;


  return(
    <>
    <h2>Explore</h2>
    <div className='explore-image-container'>
      {images?.map((image,index) =><img class={imgClassNames[index % imgClassNames.length]}
      src={image.imageUrl} alt={image.userId}/>)}
      
    </div>
    </>
  )

}

export default ExplorePage;
