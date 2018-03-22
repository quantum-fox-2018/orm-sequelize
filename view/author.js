const chalk = require('chalk');
var Table = require('cli-table');

class ViewAuthor{

  static showAll(authors_data){

    var table = new Table({
        head: ['ID', 'First Name', 'Last Name', 'Age', 'Gender']
      , colWidths: [10, 20,20,20,20]
    });

    for(let i=0;i<authors_data.length;i++){
      let authorObj = authors_data[i];
      let tableData = [chalk.magenta(authorObj.id), chalk.cyan(authorObj.first_name), chalk.blue(authorObj.last_name), authorObj.age, chalk.yellow(authorObj.gender)];
      table.push(tableData);
    }
    console.log(table.toString());
  }

  static showId(author_data){

    let authorObj = author_data;

    var table = new Table({
        head: ['ID', 'First Name', 'Last Name', 'Age', 'Gender']
      , colWidths: [10, 20,20,20,20]
    });

    let tableData = [chalk.magenta(authorObj.id), chalk.cyan(authorObj.first_name), chalk.blue(authorObj.last_name), authorObj.age, chalk.yellow(authorObj.gender)];
    table.push(tableData);

    console.log(table.toString());
  }

  static add(author_data){

    let authorObj = author_data;

    var table = new Table({
        head: ['ID', 'First Name', 'Last Name', 'Age', 'Gender']
      , colWidths: [10, 20,20,20,20]
    });

    let tableData = [chalk.magenta(authorObj.id), chalk.cyan(authorObj.first_name), chalk.blue(authorObj.last_name), authorObj.age, chalk.yellow(authorObj.gender)];
    table.push(tableData);

    console.log(table.toString());
  }

  static delete(){
    console.log("Data telah berhasil terhapus");
  }

  static update(){
    console.log("Data sudah berhasil terupdate");
  }

  static help(){

    console.log(`author add -> add<space> "data yang ingin dimasukan"`);
    console.log(`author readId -> readId<space> "id yang ingin dimasukan"`);
    console.log(`author readAll -> readAll`);
    console.log(`author update -> update<space> "data yang ingin dimasukan"`);
    console.log(`author delete -> delete<space> "id yang ingin didelete"`);
    console.log(`tag add -> add<space> "data yang ingin dimasukan"`);
    console.log(`tag readId -> readId<space> "id yang ingin dimasukan"`);
    console.log(`tag readAll -> readAll`);
    console.log(`tag update -> update<space> "data yang ingin dimasukan"`);
    console.log(`tag delete -> delete<space> "id yang ingin didelete"`);
    console.log(`article add -> add<space> "data yang ingin dimasukan"`);
    console.log(`article readId -> readId<space> "id yang ingin dimasukan"`);
    console.log(`article readAll -> readAll`);
    console.log(`article update -> update<space> "data yang ingin dimasukan"`);
    console.log(`article delete -> delete<space> "id yang ingin didelete"`);

  }
}

module.exports = {ViewAuthor};
