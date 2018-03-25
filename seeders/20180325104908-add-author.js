'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('authors', [{
      first_name: "erwin",
      last_name: "ramadhan",
      religion: "islam",
      gender: "male",
      age: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: "cu chu",
      last_name: "lain",
      religion: "islam",
      gender: "male",
      age: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: "ryougi",
      last_name: "shiki",
      religion: "buddha",
      gender: "female",
      age: 19,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: "nara",
      last_name: "shikamaru",
      religion: "islam",
      gender: "male",
      age: 17,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
