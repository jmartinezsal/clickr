import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import {deleteImage, getAllImages} from '../../store/images';

function DeleteImageForm({showModal,imageId}){
  const dispatch = useDispatch();
  const history = useHistory();

  const deleteHandler = e => {
    e.preventDefault();
    dispatch(deleteImage(imageId))
      .then(()=> dispatch(getAllImages()));
    history.push('/explore');
  }

  const cancleHandler = e =>{
    e.preventDefault();
    showModal(false);
  }

  return (
    <form className="modal-container" onSubmit={deleteHandler}>
      <label>
        Are you sure you want to delete this image?
      </label>
      <div className="button-container-modal">
        <button className="cancel-button" type="button" onClick={cancleHandler}>
          Cancel
        </button>
        <button className="delete-button" type="submit">
          Delete
        </button>
      </div>
    </form>

  )
}

export default DeleteImageForm;
