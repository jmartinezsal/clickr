const LOAD = 'photos/LOAD';

const load = photos =>({
  type: LOAD,
  photos
});

export const getAllPhotos = async dispatch =>{
  const res = await fetch('/api/pokemon');

  if(res.ok){
    const photos = await res.json();
    dispatch(load(photos))
  }
}

const initialState = {}


const pokemonReducer = (state = initialState, action) =>{
  switch(action.type){
    case LOAD:
      const allPhotos = {};
      action.photos.forEach(photo => {
        allPhotos[photo.id] 
      });
  }
}
