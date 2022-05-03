const LOAD = 'photos/LOAD';
const LOAD_ONE = 'photos/LOAD_ONE';
const CREATE = 'photos/CREATE';
const EDIT = 'photos/EDIT';
const REMOVE = 'photos/REMOVE';


const load = photos =>({
  type: LOAD,
  photos
});

const loadOne = photo =>({
  type: LOAD_ONE,
  photo
})

const create = photo => ({
  type: CREATE,
  photo
})

const edit = photo =>({
  type: EDIT,
  photo
})

const remove = photo =>({
  type: REMOVE,
  photo
})



export const getAllPhotos = () => async dispatch =>{
  const res = await fetch('/api/photos');

  if(res.ok){
    const photos = await res.json();
    dispatch(load(photos))
  }
}

export const getOnePhoto = photo => async dispatch => {
  const res = await fetch('/api/photos/:id');

  if(res.ok){
    const photo = await res.json();
    dispatch(loadOne(photo))
  }
}

export const createPhoto = payload => async dispatch =>{
  const headers = {"Content/Type": "application/json"};
  const body = JSON.stringify(payload);
  const res = await fetch('/api/photos/upload', {
    method: "POST",
    headers,
    body,
  });

  if(res.ok){
    const photo = await res.json();
    dispatch(create(photo));
    return photo;
  } else {
    const errors = await res.json();
    return errors;
  }
}

export const editPhoto = payload => async dispatch =>{
  const headers = {"Content/Type": "application/json"};
  const body = JSON.stringify(payload);
  const res = await fetch(`/api/photos/${payload.id}/edit`, {
    method: "PUT",
    headers,
    body,
  });

  if(res.ok){
    const photo = await res.json();
    dispatch(edit(photo));
    return photo;
  } else {
    const errors = await res.json();
    return errors;
  }
}

export const deletePhoto = payload => async dispatch =>{
  const res = await fetch(`/api/photos/${payload.id}/delete`, {
    method: "DELETE",
  });

  if(res.ok){
    const photo = await res.json();
    dispatch(remove(photo));
    return photo;
  } else {
    const errors = await res.json();
    return errors;
  }
}

const initialState = { list:[] };

const photosReducer = (state = initialState, action) =>{
  switch(action.type){
    case LOAD:
      const allPhotos = {};
      action.photos.forEach(photo => {
        allPhotos[photo.id] = photo
      });
      return {
        ...state,
        ...allPhotos
      }
    case CREATE:
        if(!state[action.photo.id]){
          const newState = {
            ...state,
            [action.photo.id]: action.photo
          }
          return newState;
        }
      case EDIT:
        return {
          ...state,
          [action.photo.id]: action.photo
        }
      case REMOVE:
        let newState = {...state}
        delete newState[action.photo.id];
        return newState;
    default:
      return state;
  }
};

export default photosReducer;
