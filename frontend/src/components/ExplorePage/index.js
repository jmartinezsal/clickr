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

  if(!images) return null;


  return(
    <div className='explore-image-container'>
      {images.map(image =>{
        <img src={image.imageUrl} />
      })}
    </div>
  )

}

export default ExplorePage;
