import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Route, NavLink} from "react-router-dom";

import { getAllPhotos } from "../../store/photos";
import './explorePhotos.css';

function ExplorePage(){
  const {photoId} = useParams();
  const dispatch = useDispatch();

  const photos = useSelector(state => {
    return state.photos.list.map(photoId => state.photo[photoId])
  })

  useEffect(() =>{
    dispatch(getAllPhotos());
  }, [dispatch])

  if(!photos) return null;


  return(
    <div className='explore-photos-container'>
      {photos?.map(photo=>{
        <img src={photo.imageUrl} />
      })}
    </div>
  )

}

export default ExplorePage;
