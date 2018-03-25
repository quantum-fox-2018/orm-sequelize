const model = require('../models');
const view = require('../view/view.js');

class Author {
  constructor() {

  }

  static getCommand(command, input){

    switch (command) {

      case 'add':{ Author.addAuthor(input); break;}
      case 'read_one':{ Author.read_one_Author(input); break;}
      case 'read_all':{ Author.read_all_Author(); break;}
      case 'update':{ Author.update_Author(input); break;}
      case 'delete':{ Author.delete_Author(input); break;}

      default:{return ''}

    }

  }

  static addAuthor(input){

    model.Author.create({

      firstname: input[0],
      last_name: input[1],
      religion: input[2],
      gender: input[3],
      age: input[4],
      createdAt: new Date,
      updatedAt: new Date }).then(newUser => {

        view.showAuthor(`New user ${input[1]} ${input[2]} has been created.`);

    })

    process.exit()

  }

  static read_one_Author(input){

    model.Author.findOne({raw: true, where: {id: input[0]}}).then(projects => {

      view.showAuthor(projects);

    })

    process.exit()

  }

  static read_all_Author(){

    model.Author.findAll({raw: true}).then(projects => {

      view.showAuthor(projects);

    })

    process.exit()

  }

  static update_Author(input){

    model.Author.findOne({when: {id: +(input[0])}}).then(value => {

      switch (input[1]) {

        case 'firstname': { value.updateAttributes({
                            firstname: String(input.slice(2).join(' '))
                          }) ;break;}

        case 'lastname': { value.updateAttributes({
                            last_name: String(input.slice(2).join(' '))
                          })  ;break;}

        case 'religion': { value.updateAttributes({
                            religion: String(input.slice(2))
                          })  ;break;}

        case 'gender': { value.updateAttributes({
                            gender: String(input.slice(2))
                        })  ;break;}

        case 'age': { value.updateAttributes({
                            age: String(input.slice(2))
                    })  ;break;}

        default:{return ''}

      }

    })

    process.exit()

  }

  static delete_Author(input){

    model.Author.destroy({where: {id: input[0]}}).then(value =>{

      view.showAuthor(`deleted`);

    })

    process.exit()

  }

}

module.exports = Author;
