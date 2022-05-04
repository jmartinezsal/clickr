import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Route, NavLink} from "react-router-dom";

import { getAllImages } from "../../store/images";
import './exploreImages.css';

function ExplorePage(){
  const {photoId} = useParams();
  const dispatch = useDispatch();

  const images = useSelector(state => state.list);
  console.log(images)

  useEffect(() =>{
    dispatch(getAllImages());
  }, [dispatch])

  if(!images) return null;


  return(
    <div className='explore-image-container'>
      {images?.map(image=>{
        <img src={image?.imageUrl} />
      })}
    </div>
  )

}

export default ExplorePage;
