import React, {} from 'react';

import { editImage } from '../../store/images'
import DeleteImageModal from '../DeleteImageModal';

function ImageActions({sessionUser, image}){
  const imageId = image.id;


  return (
    <>
    {sessionUser.id === image.userId &&
      <div className="user-actions">
        <span className="userActions-btn">
          <i className="fa-solid fa-pen-to-square fa-2xl"></i>
        </span>
        <DeleteImageModal imageId={imageId} />
      </div>
    }
    </>
  )
}

export default ImageActions;
