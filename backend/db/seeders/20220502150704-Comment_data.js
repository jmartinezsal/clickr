'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Comments', [
    {
     comment:"Beautiful",
     userId: 3,
     imageId: 1
    },
    {
     comment:"Great shot!",
     userId: 2,
     imageId: 1
    },
    {
     comment:"Great shot!",
     userId: 3,
     imageId: 2
    },
    {
     comment:"Such a great shot!",
     userId: 2,
     imageId: 2
    },
    {
     comment:"This is amazing",
     userId: 2,
     imageId: 3
    },
    {
     comment:"For sure saving this one",
     userId: 3,
     imageId: 3
    },
    {
     comment:"Great shot!",
     userId: 2,
     imageId: 4
    },
    {
     comment:"OMG",
     userId: 3,
     imageId: 4
    },
    {
     comment:"Nice.",
     userId: 2,
     imageId: 5
    },
    {
     comment:"This looks great",
     userId: 3,
     imageId: 5
    },
    {
     comment:"Great shot...",
     userId: 3,
     imageId: 6
    },
    {
     comment:"Perfection of shot",
     userId: 2,
     imageId: 6
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
  }
};
