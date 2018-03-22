const Chalk = require('chalk')
const Table = require('cli-table')

class ViewArticle {
    constructor() {
        
    }

    static showList(listArticle){
        var table = new Table({
            head : ['ID','Title','Body','ID Author', 'ID Tag'],
            colWidths: [10, 35, 60, 10, 10]
      
          })
          for(let i=0; i<listArticle.length; i++){
              table.push([Chalk.green(listArticle[i].id),
                      Chalk.blue(listArticle[i].title),
                      Chalk.cyan(listArticle[i].body),
                      Chalk.yellow(listArticle[i].id_author),
                      Chalk.yellow(listArticle[i].id_tag)])
            }
      console.log("" + table)
    }


}

module.exports = ViewArticle