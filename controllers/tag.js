const Models = require('../models/index')
const Views = require('../views/tag')

class ControllerTag {
    static add(name){
        Models.Tag.create({
            name: name,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        .then(row => {
            Views.notifAdd(`Data ${name} berhasil ditambahkan`)
            process.exit();
        })
    }

    static readOne(id){
        Models.Tag.findById(id)
        .then(row => {
            Views.readOne(row.dataValues)
            process.exit();
        })
    }

    static readAll(){
        Models.Tag.findAll({raw:true})
        .then(row => {
            Views.readAll(row)
            process.exit();
        })
    }

    static update(id, column, newValue){
        Models.Tag.update({
            [column]: newValue,
            updatedAt: new Date()
        }, {
            where: { id:id }
        })
        .then(() => {
            Views.notifUpdate(`Data ${id} berhasil dirubah..`)
            process.exit();
        })
    }

    static erase(id){
        Models.Tag.destroy({
            where: {id:id}
        })
        .then(() => {
            Views.notifErase(`Data ${id} berhasil dihapus..`)
            process.exit();
        })
    }
}

module.exports = ControllerTag;