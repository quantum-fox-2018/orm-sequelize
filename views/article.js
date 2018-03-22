var Table = require('cli-table');

class ViewArticle {
    static notifAdd(data){
        console.log(`Data dari View Article :`)
        console.log(data)
    }

    static notifUpdate(data){
        console.log(`Data dari View Article :`)
        console.log(data)
        
    }

    static notifDelete(data){
        console.log(`Data dari View Article :`)
        console.log(data)
        
    }

    static readOne(data){
        console.log(`Data dari View Article :`)
        console.log(data)

    }

    static readAll(data){
        console.log(`Table Article :`)

        var table = new Table({
            head: ['No','Title','Author','Tag','Body']
        , colWidths: [5,20,5,5,30]
        });
        
        let no = 1;
        for(let i=0; i<data.length; i++){
            table.push(
                [no,data[i].title,data[i].authorId,data[i].tagId,data[i].body]
            );
            no++;
        }
        
        console.log(table.toString());
        
    }
}

module.exports = ViewArticle;