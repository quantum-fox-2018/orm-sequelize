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
    
    const fs = require('fs')

    let data = fs.readFileSync('./author.csv','utf8').trim().split('\r\n')
    
    let new_input = [];
    for(let i = 1; i < data.length; i++) {
      new_input.push(data[i].split(','));
    }
    
    let result = [];
    for(let i = 0; i < new_input.length; i++) {
      let newObj = {
        first_name: new_input[i][1],
        last_name: new_input[i][2],
        religion: new_input[i][3],
        gender: new_input[i][4],
        age: new_input[i][5],
        createdAt: new Date(),
        updatedAt: new Date()
      }
      result.push(newObj)
    }
    
    return queryInterface.bulkInsert('Authors', result, {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

   return queryInterface.bulkDelete('Authors', null, {});

  }
};
