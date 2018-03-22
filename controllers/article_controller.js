const {Article} = require('../models')
const {ViewArticle} = require('../views')
const Chalk = require('chalk')

class ArticleControl {
    constructor() {
        
    }

    static addArticle(option){
        Article.create({
            title: option[1],
            body: option[2],
            id_author: option[3],
            id_tag: option[4]
        })  
        .then(ArticleData => {
            let Article = []
            Article.push(ArticleData)
            ViewArticle.showList(Article)
            console.log(Chalk.red('ADD NEW Article SUCCESS!!!!'))
            process.exit()
        })
        .catch((err) =>{
            console.log(err)
        })
              
    }

    static readOne(option){
        Article.findOne({
            where: {
                id: option[1]
            }
        })
        .then(ArticleData => {
            let Article = []
            Article.push(ArticleData)
            ViewArticle.showList(Article)
            process.exit()
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    static readAll(){
        Article.findAll({raw:true})
        .then(ArticleData => {
            ViewArticle.showList(ArticleData)
            process.exit()
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    static updateArticle(option){
        let column = option[1]
        let ArticleId = option[2]
        let value = option[3]
        Article.update({
            [column]: value
        }, { 
            where: {
                id: ArticleId
            }
        })
        .then(()=> {
            console.log(Chalk.red(`UPDATE Article WITH ID "${ArticleId}" SUCCESS!!!!`))
            process.exit()
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    static deleteArticle(option){
        Article.destroy({
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

module.exports = ArticleControl