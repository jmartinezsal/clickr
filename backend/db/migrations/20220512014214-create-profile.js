'use strict';

const defaultProfilePic = '/images/defaultProfilePic.png';
const defaultBackgroundPic = '/images/defaultBackground.png'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model:"User" }
      },
      fullName: {
        type: Sequelize.STRING
      },
      profilePic: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: defaultProfilePic
      },
      backgroundPic: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: defaultBackgroundPic
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Profiles');
  }
};
