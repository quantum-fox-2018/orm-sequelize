const Table = require('cli-table');
var table = new Table({
    head: [
      'ID',
      'Tag Name'
    ]
  , colWidths: [5, 15]
});

class View {
  static readAll(result) {
    for (let i in result) {
      table.push([
        result[i].id,
        result[i].tag_name
      ])
    }
    console.log(table.toString());
    process.exit();
  }

  static readOne(result) {
    table.push([
      result.id,
      result.tag_name
    ]);
    console.log(table.toString());
    process.exit();
  }

  static add(result) {
    table.push([
      result.id,
      result.tag_name
    ]);
    console.log(table.toString());
    process.exit();
  }

  static update(result) {
    table.push([
      result.id,
      result.tag_name
    ]);
    console.log(table.toString());
    process.exit();
  }

  static delete(result) {
    table.push([
      result.id,
      result.tag_name
    ]);
    console.log(table.toString());
    process.exit();
  }
}

module.exports = View;
