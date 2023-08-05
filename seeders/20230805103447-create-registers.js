'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tasks",
      [
        {
          title: "título tarea 1",
          description: "descripción tarea 1",
          status: "pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "título tarea 2",
          description: "descripción tarea 2",
          status: "pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "título tarea 3",
          description: "descripción tarea 3",
          status: "completed",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "título tarea 4",
          description: "descripción tarea 4",
          status: "not completed",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
