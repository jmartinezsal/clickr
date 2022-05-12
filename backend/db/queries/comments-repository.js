const { Image, User, Comment } = require("../models");

async function allComments(){
  return await Comment.findAll({
    include: [{
    model: User,
    attributes:["username"]
  }],});
}

async function allCommentsInImage(imageId){
  return await Comment.findAll({
    include: User,
    where: {
      imageId
    },
    order:[['createdAt', 'ASC']]
  })
}

async function createComment(details){
  const {comment, userId, imageId} = details;

  let createdComment = await Comment.create({
    comment,
    imageId,
    userId
  })
  return createdComment;
}

async function updateComment(details){

  const {comment, userId, imageId, id } = details;

  await Comment.update( { comment, userId, imageId},
     {
      where: {id},
      returning: true,
      plain: true
    })

  return id;
}

async function deleteComment(commentId){
  const comment = await Comment.findByPk(commentId);

  await comment.destroy();

  return commentId;
}

module.exports = {
  allCommentsInImage,
  createComment,
  updateComment,
  deleteComment,
  allComments
}
