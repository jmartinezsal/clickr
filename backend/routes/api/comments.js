const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { requireAuth } = require('../../utils/auth');
const { allComments, createComment, updateComment, deleteComment }= require('../../db/queries/comments-repository');
const { handleValidationErrors } = require('../../utils/validation');

const commentsValidator = [
  check('comment')
    .exists({ checkFalsy: true })
    .withMessage("Please provide a comment"),
  handleValidationErrors
];

const router = express.Router();


router.get('/', asyncHandler(async (req, res) =>{
  const comments = await allComments();
  return res.json(comments);
}))

router.post('/:imageId(\\d+)', requireAuth, commentsValidator, asyncHandler(async (req, res) =>{
  const userId = parseInt(req.user.id, 10);
  const imageId = req.params.imageId;
  let details = {...req.body, userId, imageId};
  // if(userId === req.body.userId){
    const comment = await createComment(details);
    return res.json(comment)
  // }
}));

router.put('/:commentId(\\d+)/edit', requireAuth,  commentsValidator, asyncHandler(async (req, res) =>{
  const userId = parseInt(req.user.id, 10);
  let id = req.params.commentId;
  let details = {...req.body, userId, id};

  const comment = await updateComment(details)
  return res.json(comment);

}));

router.delete('/:commentId(\\d+)/delete', requireAuth, asyncHandler(async (req, res) =>{

  const commentId = await deleteComment(req.params.commentId);

  return res.json(commentId);
}));


module.exports = router;
