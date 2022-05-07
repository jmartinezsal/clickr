import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {getImageComments, deleteComment, editComment} from '../../store/comments.js';
import CreateComment from './createComment.js';
import './commentSection.css'
function CommentSection({sessionUser, imageId}){
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments );
  const [ commentId, setCommentId ] = useState('');

  // useEffect(() =>{
  //   if(sessionUser){
  //     setCommentsIsLoaded(true);
  //   }

  // }, [sessionUser])

  useEffect(() =>{

    dispatch(getImageComments(imageId));

  }, [dispatch])


  const handleDelete = (e) => {
    e.preventDefault();
    console.log(commentId)
    return dispatch(deleteComment(commentId));
  }

  return(
  <div className='comment-container-area'>

    <div className="comments-container">
      {comments[imageId]?.map(comment => (
        <div className= "comment" key={comment?.id}>
          {comment.User.username}
          {comment.comment}
            {
              sessionUser && sessionUser.id === comment.userId &&
               <div className="user-actions-hide">
                    <i className="fa-solid fa-pen-to-square fa-xl"></i>
                    <i onClick={(e) => {
                      setCommentId(comment.id)
                      handleDelete(e)
                    }}
                    className="fa-solid fa-trash  fa-xl"></i>
              </div>
            }
        </div>
      ))}
      </div>
        <CreateComment imageId={imageId}/>
  </div>
  )

}

export default CommentSection;
