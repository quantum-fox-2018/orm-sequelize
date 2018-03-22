var Table = require('cli-table');
const chalk = require('chalk');

class ViewTag {
    static notifAdd(data){
        console.log(`Data dari View Tag :`)
        console.log(data)
    }

    static notifUpdate(data){
        console.log(`Data dari View Tag :`)
        console.log(data)
    }

    static notifErase(data){
        console.log(`Data dari View Tag :`)
        console.log(data)
    }

    static readOne(data){
        console.log(`Data dari View Tag :`)
        console.log(data)
    }

    static readAll(data){
        console.log(`Data dari View Tag :`)

        var table = new Table({
            head: ['No','Name']
        , colWidths: [5, 15]
        });

        let no = 1;
        for(let i=0; i<data.length; i++){
            table.push(
                [no,data[i].name]
            );
            no++;
        }
        
        console.log(table.toString());
    }
}

module.exports = ViewTag;