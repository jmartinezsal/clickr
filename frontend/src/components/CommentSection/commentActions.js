import React, { useState} from 'react';
import { useDispatch} from 'react-redux';
import { createComment } from '../../store/comments.js';


function CreateComment({imageId}){
  const dispatch = useDispatch();


  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState([]);
  const [submitBtn, setSubmitBtn] = useState("hidden")


  const handleSubmit = e => {
    e.preventDefault();
    setErrors([]);
    dispatch(createComment({comment,imageId}))
      .catch(async (res) => {
      const data = await res.json();
      if (data && data.errors){
        setErrors(data.errors);
      }
    });
  }

  return(

  <form onSubmit={handleSubmit}>
    <ul>
      {errors.map((error, idx) =>
      <li key={idx}>{error}</li>
      )}
    </ul>
        <input
        id="comment"
        type="textarea"
        placeholder={comment}
        value={comment}
        name="comment"
        onChange={e => {
          setComment(e.target.value)}}
        />

    <button hidden={submitBtn}type="submit">Create</button>
   </form>

  )
}

export default CreateComment;
