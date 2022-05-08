import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { createComment, getImageComments } from '../../store/comments.js';
import { useHistory } from 'react-router-dom';


function CreateComment({imageId, sessionUser}){
  const dispatch = useDispatch();
  const history = useHistory();

  const [comment, setComment] = useState("");
  const [submitBtn, setSubmitBtn] = useState("hidden")


  const handleSubmit = e => {
    e.preventDefault();
    if(!sessionUser){
      window.alert("Must be logged-in");
      history.push('/login')
    }
    setComment("");
     dispatch(createComment({comment,imageId}))
     .then(()=>dispatch(getImageComments(imageId)));

  }

  return(

  <form onSubmit={handleSubmit}>
        <textarea
        id="comment"
        className="comment-textarea"
        type="textarea"
        placeholder="Add a comment"
        value={comment}
        name="comment"
        onChange={e => {
          setSubmitBtn("")
          setComment(e.target.value)}}
        />

    <button hidden={submitBtn} disabled={comment.length < 3} type="submit">Create</button>
   </form>

  )
}

export default CreateComment;
