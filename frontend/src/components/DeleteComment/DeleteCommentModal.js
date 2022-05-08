import React from "react";
import { useDispatch } from "react-redux";
import { deleteComment, getImageComments } from "../../store/comments";

function DeleteCommentForm({showModal, commentId, imageId}){
  const dispatch = useDispatch();

  console.log(imageId)
  const deleteHandler = async (e) =>{
    e.preventDefault();
    dispatch(deleteComment(commentId))
    .then(()=>dispatch(getImageComments(imageId)));
    showModal(false)
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
