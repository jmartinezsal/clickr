import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {getImageComments} from '../../store/comments.js';
import CreateComment from './createComment.js';
import DeleteCommentModal from '../DeleteComment/index.js';

import './commentSection.css'
function CommentSection({sessionUser, imageId}){
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments);

  useEffect(() =>{
    dispatch(getImageComments(imageId));
  }, [dispatch, imageId])


  return(
  <div className='comment-container-area'>

    <div className="comments-container">
      {comments[imageId] && comments[imageId]?.map(comment => (
        <div className= "comment" key={comment?.id}>
          <div className="comment-user">
          {comment.User.username}
          {comment.comment}
          </div>
            {
              sessionUser && sessionUser.id === comment.userId &&
               <div className="user-actions">
                    <i className="fa-solid fa-pen-to-square fa-xl"></i>
                    <DeleteCommentModal commentId={comment.id} />
              </div>
            }
        </div>
      ))}
      </div>
        <CreateComment sessionUser={sessionUser} imageId={imageId}/>
  </div>
  )

}

export default CommentSection;
