const Models = require('../models');
const ViewArticle = require('../view/view_article;');

class ControllerArticle {
  static add(title, idAuthor, idTag, content) {
    Models.Articles.create({
      title: title,
      content: content
      id_author: idAuthor,
      id_tag: idTag
    })
    .then(newArticles => {
      View.add(newArticles.dataValues);
    })
    .catch(err => {
      console.log(err);
    })
  }

  static readOne(id) {
    Models.Articles.findOne({
      where: {id: id}
    })
    .then(article => {
      ViewArticle.readOne(article);
    })
  }

  static readAll() {
    Models.Articles.findAll({
      raw: true
    })
    .then(article => {
      ViewArticle.readAll(article);
    })
    .catch(err => {
      console.log(err);
    })
  }

  static update(id, column, values) {
    Models.Articles.findOne({
      where: {id: id}
    })
    .then(article => {
      article.updateAttributes({
        [column]: values
      })
      .then(result => {
        View.update(result.dataValues);
      })
      .catch(err => {
        console.log(err);
      })
    })
  }

  static delete(id) {
    Models.Articles.destroy({
      where: {id: id}
    })
    .then(deleted => {
      if (deleted == 1) {
        View.delete(`Delete data success`);
      } else {
        View.delete(`Delete data failed`);
      }
    })
  }
}

module.exports = ControllerArticle;
