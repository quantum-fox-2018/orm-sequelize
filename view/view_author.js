const chalk = require('chalk');
const log = console.log;
const Table = require('cli-table');
var table = new Table({
    head: [
      'ID',
      `First Name`,
      'Last Name',
      'Religion',
      'Gender',
      'Age'
    ]
  , colWidths: [5, 15, 15, 15, 15, 10]
});

class ViewAuthor {
  static readAll(result) {
    for (let i in result) {
      table.push([
        result[i].id,
        chalk.blue(result[i].first_name),
        chalk.bgRed(result[i].last_name),
        chalk.yellow(result[i].religion),
        chalk.green(result[i].gender),
        chalk.bgBlack(result[i].age)
      ])
    }
    console.log(table.toString());
    process.exit();
  }

  static readOne(result) {
    table.push([
      result.id,
      result.first_name,
      result.last_name,
      result.religion,
      result.gender,
      result.age
    ]);
    console.log(table.toString());
    process.exit();
  }

  static add(result) {
    table.push([
      result.id,
      result.first_name,
      result.last_name,
      result.religion,
      result.gender,
      result.age
    ]);
    console.log(table.toString());
    process.exit();
  }

  static update(result) {
    table.push([
      result.id,
      result.first_name,
      result.last_name,
      result.religion,
      result.gender,
      result.age
    ]);
    console.log(table.toString());
    process.exit();
  }

  static delete(result) {
    console.log(result);
    process.exit();
  }
}

module.exports = ViewAuthor;
