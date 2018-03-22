const {Tag} = require('../models')

class Tags {
  static add(input){
    Tag.create({
      name: input[0]
    }).then(newTag=>{
      console.log(newTag.dataValues)
    })
  }

  static readOne(input){
    Tag.findOne({
      where: {
        id: input
      }
    }).then(tag=>{
      console.log(tag.dataValues)
    })
  }

  static readAll(){
    Tag.findAll({raw:true}).then(tag=>{
      console.log(tag)
    })
  }

  static update(input){
    Tag.update({
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
    Tag.destroy({
      where: {
        id: input[0]
      }
    })
    console.log('delete')
  }
}

module.exports = Tags
