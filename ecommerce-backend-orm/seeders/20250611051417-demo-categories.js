'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      { name: 'Phone & mobile', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bag', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Sports', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Vehicle Accessories', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Fashion', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Shoes', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Exercise & Fitness', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Computers & laptops', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
