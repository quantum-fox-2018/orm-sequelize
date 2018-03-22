const Table = require('cli-table');
const Chalk = require('chalk');

class View{
    static showTableAuthor(data){
        let header = Object.keys(data);
        var table = new Table({
            head: header
        });

        for(let index=0; index<data.length; index++){
            table.push([Chalk.blue(data[index].id), Chalk.white(data[index].name), Chalk.green(data[index].createdAt), Chalk.brown(data[index].updatedAt)])
        }

        console.log(table.toString());
    }

    static showTableTag(data){
        let header = Object.keys(data);
        var table = new Table({
            head: header
        });

        for(let index=0; index<data.length; index++){
            table.push([Chalk.blue(data[index].id), Chalk.white(data[index].tagName), Chalk.green(data[index].createdAt), Chalk.brown(data[index].updatedAt)])
        }

        console.log(table.toString());
    }

    static showTableArticle(data){
        let header = Object.keys(data);
        var table = new Table({
            head: header
        });

        for(let index=0; index<data.length; index++){
            table.push([Chalk.blue(data[index].id), Chalk.white(data[index].content), Chalk.green(data[index].createdAt), Chalk.brown(data[index].updatedAt)])
        }

        console.log(table.toString());
    }

    static showMessage(message){
        console.log(message);
    }
    static showHelp(){
        console.log(`==== documentation ===========================================\n
                    author add -> add<space> "data yang ingin dimasukan"\n
                    author read_one -> read_one<space> "masukan id author\n
                    author read_all ->  read_all\n
                    author update -> update<space> "masukin data yang ingin di update dan idnya"
                    author delete -> delete<space> "masukan id author\n
                    tag add -> add<space> "data yang ingin dimasukan"\n
                    tag read_one -> read_one<space> "masukan id tag\n
                    tag read_all ->  read_all\n
                    tag update -> update<space> "masukin data yang ingin di update dan idnya"
                    tag delete -> delete<space> "masukan id tag\n
                    article add -> add<space> "data yang ingin dimasukan"\n
                    article read_one -> read_one<space> "masukan id article\n
                    article read_all ->  read_all\n
                    article update -> update<space> "masukin data yang ingin di update dan idnya"
                    article delete -> delete<space> "masukan id article\n"
                    ==============================================================`)
    }
}

module.exports = View;