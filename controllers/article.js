const Models = require('../models/index');
const Views = require('../views/article');

class ControllerArticle {
    static add(title,authorID,tagID,body){
        Models.Article.create({
            title: title,
            authorId: authorID,
            tagId: tagID,
            body: body,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        .then(row => {
            Views.notifAdd(`DATA BERHASIL DITAMBAHKAN`)
            process.exit()
        })
    }

    static readOne(id){
        Models.Article.findById(id)
        .then(row => {
            Views.readOne(row.dataValues)
            process.exit()
        })
    }

    static readAll(){
        Models.Article.findAll({raw:true})
        .then(row => {
            Views.readAll(row)
            process.exit()
        })
    }

    static update(id,column,newValue){
        Models.Article.update({
            [column]: newValue,
            updatedAt: new Date()
        }, {
            where: { id:id }
        })
        .then(() => {
            Views.notifUpdate(`DATA BERHASIL DIUBAH`)
            process.exit()
        })
    }

    static erase(id){
        Models.Article.destroy({
            where: { id:id }
        })
        .then(() => {
            Views.notifDelete(`DATA ${id} BERHASIL DIHAPUS`)
            process.exit()
        })
    }

}

module.exports = ControllerArticle;