const { Image, User, Comment } = require("./models");

async function allPhotos() {
  return await Image.findAll({
    order:[['createdAt', 'DESC']]
  });
}

async function findOnePhoto(id) {
  let image = await Image.findByPk(id, {
    include: [{
      model: User,
      attributes:["username"]
    },
    {
      model: Comment,
      order:[['createdAt', 'DESC']]
    }],
  });
  return image;
}

async function createPhoto(details){
  const {imageUrl, title, description, userId } = details;

  let image = await Image.create({
    imageUrl,
    title,
    description,
    userId
  })
  return image.id;
}

async function updatePhoto(details, id){

  const {imageUrl, title, description } = details;

  await Image.update( details, {
      where: {id},
      returning: true,
      plain: true
    })
  return id;
}

async function deletePhoto(id){
  const image = await Image.findByPk(id);
  if(!image) throw new Error("Cannot find the image");

  await Image.destroy({
    where:{
      id: image.id
    }
  })
  return image.id
}
module.exports ={
  allPhotos,
  findOnePhoto,
  createPhoto,
  updatePhoto,
  deletePhoto
}
