const {Author} = require('../models')
const {ViewAuthor} = require('../views')
const Chalk = require('chalk')

class AuthorControl {
    constructor() {
        
    }

    static addAuthor(option){
        Author.create({
            first_name: option[1],
            last_name: option[2],
            religion: option[3],
            gender: option[4],
            age: option[5]
        })  
        .then(authorData => {
            let author = []
            author.push(authorData)
            ViewAuthor.showList(author)
            console.log(Chalk.red('ADD NEW Author SUCCESS!!!!'))
            process.exit()
        })
        .catch((err) =>{
            console.log(err)
        })
              
    }

    static readOne(option){
        Author.findOne({
            where: {
                id: option[1]
            }
        })
        .then(authorData => {
            let author = []
            author.push(authorData)
            ViewAuthor.showList(author)
            process.exit()
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    static readAll(){
        Author.findAll({raw:true})
        .then(authorData => {
            ViewAuthor.showList(authorData)
            process.exit()
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    static updateAuthor(option){
        let column = option[1]
        let authorId = option[2]
        let value = option[3]
        Author.update({
            [column]: value
        }, { 
            where: {
                id: authorId
            }
        })
        .then(()=> {
            console.log(Chalk.red(`UPDATE Author WITH ID "${authorId}" SUCCESS!!!!`))
            process.exit()
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    static deleteAuthor(option){
        Author.destroy({
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

module.exports = AuthorControl