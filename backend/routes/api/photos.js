const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const PhotosRepository = require('../../db/photos-repository');
const { handleValidationErrors } = require('../../utils/validation');

const photoValidators = [
  check('imageUrl')
    .exists({ checkFalsy: true })
    .withMessage("Please provide an image"),
  check("title")
    .exists({checkFalsy: true})
    .withMessage("Please provide a title"),
  handleValidationErrors
];

const router = express.Router();

router.get('/', asyncHandler(async (req, res) =>{
  const photos = await PhotosRepository.allPhotos();
  return res.json(photos);
}));

router.get('/:id(\\d+)', asyncHandler(async(req,res) =>{

  const photo = await PhotosRepository.findOnePhoto(req.params.id);
  return res.json(photo)
}))

router.post('/upload', photoValidators, asyncHandler(async (req, res) =>{
  const photo = await PhotosRepository.createPhoto(req.body);
  return res.json(photo)
}));

router.put('/:id(\\d+)/edit',  photoValidators, asyncHandler(async (req, res) =>{

  await PhotosRepository.updatePhoto(req.body)
  return res.redirect(`/photos/${req.params.id}`);

}));

router.delete('/:id(\\d+)/delete', asyncHandler(async (req, res) =>{

  await PhotosRepository.deletePhoto(req.params.id);

  return res.redirect('/');
}));


module.exports = router;
