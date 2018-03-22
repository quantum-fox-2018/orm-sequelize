const {Tag} = require('../models')
const {ViewTag} = require('../views')
const Chalk = require('chalk')

class TagControl {
    constructor() {
        
    }

    static addTag(option){
        Tag.create({
            name: option[1]
        })  
        .then(TagData => {
            let Tag = []
            Tag.push(TagData)
            ViewTag.showList(Tag)
            console.log(Chalk.red('ADD NEW Tag SUCCESS!!!!'))
            process.exit()
        })
        .catch((err) =>{
            console.log(err)
        })
              
    }

    static readOne(option){
        Tag.findOne({
            where: {
                id: option[1]
            }
        })
        .then(TagData => {
            let Tag = []
            Tag.push(TagData)
            ViewTag.showList(Tag)
            process.exit()
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    static readAll(){
        Tag.findAll({raw:true})
        .then(TagData => {
            ViewTag.showList(TagData)
            process.exit()
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    static updateTag(option){
        let column = option[1]
        let TagId = option[2]
        let value = option[3]
        Tag.update({
            [column]: value
        }, { 
            where: {
                id: TagId
            }
        })
        .then(()=> {
            console.log(Chalk.red(`UPDATE Tag WITH ID "${TagId}" SUCCESS!!!!`))
            process.exit()
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    static deleteTag(option){
        Tag.destroy({
            where: {
                id: option[1]
            }
        })
        .then(()=>{
            console.log(Chalk.red(`DATA ID "${option[1]}" HAS BEEN DELETED!!!!`))
            process.exit()
        })
        .catch(err => {
            console.log(err)
        })
    }

}

module.exports = TagControl