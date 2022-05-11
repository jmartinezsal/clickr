import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {getAllComments} from '../../store/comments.js';
import CreateComment from './createComment.js';
import DeleteCommentModal from '../DeleteComment/index.js';
import EditComment from './editComment.js';
import './commentSection.css';

function CommentSection({sessionUser, imageId}){
  const dispatch = useDispatch();
  const commentsObj = useSelector(state => state.comments);
  const comments = Object.values(commentsObj);


  useEffect(() =>{
    dispatch(getAllComments());

  }, [dispatch, imageId])

  let commentsInImage = comments.filter((comment) => {
    return comment.imageId === parseInt(imageId, 10)
  });


  return(
  <>
    <h4 className='comment-title'>Recent Comments</h4>
    <div className="comment-container">
      {commentsInImage.length>0 && commentsInImage.map(comment => (
        <div className= "comment" key={comment.id}>
          <div className="comment-user">
            <h4>{comment.User?.username}</h4>
            <p>{comment?.comment}</p>
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
