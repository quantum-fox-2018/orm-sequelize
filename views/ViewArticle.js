const Table = require('cli-table');
const chalk = require('chalk');

var table = new Table({
    head: ['ID', 'Title', 'Data', 'ID Author', 'ID Tag'],
    colWidths: [5, 20, 30, 11, 11]
});

class ViewArticle {
  static list(datas) {
    for(let i in datas) {
      table.push([datas[i].id, datas[i].title, datas[i].body, datas[i].id_author, datas[i].id_tag]);
    }
    console.log(chalk.green(table.toString()));
    process.exit();
  }

  static add(data) {
    console.log(`Data ${data.title} berhasil ditambahkan`);
    process.exit();
  }

  static delete(data) {
    console.log(`Data ${data.title} berhasil di hapus`);
    process.exit();
  }

  static update(data) {
    console.log(`Data ${data.title} berhasil di update`);
    process.exit();
  }
}

module.exports = ViewArticle;
