'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    userId: DataTypes.INTEGER,
    fullName: DataTypes.STRING,
    profilePic: DataTypes.STRING,
    backgroundPic: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Profile.associate = function(models) {
    // associations can be defined here
    Profile.belongsTo(models.User, {foreignKey:"userId"})
  };
  return Profile;
};
