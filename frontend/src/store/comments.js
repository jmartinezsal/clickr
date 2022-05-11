import {csrfFetch} from './csrf'

const LOAD_IMAGE_COMMENTS = 'comments/LOAD_IMAGE_COMMENTS';
const LOAD_ALL_COMMENTS = 'comments/LOAD_ALL_COMMENTS'
const CREATE = 'comments/CREATE';
const EDIT = 'comments/EDIT';
const REMOVE = 'comments/REMOVE';


const loadAll = comments =>({
  type: LOAD_ALL_COMMENTS,
  comments
});

const load = comments =>({
  type: LOAD_IMAGE_COMMENTS,
  comments
});


const create = comment => ({
  type: CREATE,
  comment
})

const edit = comment =>({
  type: EDIT,
  comment
})

const remove = commentId =>({
  type: REMOVE,
  commentId
})

export const getAllComments = () => async dispatch =>{
  const res = await fetch('/api/comments');

  if(res.ok){
    const comments = await res.json();

    dispatch(loadAll(comments));
  }
}

export const getImageComments = (imageId) => async dispatch =>{
  const res = await fetch(`/api/images/${imageId}/comments`);

  if(res.ok){
    const comments = await res.json();
    dispatch(load(comments))
  }
}


export const createComment = payload => async dispatch =>{
  const imageId = payload.imageId;
  const body = JSON.stringify(payload);
  const res = await csrfFetch(`/api/comments/${imageId}`, {
    method: "POST",
    body,
  });

  if(res.ok){
    const comment = await res.json();
    dispatch(create(comment));
    return comment;
  }

}

export const editComment = payload => async dispatch =>{
  const body = JSON.stringify(payload);
  const commentId = payload.id;

  const res = await csrfFetch(`/api/comments/${commentId}/edit`, {
    method: "PUT",
    body,
  });

  if(res.ok){
    const comment = await res.json();
    dispatch(edit(comment));
    return comment;
  }

}

export const deleteComment = commentId => async dispatch =>{

  const res = await csrfFetch(`/api/comments/${commentId}/delete`, {
    method: "DELETE",
  });

  if(res.ok){
    const commentId = await res.json();
    dispatch(remove(commentId));
    return commentId;
  }
}

const initialState = { };

const commentsReducer = (state = initialState, action) =>{
  switch(action.type){
    case LOAD_ALL_COMMENTS:{
      const allComments = {...state};
      action.comments.forEach(comment => {
        allComments[comment.id] = comment;
      });
      return {
        ...allComments
      }
    }
    case LOAD_IMAGE_COMMENTS:{
      if(action.comments.length){
        let imageId = action.comments[0].imageId
        const newState = {
          ...state,
          [imageId]: action.comments
        };
        return newState;
      } else return state;
    }
    case CREATE:{
        let newState = {
          ...state,
          [action.comment.id]: action.comment
        }
        return newState;
    }
      case EDIT:{
        return {
          ...state,
          [action.comment.id]: action.comment
        }
      }
        case REMOVE:{
          let newState = {...state}
          delete newState[action.commentId];
          return newState;
        }
    default:
      return state;
  }
};

export default commentsReducer;
