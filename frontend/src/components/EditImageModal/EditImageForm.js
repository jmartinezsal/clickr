import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {editImage, getOneImage} from '../../store/images';

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
      .then(()=>dispatch(getOneImage(image.id)))
      .then(() => showModal(false))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors){
          setErrors(data.errors);
        }
    });
  }

  const cancleHandler = e =>{
    e.preventDefault();
    showModal(false);
  }


  return(
    <div className=" auth-form-container">
    <img className="auth-logo" src="/images/brand.svg" alt="brand"/>
      <h2>Update your image</h2>
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
        <button type="button" onClick={cancleHandler}>Cancel</button>
        <button type="submit">Update</button>
      </form>
    </div>

  )
};

export default EditImagePage;
