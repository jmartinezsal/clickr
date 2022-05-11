import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {editImage, getAllImages} from '../../store/images';

function EditImagePage({showModal, image}){
  const dispatch = useDispatch();
  const imageId = image.id;

  const [imageUrl, setImageUrl] = useState(image.imageUrl);
  const [title, setTitle] = useState(image.title);
  const [description, setDescription] = useState(image.description);
  const [errors, setErrors] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    setErrors([]);
    dispatch(editImage({imageUrl, title, description, id: imageId}))
      .then(()=>dispatch(getAllImages()))
      .then(() => showModal(false))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors){
          setErrors(data.errors);
        }
    });
  }

  const cancelHandler = e =>{
    e.preventDefault();
    showModal(false);
  }


  return(

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
          placeholder='Title'
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
        <button className="demo-button btn" onClick={cancelHandler} type="button">Cancel</button>
      </div>
      </form>
    </div>

  )
};

export default EditImagePage;
