const {Article} = require('../models')

class Articles {
  static add(input){
    Article.create({
      title: input[0],
      body: input[1],
      AuthorId: input[2],
      TagId: input[3]
    }).then(newTag=>{
      console.log(newTag.dataValues)
    })
  }

  static readOne(input){
    Article.findOne({
      where: {
        id: input
      }
    }).then(tag=>{
      console.log(tag.dataValues)
    })
  }

  static readAll(){
    Article.findAll({raw:true}).then(tag=>{
      console.log(tag)
    })
  }

  static update(input){
    Article.update({
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
    Article.destroy({
      where: {
        id: input[0]
      }
    })
    console.log('delete')
  }
}

module.exports = Articles
