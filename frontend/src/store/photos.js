const LOAD = 'photos/LOAD';
const LOAD_ONE = 'photos/LOAD_ONE'

const load = photos =>({
  type: LOAD,
  photos
});



export const getAllPhotos = async dispatch =>{
  const res = await fetch('/api/photos');

  if(res.ok){
    const photos = await res.json();
    dispatch(load(photos))
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
    default:
      return state;
  }
};

export default photosReducer;
