const express = require('express')
const asyncHandler = require('express-async-handler');

const {imagesByUser} = require('../../db/queries/images-repository')
const router = express.Router();

router.get('/', asyncHandler(async(req,res) => {
  const images = imagesByUser(req.params.userId);

  return res.json(images)

}))






export default router;
