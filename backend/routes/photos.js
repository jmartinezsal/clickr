const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const PhotosRepository = require('../db/photos-repository');
const { handleValidationErrors } = require('../utils/validation');

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

router.get('/explore', asyncHandler((req, res) =>{
  const photos = PhotosRepository.allPhotos();
  return res.json(photos);
}));
router.get('/', asyncHandler((req, res) =>{
  const photos = PhotosRepository.allPhotos();
  return res.json(photos);
}));

router.post('/upload', photoValidators, asyncHandler((req, res) =>{
  const id = await PhotosRepository.createPhoto(req.body);
  return res.redirect(`/`)
}));

router.put('/:id/edit',  photoValidators, asyncHandler((req, res) =>{
  let {id} = req.params;

  await PhotosRepository.updatePhoto(req.body)
  return res.redirect(`/photos/${id}`);

}));


module.exports = router;
