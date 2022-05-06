import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

import { deleteImage, editImage } from '../../store/images'


function ImageActions({sessionUser, image}){
  const dispatch = useDispatch();
  const history = useHistory()
  const imageId = image.id;
  const handleDelete = e => {
    e.preventDefault();
    history.push('/explore');
    return dispatch(deleteImage(imageId));
  }

  return (
    <>
    {sessionUser.id === image.userId &&
      <div className="user-actions">
        <span className="userActions-btn">
          <i class="fa-solid fa-pen-to-square fa-2xl"></i>
        </span>
        <span className="userActions-btn">
          <i onClick={handleDelete} class="fa-solid fa-trash  fa-2xl"></i>
        </span>
      </div>
    }
    </>
  )
}

export default ImageActions;
