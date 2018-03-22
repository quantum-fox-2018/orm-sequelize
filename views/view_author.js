const Chalk = require('chalk')
const Table = require('cli-table')

class ViewAuthor {
    constructor() {
        
    }

    static showList(listAuthor){
        // console.log(listAuthor)
        var table = new Table({
            head : ['ID','Full Name','Religion','Gender', 'Age'],
      
          })
          for(let i=0; i<listAuthor.length; i++){
              table.push([Chalk.green(listAuthor[i].id),
                      Chalk.blue(listAuthor[i].first_name+' '+listAuthor[i].last_name),
                      Chalk.cyan(listAuthor[i].religion),
                      Chalk.yellow(listAuthor[i].gender),
                      Chalk.yellow(listAuthor[i].age)])
            }
      console.log("" + table)
    }


}

module.exports = ViewAuthor