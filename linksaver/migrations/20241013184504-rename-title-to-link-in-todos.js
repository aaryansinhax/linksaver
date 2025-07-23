'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     
     await queryInterface.renameColumn('Todos', 'title', 'link');
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Todos', 'link', 'title');
  }
};
