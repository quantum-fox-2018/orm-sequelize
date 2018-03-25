const model = require('../models');
const view = require('../view/view.js');

class Article {
  constructor() {

  }

  static getCommand(command, input){

    switch (command) {
      case 'add': { Article.add_article(command, input) ; break;}
      case 'read_one': { Article.read_one_article(input) ; break;}
      case 'read_all': { Article.read_all_article(input) ; break;}
      case 'update': { Article.update_article(input) ; break;}
      case 'delete': { Article.delete_article(input) ; break;}

      default: {return ''}

    }

  }

  static add_article(command, input){

    model.Article.create({

      title: input[0],
      body: input[1],
      id_author: input[2],
      id_tag: input[3],
      createdAt: new Date,
      updatedAt: new Date

    }).then(item => {

    })

    process.exit()

  }

  static read_one_article(input){

    model.Article.findOne({raw:true, where: {id: input[0]}}).then(item => {
      view.showArticle(item);
    })

    process.exit()


  }

  static read_all_article(input){

    model.Article.findAll({raw:true}).then(items => {
      view.showArticle(items);
    })

    process.exit()


  }

  static update_article(input){

    model.Article.findOne({where: {id: input[0]}}).then(item => {

      switch (input[1]) {

        case 'title': { value.updateAttributes({
                            title: String(input.slice(2).join(' '))
                          }) ;break;}

        case 'body': { value.updateAttributes({
                            body: String(input.slice(2).join(' '))
                          })  ;break;}

        case 'id_author': { value.updateAttributes({
                            id_author: String(input.slice(2))
                          })  ;break;}

        case 'id_tag': { value.updateAttributes({
                            id_tag: String(input.slice(2))
                        })  ;break;}

        default:{return ''}

      }

    })

    process.exit()


  }

  static delete_article(input){

    model.Article.destroy({where: {id: input[0]}}).then(value =>{

    })

    process.exit()

  }

}


module.exports = Article;
