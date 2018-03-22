const Model = require('../models/index.js');
const ViewAuthor = require('../view/author.js').ViewAuthor;

class ControllerAuthor {

  static readAll(){
    Model.Author.findAll({raw:true}).then(authorsData => {

      ViewAuthor.showAll(authorsData);
      process.exit();
    })
  }

  static readId(author_id){
    Model.Author.findById(author_id,{raw:true}).then(authorData => {

      ViewAuthor.showId(authorData);
      process.exit();
    })

  }

  static add(first_name,last_name,gender,age){

    Model.Author.create({ first_name: first_name, last_name: last_name, gender: gender, age:age })
    .then(() => Model.Author.findOrCreate({where: {first_name: first_name}, defaults: {age: age}}))
    .spread((Author) => {
      ViewAuthor.add(Author.get({
    }))
      process.exit();
    })
  }

  static update(author_id,column,value){

    const newData = {
      [column]: value
    };

    Model.Author.update(newData, {where: { id: author_id } })
    .then(()=> {
      ViewAuthor.update();
      process.exit()
    })
  }

  static delete(author_id){

    Model.Author.destroy({
      where: { id: author_id }
    })
    .then(() =>{
      ViewAuthor.delete()
      process.exit()
    });
  }

  static help(){

    ViewAuthor.help()
  }

}

module.exports = {ControllerAuthor};
