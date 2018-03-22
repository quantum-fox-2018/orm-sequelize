const models = require('../models')
const View = require('../views/views')

class Controller {
  static routes(argv) {
    let tableName = ''
    let keys = ''

    if(argv[2] == 'author') {
      tableName = 'Author'
      keys = ['first_name', 'last_name', 'religion', 'gender', 'age']
    } else if(argv[2] == 'article') {
      tableName = 'Article'
      keys = ['title', 'body']
    } else if(argv[2] == 'tag') {
      tableName = 'Tag'
      keys = ['name']
    }


    let command = argv[3]
    switch (command) {
      case 'add':
      let data = argv.splice(4)

      let obj = {}
      for(let i=0; i<keys.length; i++) {
        obj[keys[i]] = data[i]
      }

      models[tableName].create(obj)
      .then(data => {
        View.printLine(`data berhasil ditambahkan!`)
      })
      .catch(err => {
        View.printLine(err)  
      })
      break;

      case 'read_one':
      models[tableName].findById(argv[4])
      .then(data => {
        View.printTable(data.dataValues)  
      })
      .catch(err => {
        View.printLine(err)  
      })
      break;

      case 'read_all':
      models[tableName].findAll({
        raw: true
      })
      .then(data => {
        View.printTable(data)  
      })
      .catch(err => {
        View.printLine(err)  
      })
      break;

      case 'update':
      models[tableName].update({
        [[argv[5]]]: argv[6]
      },{
        where: {
          id: argv[4]
        }
      })
      .then(info => {
        if(info == 1) {
          View.printLine('Data berhasil diupdate!')
        } else {
          View.printLine('Tidak ada data dengan id tersebut, mohon di cek kembali')
        }
      })
      .catch(err => {
        View.printLine(err)  
      })
      break;

      case 'delete':
      models[tableName].destroy({
        where: {
          id: argv[4]
        }
      })
      .then(info => {
        if(info == 1) {
          View.printLine('Data berhasil dihapus!')
        } else {
          View.printLine('Tidak ada data dengan id tersebut, mohon di cek kembali')
        }
      })
      .catch(err => {
        View.printLine(err)  
      })
      break;

      case 'help':
      View.help(); break;

      default: View.help(); break;
    }
  }
}

module.exports = Controller