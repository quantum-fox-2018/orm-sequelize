const model = require('../models');
const view = require('../view/view.js');

class Tag {
  constructor() {

  }

  static getCommand(command, input){

    switch (command) {

      case 'add': {Tag.add_tag(input) ; break;}
      case 'read_one': {Tag.read_one_tag(input) ; break;}
      case 'read_all': {Tag.read_all_tag() ; break;}
      case 'update': {Tag.update_tag(input) ; break;}
      case 'delete': {Tag.delete_tag(input) ; break;}

      default:{return ''}

    }

  }

  static add_tag(input){

    model.Tag.create({

      name: input.join(' '),
      createdAt: new Date,
      updatedAt: new Date

    }).then(newTag => {

      view.showTag(`New tag with name ${input.join(' ')} has been created.`);

    })

    process.exit()

  }

  static read_one_tag(input){

    model.Tag.findOne({raw: true, where: {id: input[0]}} ).then(item => {

      view.showTag(item);

    })

    process.exit()

  }

  static read_all_tag(input){

    model.Tag.findAll({raw: true}).then(items => {

      view.showTag(items);

    })

    process.exit()

  }

  static update_tag(input){

    model.Tag.findOne({where: {id: input[0]}}).then(item => {

      item.updateAttributes({
        name: input.slice(1).join(' ')
      })

    })

    process.exit()

  }

  static delete_tag(input){

    model.Tag.destroy({where: {id: input[0]}}).then(item => {
      view.showTag('deleted');
    })

    process.exit()

  }

}


module.exports = Tag;
