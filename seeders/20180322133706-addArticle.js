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

   let data = fs.readFileSync('./article.csv','utf8').trim().split('\r\n')
   
   let new_input = [];
   for(let i = 1; i < data.length; i++) {
     new_input.push(data[i].split(','));
   }
   
   let result = [];
   for(let i = 0; i < new_input.length; i++) {
     let newObj = {
       title: new_input[i][1],
       body: new_input[i][2],
       id_author: new_input[i][3],
       id_tag: new_input[i][4],
       createdAt: new Date(),
       updatedAt: new Date()
     }
     result.push(newObj)
   }
   
   return queryInterface.bulkInsert('Articles', result, {});


  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

    return queryInterface.bulkDelete('Articles', null, {});
  
  }
};
