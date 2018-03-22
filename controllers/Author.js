const {Author} = require('../models')

class Authors {
  static add(input){
    Author.create({
      firstName: input[0],
      lastName: input[1],
      religion: input[2],
      gender: input[3],
      age: input[4]
    }).then(newAuthor=>{
      console.log(newAuthor.dataValues)
    })
  }

  static readOne(input){
    Author.findOne({
      where: {
        id: input
      }
    }).then(contacts=>{
      console.log(contacts.dataValues)
    })
  }

  static readAll(){
    Author.findAll({raw:true}).then(contacts=>{
      console.log(contacts)
    })
  }

  static update(input){
    Author.update({
      [input[1]]:input[2],
      updatedAt: new Date()
    },{
      where: {
        id: input[0]
      }
    })
    console.log('update')
  }

  static delete(input){
    Author.destroy({
      where: {
        id: input[0]
      }
    })
    console.log('delete')
  }
}

module.exports = Authors
