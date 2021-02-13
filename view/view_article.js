const Table = require('cli-table');
var table = new Table({
    head: [
      'ID',
      'Title',
      'Author',
      'Tag',
      'Content',
    ]
  , colWidths: [5, 15, 15, 15, 35]
});

class ViewArticle {
  static readAll(result) {
    for (let i in result) {
      table.push([
        result[i].id,
        result[i].title,
        result[i].author_id,
        result[i].tag_id,
        result[i].content
      ])
    }
    console.log(table.toString());
    process.exit();
  }

  static readOne(result) {
    table.push([
      result.id,
      result.title,
      result.author_id,
      result.tag_id,
      result.content
    ]);
    console.log(table.toString());
    process.exit();
  }

  static add(result) {
    table.push([
      result.id,
      result.title,
      result.author_id,
      result.tag_id,
      result.content
    ]);
    console.log(table.toString());
    process.exit();
  }

  static update(result) {
    table.push([
      result.id,
      result.title,
      result.author_id,
      result.tag_id,
      result.content
    ]);
    console.log(table.toString());
    process.exit();
  }

  static delete(result) {
    console.log(result);
    process.exit();
  }
}

module.exports = ViewArticle;
