const { Image } = require("./models");

async function allPhotos() {
  return await Image.findAll();
}

async function findOnePhoto(id) {
  let photo = await Image.findByPk(id);
  return photo;
}

async function createPhoto(details){
  let photo = await Image.create({
    ...details
  })
  return photo.id;
}

async function updatePhoto(details){
  let id = details.id;
  delete details.id;

  await Image.update(
    details,
    {
      where:{id},
      returning: true,
      plain: true
    })
  return await Image.findByPk(id);
}

async function deletePhoto(id){
  const photo = await Image.findByPk(id);
  if(!photo) throw new Error("Cannot find the photo");

  await Image.destroy({
    where:{
      id: photo.id
    }
  })
  return photo.id
}
module.exports ={
  allPhotos,
  findOnePhoto,
  createPhoto,
  updatePhoto,
  deletePhoto
}
