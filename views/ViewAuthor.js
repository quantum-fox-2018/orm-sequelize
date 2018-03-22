const Table = require('cli-table');
const chalk = require('chalk');

var table = new Table({
    head: ['ID', 'First Name', 'Last Name', 'Religion', 'Gender', 'Age'],
    colWidths: [5, 15, 15, 12, 12, 8]
});

class ViewAuthor {
  static list(datas) {
    for(let i in datas) {
      table.push([datas[i].id, datas[i].first_name, datas[i].last_name, datas[i].religion, datas[i].gender, datas[i].age]);
    }
    console.log(chalk.green(table.toString()));
    process.exit();
  }

  static add(data) {
    console.log(`Data ${data.first_name} berhasil ditambahkan`);
    process.exit();
  }

  static delete(data) {
    console.log(`Data ${data.first_name} berhasil di hapus`);
    process.exit();
  }

  static update(data) {
    console.log(`Data ${data.first_name} berhasil di update`);
    process.exit();
  }
}

module.exports = ViewAuthor;
