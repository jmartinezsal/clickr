import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { getAllImages } from "../../store/images";
import './exploreImages.css';

function ExplorePage(){
  const dispatch = useDispatch();

  const imagesObj = useSelector(state => state.images);
  const images = Object.values(imagesObj);

  useEffect(() =>{
    dispatch(getAllImages());
  }, [dispatch])

  const imgClassNames = ['small', 'small', 'small', 'big', 'tall', 'wide'];

  if(!images) return null;
  console.log(images[0])

  return(
    <>
    <h2>Explore</h2>
    <div className='explore-image-container'>

      {images?.map((image,index) =>(
      <NavLink to={`/images/${image.id}`}>
        <img class={imgClassNames[index % imgClassNames.length]}
        src={image.imageUrl} alt={image.userId}/>
        <div className="hide">
          {image.title}
        </div>
      </NavLink>
      ))}

    </div>
    </>
  )

}

export default ExplorePage;
