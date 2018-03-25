const models = require('./models');
const Index = require('./index.js');
const View = require('./view.js');

class Controller {
  constructor() {

  }

  static input(command1, command2, input) {
    if (command1 == 'help') {
      View.help();
    } else if (command1 == 'author') {
      if (command2 == 'add') {
        models.author.create({
          first_name: input[0],
          last_name: input[1],
          religion: input[2],
          gender: input[3],
          age: input[4]
        }).then(function(addingAuthor) {
          View.addAuthor(addingAuthor)
        })
      } else if (command2 == 'read_one') {
          models.author.findOne({where: {id: input[0]}, raw: true})
          .then(value => {
            View.chooseOneAuthor(value)
          })
      } else if (command2 == 'read_all') {
        models.author.findAll({raw:true}).then(value => {
          View.allAuthorData(value)
        })
      } else if (command2 == 'update') {
        models.author.update({
          first_name: input[0],
          last_name: input[1],
          religion: input[2],
          gender: input[3],
          age: input[4]
        }, {where: {id: input[5]}})
        .then(function (statusUpdate) {
          View.authorUpdate(statusUpdate)
        })
      } else if (command2 == 'delete') {
        models.author.destroy({where: {id: input[0]}})
        .then(function(deleteStatus) {
          View.authorDelete(deleteStatus)
        })
      }
    }
  }
}

module.exports = Controller;
