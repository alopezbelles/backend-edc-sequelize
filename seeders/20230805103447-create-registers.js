'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tasks",
      [
        {
          title: "Mathematics",
          description: "Advanced mathematics exercises",
          status: "pending",
          category: "studies",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Rental",
          description: "Search apartment rental.",
          status: "pending",
          category: "personal",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Technical test",
          description: "Development of an app. FrontEnd technologies: React. BackEnd technologies: express.js + sequelize.",
          status: "completed",
          category: "work",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "JavaScript Exam",
          description: "JavaScript ES6 programming language exam. Operators, functions and data types. ",
          status: "not completed",
          category: "studies",
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
