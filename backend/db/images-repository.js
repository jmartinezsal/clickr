const { Image, User, Comment } = require("./models");

async function allImages() {
  return await Image.findAll({
    include: [{
      model: User,
      attributes:["username"]
    }],
    order:[['createdAt', 'DESC']]
  });
}

async function findOneImage(imageId) {
  let image = await Image.findByPk(imageId, {
    include: [{
      model: User,
      attributes:["username"]
    }],
  });


  return image;
}

async function createImage(details){
  const {imageUrl, title, description, userId } = details;
  let image = await Image.create({
    imageUrl,
    title,
    description,
    userId
  })
  return image;
}

async function updateImage(details){

  const {imageUrl, title, description, userId, id } = details;

  await Image.update( {imageUrl,title,description, userId},
     {
      where: {id},
      returning: true,
      plain: true
    })
  return id;
}

async function deleteImage(imageId){
  const image = await Image.findByPk(imageId);
  const comments = await Comment.findAll({
    where:{
      imageId
    }
  });

  if(!image) throw new Error("Cannot find the image");

  comments.forEach(async comment => await comment.destroy())

  await Image.destroy({
    where:{
      id: image.id
    }
  })
  return image.id;
}
module.exports ={
  allImages,
  findOneImage,
  createImage,
  updateImage,
  deleteImage
}
