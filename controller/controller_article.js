const Models = require('../models');
const ViewArticle = require('../view/view_article.js');

class ControllerArticle {
  static add(title, idAuthor, idTag, content) {
    Models.Article.create({
      title: title,
      content: content,
      author_id: idAuthor,
      tag_id: idTag
    })
    .then(newArticle => {
      ViewArticle.add(newArticle.dataValues);
    })
    .catch(err => {
      console.log(err);
    })
  }

  static readOne(id) {
    Models.Article.findOne({
      where: {id: id}
    })
    .then(article => {
      ViewArticle.readOne(article);
    })
  }

  static readAll() {
    Models.Article.findAll({
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
    Models.Article.findOne({
      where: {id: id}
    })
    .then(article => {
      article.updateAttributes({
        [column]: values
      })
      .then(result => {
        ViewArticle.update(result.dataValues);
      })
      .catch(err => {
        console.log(err);
      })
    })
  }

  static delete(id) {
    Models.Article.destroy({
      where: {id: id}
    })
    .then(deleted => {
      if (deleted == 1) {
        ViewArticle.delete(`Delete data success`);
      } else {
        ViewArticle.delete(`Delete data failed`);
      }
    })
    .catch(err => {
      console.log(err);
    })
  }
}

module.exports = ControllerArticle;
