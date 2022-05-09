import React, {} from 'react';

import { editImage } from '../../store/images'
import DeleteImageModal from '../DeleteImageModal';

function ImageActions({sessionUser, image}){
  const imageId = image.id;


  return (
    <>
    {sessionUser.id === image.userId &&
      <div className="user-actions">
        <i className="fa-solid fa-pen-to-square fa-xl"></i>
        <DeleteImageModal imageId={imageId} />
      </div>
    }
    </>
  )
}

export default ImageActions;
