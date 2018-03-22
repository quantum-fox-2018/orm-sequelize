const Models = require('../models');
const ViewArticle = require('../view/view_article;');

class ControllerArticle {
  static add() {

  }

  static readOne(id) {
    Models.Contact.findOne({
      where: {id: id}
    })
    .then(article => {
      ViewArticle.readOne(article);
    })
  }

  static readAll() {
    Models.Contact.findAll({
      raw: true
    })
    .then(article => {
      ViewArticle.readAll(article);
    })
    .catch(err => {
      console.log(err);
    })
  }

  static update() {

  }

  static delete() {

  }
}

module.exports = ControllerArticle;
