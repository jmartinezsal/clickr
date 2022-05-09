import React, { useState} from 'react';
import { useDispatch} from 'react-redux';
import { editComment,getImageComments } from '../../store/comments.js';

import './commentSection.css'

function EditComment({currComment}){
  const imageId = currComment.imageId;
  const id = currComment.id;
  const commentValue = currComment.comment;

  const dispatch = useDispatch();
  const [comment, setComment] = useState(commentValue);
  const [ showForm, setShowForm ] = useState(false);
  const [ submitBtn, setSubmitBtn ] = useState("hidden")

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editComment({comment, id, imageId}))
    .then(()=>dispatch(getImageComments(imageId)));
    setShowForm(false);

  }

  const handleClickForm = () =>{
    setShowForm(!showForm)

  }

  return(
    <div className="edit-form-container">
      <i onClick={handleClickForm} className={showForm ? "fa-solid fa-x fa-x" : "fa-solid fa-pen-to-square fa-xl"} ></i>
        <form className={showForm ? "edit-form" : "hide-form"} onSubmit={handleSubmit}>
              <textarea
              id="comment"
              type="textarea"
              placeholder={currComment.comment}
              value={comment}
              name="comment"
              onChange={e => {
                setSubmitBtn("")
                setComment(e.target.value)}}
              />
          <button className="create-comment-btn" hidden={submitBtn} disabled={comment.length < 3} type="submit">Done</button>
        </form>
  </div>

  )
}

export default EditComment;
