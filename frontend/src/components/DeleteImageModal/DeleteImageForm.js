import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import {deleteImage} from '../../store/images';

function DeleteImageForm({showModal,imageId}){
  const dispatch = useDispatch();
  const history = useHistory();

  const deleteHandler = e => {
    e.preventDefault();
    history.push('/explore');
    return dispatch(deleteImage(imageId));
  }

  const cancleHandler = e =>{
    e.preventDefault();
    showModal(false);
  }

  return (
    <form onSubmit={deleteHandler}>
      <label>
        Are you sure you want to delete this image?
      </label>
      <div className="button-container-modal">
        <button className="delete-button" type="submit">
          Delete
        </button>
        <button className="cancel-button" type="button" onClick={cancleHandler}>
          Cancel
        </button>
      </div>
    </form>

  )
}

export default DeleteImageForm;
