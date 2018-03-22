const Models = require('../models/index');
const Views = require('../views/author')

class ControllerAuthor {
    static add(firstName, lastName, religion, gender, age){
        Models.Author.create({
            first_name: firstName,
            last_name: lastName,
            religion: religion,
            gender: gender,
            age: age,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        .then(row => {
            Views.notifAdd(`Data ${row.dataValues.first_name} ${row.dataValues.last_name} berhasil diinput :)`)
            process.exit()
        })
    }

    static readOne(id){
         Models.Author.findById(id)
         .then(row => {
             Views.findOne(row.dataValues)
             process.exit();
         })
    }

    static readAll(){
        Models.Author.findAll({raw:true})
        .then(row => {
            Views.findAll(row)
            process.exit();
        })
    }

    static update(id, column, updateValue){
        Models.Author.update({
            [column]: updateValue,
            updatedAt: new Date()
        },{
            where: { id:id }
        })
        .then(() => {
            Views.notifUpdate(`Data ${id} berhasil terupdate`)
            process.exit();
        })
        .catch(err => {
            console.log(err)
        })

    }

    static erase(id){
        Models.Author.destroy({
            where: {id:id}
        })
        .then(() => {
            Views.notifErase(`Data ${id} berhasil dihapus`)
            process.exit();
        })
    }
}

module.exports = ControllerAuthor;