import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FileUploader } from "react-drag-drop-files";


import {createImage} from '../../store/images';
import './uploadImagePage.css';

function UploadImagePage(){
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);


  // if(sessionUser) return(
  //   <Redirect to />
  // )



  const handleSubmit = e => {
    e.preventDefault();
    setErrors([]);
    dispatch(createImage({imageUrl, title, description}))
    return;
  }

  return(
  <div className="image-form">
    <h2>Image Form</h2>
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) =>
        <li key={idx}>{error}</li>
        )}
      </ul>
      <label>
          Image URL:
          <input
          type="text"
          value={imageUrl}
          name="imageUrl"
          onChange={e => setImageUrl(e.target.value)}
          required
          />

      </label>
      <label>
        Title
        <input type="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
        />
      </label>
      <label>
        Description:
        <input type="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}

        />
      </label>
      <button type="submit">Create</button>
    </form>
  </div>
  )
};

export default UploadImagePage;
