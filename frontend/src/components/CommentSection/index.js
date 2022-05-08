import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {getImageComments} from '../../store/comments.js';
import CreateComment from './createComment.js';
import DeleteCommentModal from '../DeleteComment/index.js';
import EditComment from './editComment.js';
import './commentSection.css';

function CommentSection({sessionUser, imageId}){
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments[imageId]);

  useEffect(() =>{
    dispatch(getImageComments(imageId));

  }, [dispatch, imageId])


  return(
  <>
    <h4 className='comment-title'>Recent Comments</h4>
    <div className="comment-card">
      {comments && comments?.map(comment => (
        <div className= "comment" key={comment.id}>
          <div className="comment-user">
          {comment?.User?.username}
          {comment.comment}
          </div>
            {
              sessionUser && sessionUser.id === comment.userId &&
               <div className="user-actions">
                    <EditComment currComment={comment} />
                    <DeleteCommentModal commentId={comment.id} />
              </div>
            }
        </div>
      ))}
      </div>
        <CreateComment sessionUser={sessionUser} imageId={imageId}/>
  </>
  )

}

export default CommentSection;
