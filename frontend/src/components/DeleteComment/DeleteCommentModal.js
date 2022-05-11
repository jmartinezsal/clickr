import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteComment, getAllComments, getImageComments } from "../../store/comments";

function DeleteCommentForm({showModal, commentId}){
  const dispatch = useDispatch();
  const { imageId } = useParams()

  const deleteHandler = async (e) =>{
    e.preventDefault();
    await dispatch(deleteComment(commentId))
    .then(()=> dispatch(getAllComments()))
    showModal(false)
    // .then(()=>dispatch(getImageComments(imageId)));
  }

  const cancleHandler = e =>{
    e.preventDefault();
    showModal(false);
  }

  return (
    <form className="modal-container" onSubmit={deleteHandler}>
      <label>
        Are you sure you want to delete this comment?
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

export default DeleteCommentForm;
