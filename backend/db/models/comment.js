'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    comment: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    imageId: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.Image, {foreignKey: "imageId"});
    Comment.belongsTo(models.User, {foreignKey:"userId"});
  };
  return Comment;
};
