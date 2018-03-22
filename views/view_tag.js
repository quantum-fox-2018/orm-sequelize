const Chalk = require('chalk')
const Table = require('cli-table')

class ViewTag {
    constructor() {
        
    }

    static showList(listTag){
        var table = new Table({
            head : ['ID','Tag Name'],
            colWidths: [10, 25]
      
          })
          for(let i=0; i<listTag.length; i++){
              table.push([Chalk.green(listTag[i].id),
                      Chalk.blue(listTag[i].name)])
            }
      console.log("" + table)
    }


}

module.exports = ViewTag