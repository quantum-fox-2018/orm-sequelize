const chalk = require('chalk');
var Table = require('cli-table');

class ViewArticle{

  static showAll(articles_data){

    var table = new Table({
        head: ['ID', 'Title', 'Author', 'Pages']
      , colWidths: [10, 20,20,20]
    });

    for(let i=0;i<articles_data.length;i++){
      let authorObj = articles_data[i];
      let tableData = [chalk.magenta(authorObj.id), chalk.cyan(authorObj.title), chalk.blue(authorObj.author), chalk.green(authorObj.pages)];
      table.push(tableData);
    }
    console.log(table.toString());
  }

  static showId(article_data){

    let authorObj = article_data;

    var table = new Table({
        head: ['ID', 'Title', 'Author', 'Pages']
      , colWidths: [10, 20,20,20]
    });

    let tableData = [chalk.magenta(authorObj.id), chalk.cyan(authorObj.title), chalk.blue(authorObj.author), chalk.green(authorObj.pages)];
    table.push(tableData);

    console.log(table.toString());
  }

  static add(article_data){

    let authorObj = article_data;

    var table = new Table({
        head: ['ID', 'Title', 'Author', 'Pages']
      , colWidths: [10, 20,20,20]
    });

    let tableData = [chalk.magenta(authorObj.id), chalk.cyan(authorObj.title), chalk.blue(authorObj.author), chalk.green(authorObj.pages)];
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

module.exports = {ViewArticle};
