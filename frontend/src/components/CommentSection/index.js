import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getImageComments, createComment, deleteComment, editComment} from '../../store/comments.js';


function CommentSection({sessionUser, imageId}){
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments )

  useEffect(() =>{
    dispatch(getImageComments(imageId));
  }, [imageId])


  return(
    <div className="comment-divider">
      {comments[imageId]?.map(comment => (
        <div className="comment">
          {comment?.User.username}
          {comment?.comment}
        </div>

       ))}

    </div>
  )
}

export default CommentSection;
