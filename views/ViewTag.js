const Table = require('cli-table');
const chalk = require('chalk');

var table = new Table({
    head: ['ID', 'Tag Name'],
    colWidths: [5, 20]
});

class ViewTag {
  static list(datas) {
    for(let i in datas) {
      table.push([datas[i].id, datas[i].name]);
    }
    console.log(chalk.green(table.toString()));
    process.exit();
  }

  static add(data) {
    console.log(`Data ${data.name} berhasil ditambahkan`);
    process.exit();
  }

  static delete(data) {
    console.log(`Data ${data.name} berhasil di hapus`);
    process.exit();
  }

  static update(data) {
    console.log(`Data ${data.name} berhasil di update`);
    process.exit();
  }
}

module.exports = ViewTag;
