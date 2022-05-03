'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    imageUrl: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
    Image.belongsTo(models.Album, {foreignKey:'albumId'});
    Image.hasMany(models.Comment, {foreignKey: "imageId"});
    Image.belongsTo(models.User, {foreignKey: "userId"});


  };
  return Image;
};
