import {csrfFetch} from './csrf'

const LOAD = 'comments/LOAD';
const LOAD_COMMENTS = 'comments/LOAD_COMMENTS'
const CREATE = 'comments/CREATE';
const EDIT = 'comments/EDIT';
const REMOVE = 'comments/REMOVE';


const loadAll = comments =>({
  type: LOAD,
  comments
});

const load = comments =>({
  type: LOAD,
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

export const deletecomment = payload => async dispatch =>{
  const commentId = payload.id;
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
    case LOAD:
      const allcomments = {};
      action.comments.forEach(comment => {
        allcomments[comment.id] = comment
      });
      return {
        ...state,
        ...allcomments
      }
    case CREATE:
        if(!state[action.comment.id]){
          const newState = {
            ...state,
            [action.comment.id]: action.comment
          }
          return newState;
        }
      case EDIT:
        return {
          ...state,
          [action.comment.id]: action.comment
        }
      case REMOVE:
        let newState = {...state}
        delete newState[action.commentId];
        return newState;
    default:
      return state;
  }
};

export default commentsReducer;
