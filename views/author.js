var Table = require('cli-table');

class ViewAuthor {
    static notifAdd(notif){
        console.log('Data dari View Author :')
        console.log(notif)
    }

    static notifUpdate(data){
        console.log('Data dari View Author :')
        console.log(data)
    }

    static notifErase(data){
        console.log('Data dari View Author :')
        console.log(data)
    }

    static findOne(data){
        console.log('Data dari View Author :')
        console.log(data)
    }

    static findAll(data){
        console.log('Data dari View Author :')
        
        var table = new Table({
            head: ['No','Fullname','Religion','Gender','Age']
        , colWidths: [5,20,10,10,8]
        });
        
        let no = 1;
        for(let i=0; i<data.length; i++){
            table.push(
                [no,`${data[i].first_name} ${data[i].first_name}`,data[i].religion,data[i].gender,data[i].age]
            );
            no++;
        }
        
        console.log(table.toString());
    }
}

module.exports = ViewAuthor;