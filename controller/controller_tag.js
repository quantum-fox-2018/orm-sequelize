const Models = require('../models');
const ViewTag = require('../view/view_tag.js');

class ControllerTag {
  static add(tag_name) {
    Models.Tag.create({
      tag_name: tag_name
    })
    .then(newTag => {
      ViewTag.add(newTag.dataValues);
    })
    .catch(err => {
      console.log(err);
    })
  }

  static readOne(id) {
    Models.Tag.findOne({
      where: {id: id}
    })
    .then(tag => {
      ViewTag.readOne(tag.dataValues);
    })
  }

  static readAll() {
    Models.Tag.findAll({
      raw: true
    })
    .then(tag => {
      ViewTag.readAll(tag);
    })
    .catch(err => {
      console.log(err);
    })
  }

  static update(id, column, values) {
    Models.Tag.findOne({
      where: {id: id}
    })
    .then(Tag => {
      Tag.updateAttributes({
        [column]: values
      })
      .then(result => {
        ViewTag.update(result.dataValues);
      })
      .catch(err => {
        console.log(err);
      })
    })
  }

  static delete(id) {
    Models.Tag.destroy({
      where: {id: id}
    })
    .then(deleted => {
      if (deleted == 1) {
        ViewTag.delete(`Delete data success`);
      } else {
        ViewTag.delete(`Delete data failed`);
      }
    })
    .catch(err => {
      console.log(err);
    })
  }
}

module.exports = ControllerTag;
