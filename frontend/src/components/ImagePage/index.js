import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';

import { getOneImage } from '../../store/images'


function ImagePage() {
  const dispatch = useDispatch();
  const { imageId } = useParams();

  const image = useSelector(state => state.images[imageId])

  useEffect(() =>{
    dispatch(getOneImage(imageId));
  }, [imageId])

  if(!image){
    return null;
  }


  return(
    <div className="image-page-container">
       <div className="image-container">
        <img className="image-page-img" src={image?.imageUrl} alt={image.id} />

      </div>
    </div>


  )
}

export default ImagePage;
