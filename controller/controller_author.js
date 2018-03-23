const Models = require('../models');
const ViewAuthor = require('../view/view_author.js');

class ControllerAuthor {
  static add(first_name, last_name, religion, gender, age) {
    Models.Author.create({
      first_name: first_name,
      last_name: last_name,
      religion: religion,
      gender: gender,
      age: age
    })
    .then(newAuthor => {
      ViewAuthor.add(newAuthor.dataValues);
    })
    .catch(err => {
      console.log(err);
    })
  }

  static readOne(id) {
    Models.Author.findOne({
      where: {id: id}
    })
    .then(author => {
      ViewAuthor.readOne(author.dataValues);
    })
  }

  static readAll() {
    Models.Author.findAll({
      raw: true
    })
    .then(author => {
      ViewAuthor.readAll(author);
    })
    .catch(err => {
      console.log(err);
    })
  }

  static update(id, column, values) {
    Models.Author.findOne({
      where: {id: id}
    })
    .then(author => {
      author.updateAttributes({
        [column]: values
      })
      .then(result => {
        ViewAuthor.update(result.dataValues);
      })
      .catch(err => {
        console.log(err);
      })
    })
  }

  static delete(id) {
    Models.Author.destroy({
      where: {id: id}
    })
    .then(deleted => {
      if (deleted == 1) {
        ViewAuthor.delete(`Delete data success`);
      } else {
        ViewAuthor.delete(`Delete data failed`);
      }
    })
    .catch(err => {
      console.log(err);
    })
  }
}

module.exports = ControllerAuthor;
