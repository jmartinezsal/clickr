import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';

import { getOneImage } from '../../store/images';
import ImageActions from './ImageActions';
import CommentSection from '../CommentSection';

import './imagePage.css'

function ImagePage() {
  const dispatch = useDispatch();
  const { imageId } = useParams();

  const sessionUser = useSelector(state => state.session.user);
  const image = useSelector(state => state.images[imageId]);


  useEffect(() =>{
    dispatch(getOneImage(imageId));
  }, [dispatch, imageId])

  if(!image){
    return null;
  }


  return(
    <div className="image-page-container">
       <div className="image-container">
        <img className="image-page-img" src={image?.imageUrl} alt={image.id} />
        {sessionUser &&
          <ImageActions sessionUser={sessionUser} image={image} />
        }
      </div>
      {image.User?.username}
      <h2>{image?.title}</h2>
      <p>{image?.description}</p>

      <CommentSection sessionUser={sessionUser} imageId={imageId} />
    </div>


  )
}

export default ImagePage;
