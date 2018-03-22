const Model = require('../models/index.js');
const ViewTag = require('../view/tag.js').ViewTag;

class ControllerTag {

  static readAll(){
    Model.Tag.findAll({raw:true}).then(tagsData => {

      ViewTag.showAll(tagsData);
      process.exit();
    })
  }

  static readId(Tag_id){
    Model.Tag.findById(Tag_id,{raw:true}).then(tagData => {

      ViewTag.showId(tagData);
      process.exit();
    })

  }

  static add(tag_name, category){

    Model.Tag.create({ tag_name: tag_name, category:category })
    .then(() => Model.Tag.findOrCreate({where: {tag_name: tag_name}, defaults: {category: category}}))
    .spread((Tag) => {
      ViewTag.add(Tag.get({
    }))
      process.exit();
    })
  }

  static update(Tag_id,column,value){

    const newData = {
      [column]: value
    };

    Model.Tag.update(newData, {where: { id: Tag_id } })
    .then(()=> {
      ViewTag.update();
      process.exit()
    })
  }

  static delete(Tag_id){

    Model.Tag.destroy({
      where: { id: Tag_id }
    })
    .then(() =>{
      ViewTag.delete()
      process.exit()
    });
  }

  static help(){

    ViewTag.help()
  }

}

module.exports = {ControllerTag};
