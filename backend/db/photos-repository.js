const {Photo} = require("./models");

async function allPhotos() {
  return await Photo.findAll();
}

async function findOnePhoto(id) {
  let photo = await Photo.findByPk(id);
  return photo;
}

async function createPhoto(details){
  let photo = await Photo.create({
    ...details
  })
  return photo.id;
}

async function updatePhoto(details){
  let id = details.id;
  delete details.id;

  await Photo.update(
    details,
    {
      where:{id},
      returning: true,
      plain: true
    })
  return await Photo.findByPk(id);
}

module.exports ={
  allPhotos,
  findOnePhoto,
  createPhoto,
  updatePhoto
}
