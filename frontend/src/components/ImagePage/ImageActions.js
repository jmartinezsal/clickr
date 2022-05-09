import React, {} from 'react';

import { editImage } from '../../store/images'
import DeleteImageModal from '../DeleteImageModal';
import EditImageModal from '../EditImageModal';

function ImageActions({sessionUser, image}){
  const imageId = image.id;


  return (
    <>
    {sessionUser.id === image.userId &&
      <div className="user-actions">
        <EditImageModal image={image} />
        <DeleteImageModal imageId={imageId} />
      </div>
    }
    </>
  )
}

export default ImageActions;
