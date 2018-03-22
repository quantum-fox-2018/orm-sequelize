const Table = require('cli-table');

class View {
  static printLine(str) {
    console.log(str)
    process.exit()
  }

  static printTable(data) {
    let keys;
    if(data.length > 1) {
      keys = Object.keys(data[0])
    } else {
      keys = Object.keys(data)
    }

    var table = new Table({
      head: keys,
      // colWidths: [100, 200]
    });

    let values;
    if(data.length > 1) {
      data.forEach(list => {
        values = Object.values(list)
        table.push(values);
      });
    } else {
      values = Object.values(data)
      table.push(values);
    }

    console.log(table.toString());
    process.exit()
  }

  static help() {
    var table = new Table({
      head: ['command', 'description'],
      // colWidths: [100, 200]
    });

    table.push(
      ['author add', "add<space>'first_name', 'last_name', 'religion', 'gender', 'age'"],
      ['author read_one', 'read_one<space>"masukan id author"'],
      ['author read_all', 'read_all'],
      ['author update', 'update<space>"masukkan id"<space>"masukkan nama kolom"<space>"masukkan value baru"'],
      ['author delete', 'delete<space>"masukkan id author"'],
      ['tag add', "add<space>'name'"],
      ['tag read_one', 'read_one<space>"masukan id tag"'],
      ['tag read_all', 'read_all'],
      ['tag update', 'update<space>"masukkan id"<space>"masukkan nama kolom"<space>"masukkan value baru"'],
      ['tag delete', 'delete<space>"masukkan id tag"'],
      ['article add', "add<space>'title', 'body'"],
      ['article read_one', 'read_one<space>"masukan id article"'],
      ['article read_all', 'read_all'],
      ['article update', 'update<space>"masukkan id"<space>"masukkan nama kolom"<space>"masukkan value baru"'],
      ['article delete', 'delete<space>"masukkan id article"'],
    );
    console.log(table.toString());
  }
}

module.exports = View