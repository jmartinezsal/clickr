import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory, Redirect} from 'react-router-dom';


import {createImage} from '../../store/images';
import './uploadImagePage.css';

function UploadImagePage(){
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);

  if(!sessionUser) return(
    <Redirect to />
  )

  const handleSubmit = e => {
    e.preventDefault();
    setErrors([]);
    dispatch(createImage({imageUrl, title, description}))
      .then(()=>history.push(`/`))
      .catch(async (res) => {
      const data = await res.json();
      if (data && data.errors){
        setErrors(data.errors);
      }
    });
  }

  return(
  <div className="image-form-page">
    <div className=" upload-form-container">
    <img className="auth-logo" src="/images/brand.svg" alt="brand"/>
      <h2>Upload an image</h2>
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

            />

        </label>
        <label>
          Title
          <input type="title"
          value={title}
          onChange={e => setTitle(e.target.value)}

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
  </div>
  )
};

export default UploadImagePage;
