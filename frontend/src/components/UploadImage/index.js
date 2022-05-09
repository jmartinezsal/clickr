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
    <div className=" auth-form-container">
    <div className="auth-form-top" >
    <img className="auth-logo" src="/images/brand.svg" alt="brand"/>
      <h3>Upload an image</h3>
    </div>
      <form onSubmit={handleSubmit}>
        <ul>
        <div className='errors'>
          {errors.map((error, idx) =>
            <>
            <li key={idx}>
              <i class="fa-solid fa-exclamation fa-pulse"></i>
              &nbsp; {error}
            </li>
            </>
          )}
        </div>
        </ul>
        <div className="input-container">
            <input
            placeholder='Image URL'
            type="text"
            value={imageUrl}
            name="imageUrl"
            onChange={e => setImageUrl(e.target.value)}
            />
          <input type="text"
          placeholder='title'
          value={title}
          onChange={e => setTitle(e.target.value)}
          />
          <input type="text"
          placeholder='Description'
          value={description}
          onChange={e => setDescription(e.target.value)}
          />
      </div>
      <div className="auth-btn-container">
        <button className="auth-btn" type="submit">Create</button>
      </div>
      </form>
    </div>
  </div>
  )
};

export default UploadImagePage;
