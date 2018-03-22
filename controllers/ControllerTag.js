const model = require('../models');

class ControllerTag {
  static list(callback) {
    model.Tag.findAll({raw:true})
    .then(data => {
      callback(data);
    })
  }

  static findOne(id, callback) {
    let tag = model.Tag.findById(id)
    .then(function(tag) {
      callback(tag);
    });
  }

  static add(obj, callback) {
    let tag = model.Tag.build({
      name: obj.name
    })
    tag.save({raw:true})
    .then(() => {
      callback(tag);
    })
  }

  static update(id, column, value, callback) {
    let tag = model.Tag.findById(id)
    .then(function(tag) {
      tag.update({
        [column]: value
      })
      .then(function(tagUpdate) {
        callback(tagUpdate);
      });
    });
  }

  static delete(id, callback) {
    let tag = model.Tag.findById(id)
    .then(function(tag) {
      tag.destroy()
      .then(function() {
        callback(tag);
      });
    });
  }
}

module.exports = ControllerTag;
