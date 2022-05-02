'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Images', [
    {
      imageUrl: "https://cdn.wallpapersafari.com/74/66/M1Re5G.jpg",
      title: "Lost in winter",
      userId: 2,
      albumId: 2
    },
    {
      imageUrl: "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Dark winter",
      userId: 2,
      albumId: 2
    },
    {
      imageUrl: "https://www.rosecomm.com/wp-content/uploads/winter-643997_1920.jpg",
      title: "Red in the white",
      description: "So great to see the red contrast the white",
      userId: 2,
      albumId: 2
    },
    {
      imageUrl: "https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg",
      title: "Flower shower",
      description: "Happy for the spring season to be back",
      userId: 1,
      albumId: 1
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQhmL8msAjvnRhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQhmL8msAjvnR2pJk8L5hnDc2BqWL6I4L5HA&usqp=CAU2pJk8L5hnDc2BqWL6I4L5HA&usqp=CAU",
      title: "Spring is here...",
      userId: 1,
      albumId: 1
    },
    {
      imageUrl: "https://i.pinimg.com/736x/3e/e3/e7/3ee3e7458623e63b195acfba6b57c03e--spring-screensavers-desktop-screensavers.jpg",
      title: "Lake Reflection",
      description: "Took this one and was in awe how great it came out",
      userId: 1,
      albumId: 1
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1620127682229-33388276e540?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VtbWVydGltZXxlbnwwfHwwfHw%3D&w=1000&q=80",
      title: "Ohh summer.. how I missed you",
      description: "Summer is great and beers during the summer is even better",
      userId: 3,
      albumId: 3
    },
    {
      imageUrl: "https://wallpapercave.com/wp/3UBQJxD.jpg",
      title: "Never want to leave",
      userId: 3,
      albumId: 3
    },
    {
      imageUrl: "https://cdn.wallpapersafari.com/46/32/YxFXWv.jpg",
      title: "Paradise in the middle of the ocean",
      userId: 3,
      albumId: 3
    },

  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Images', null, {});
  }
};
