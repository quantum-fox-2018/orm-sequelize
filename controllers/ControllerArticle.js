const model = require('../models');

class ControllerArticle {
  static list(callback) {
    model.Article.findAll({raw:true})
    .then(data => {
      callback(data);
    })
  }

  static findOne(id, callback) {
    let article = model.Article.findById(id)
    .then(function(article) {
      callback(article);
    });
  }

  static add(obj, callback) {
    let article = model.Article.build({
      title: obj.title,
      body: obj.body,
      id_author: obj.id_author,
      id_tag: obj.id_tag
    })
    article.save({raw:true})
    .then(() => {
      callback(article);
    })
  }

  static update(id, column, value, callback) {
    let article = model.Article.findById(id)
    .then(function(article) {
      article.update({
        [column]: value
      })
      .then(function(articleUpdate) {
        callback(articleUpdate);
      });
    });
  }

  static delete(id, callback) {
    let Article = model.Article.findById(id)
    .then(function(Article) {
      Article.destroy()
      .then(function() {
        callback(Article);
      });
    });
  }
}

module.exports = ControllerArticle;
