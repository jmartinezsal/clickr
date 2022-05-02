'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Albums', [
    {
     title: 'Spring',
     userId:1
    },
    {
     title: 'Winter',
     userId:2
    },
    {
     title: 'Summer',
     userId:3
    },

  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
      */
   return queryInterface.bulkDelete('Albums', null, {});
  }
};
