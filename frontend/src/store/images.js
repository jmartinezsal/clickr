import {csrfFetch} from './csrf'

const LOAD = 'images/LOAD';
const LOAD_ONE = 'images/LOAD_ONE';
const CREATE = 'images/CREATE';
const EDIT = 'images/EDIT';
const REMOVE = 'images/REMOVE';


const load = images =>({
  type: LOAD,
  images
});

const loadOne = image =>({
  type: LOAD_ONE,
  image
})

const create = image => ({
  type: CREATE,
  image
})

const edit = image =>({
  type: EDIT,
  image
})

const remove = imageId =>({
  type: REMOVE,
  imageId
})


export const getAllImages = () => async dispatch =>{
  const res = await fetch('/api/images');

  if(res.ok){
    const images = await res.json();
    dispatch(load(images))
  }
}

export const getOneImage = imageId => async dispatch => {
  const res = await fetch(`/api/images/${imageId}`);

  if(res.ok){
    const details = await res.json();
    dispatch(loadOne(details))
  }
}

export const createImage = payload => async dispatch =>{
  const body = JSON.stringify(payload);
  const res = await csrfFetch('/api/images/upload', {
    method: "POST",
    body,
  });

  if(res.ok){
    const image = await res.json();
    dispatch(create(image));
    return image;
  }

}

export const editImage = payload => async dispatch =>{
  const body = JSON.stringify(payload);
  const imageId = payload.id;
  const res = await csrfFetch(`/api/images/${imageId}/edit`, {
    method: "PUT",
    body,
  });

  if(res.ok){
    const image = await res.json();
    dispatch(edit(image));
    return image;
  }

}

export const deleteImage = imageId => async dispatch =>{

  const res = await csrfFetch(`/api/images/${imageId}/delete`, {
    method: "DELETE",
  });

  if(res.ok){
    const imageId = await res.json();
    dispatch(remove(imageId));
    return imageId;
  }
}

const initialState = { };

const imagesReducer = (state = initialState, action) =>{
  switch(action.type){
    case LOAD:{
      const allImages = {};
      action.images.forEach(image => {
        allImages[image.id] = image
      });
      return {
        ...state,
        ...allImages
      }
    }
    case LOAD_ONE:{
      if(action.image.id) {
        return state
      }
      const newState = {
        ...state,
        [action.image.id]: action.image
      };
      return newState;
    }

    case CREATE:{
      const newState = {
        ...state,
        [action.image.id]: action.image
      }
      return newState;
    }
      case EDIT:{
        const newState = {
          ...state,
          [action.image.id]: action.image
        }
        return newState;
      }
      case REMOVE:{
        let newState = {...state}
        delete newState[action.imageId];
        return newState;
      }

      default:
        return state;
  }
};

export default imagesReducer;
