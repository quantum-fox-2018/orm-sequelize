const model = require('../models');

class ControllerAuthor {
  static list(callback) {
    model.Author.findAll({raw:true})
    .then(data => {
      callback(data);
    })
  }

  static findOne(id, callback) {
    let author = model.Author.findById(id)
    .then(function(author) {
      callback(author);
    });
  }

  static add(obj, callback) {
    let author = model.Author.build({
      first_name: obj.first_name,
      last_name: obj.last_name,
      religion: obj.religion,
      gender: obj.gender,
      age: obj.age
    })
    author.save({raw:true})
    .then(() => {
      callback(author);
    })
  }

  static update(id, column, value, callback) {
    let author = model.Author.findById(id)
    .then(function(author) {
      author.update({
        [column]: value
      })
      .then(function(authorUpdate) {
        callback(authorUpdate);
      });
    });
  }

  static delete(id, callback) {
    let author = model.Author.findById(id)
    .then(function(author) {
      author.destroy()
      .then(function() {
        callback(author);
      });
    });
  }
}

module.exports = ControllerAuthor;
