const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { requireAuth } = require('../../utils/auth');
const {allImages, findOneImage, createImage, updateImage, deleteImage}= require('../../db/images-repository');
const { handleValidationErrors } = require('../../utils/validation');

const commentsValidators = [
  check('comments')
    .exists({ checkFalsy: true })
    .withMessage("Please provide an image"),
  handleValidationErrors
];

const router = express.Router();

router.get('/', asyncHandler(async (req, res) =>{
  const images = await allImages();
  return res.json(images);
}));

router.get('/:imageId(\\d+)', asyncHandler(async(req,res) =>{

  const image = await findOneImage(req.params.imageId);
  return res.json(image)
}))

router.post('/upload', requireAuth, imageValidators, asyncHandler(async (req, res) =>{
  const userId = parseInt(req.user.id, 10);
  let details = {...req.body, userId:2};
  console.log(details)
  // if(userId === req.body.userId){
    const image = await createImage(details);
    return res.json(image)
  // }
}));

router.put('/:imageId(\\d+)/edit', requireAuth,  imageValidators, asyncHandler(async (req, res) =>{
  const userId = parseInt(req.user.id, 10);
  let id = req.params.imageId;
  let details = {...req.body, userId, id};

  const imageId = await updateImage(details)
  const image = await findOneImage(imageId)
  return res.json(image);

}));

router.delete('/:imageId(\\d+)/delete', requireAuth, asyncHandler(async (req, res) =>{

  const imageId = await deleteImage(req.params.imageId);

  return res.json(imageId);
}));


module.exports = router;
