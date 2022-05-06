import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getImageComments, createComment, deleteComment, editComment} from '../../store/comments.js';


function CommentSection({sessionUser, imageId}){
  const dispatch = useDispatch();
  // const commentsObj = useSelector(state =>  )


  useEffect(() =>{
    dispatch(getImageComments(imageId));
  }, [imageId])


  return(
    <div className="comment-divider">


    </div>
  )
}

export default CommentSection;
