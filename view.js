const Controller = require('./controller.js');

class View {
  constructor() {

  }

  static help() {
    console.log(`==== documentation =======================`);
    console.log(`author add -> add<space>"data yang ingin dimasukkan"`);
    console.log(`author read_one -> read_one<space> "masukkan id author"`);
    console.log(`read_all -> read_all`);
    console.log(`author update -> update<space> "masukkan data yang ingin diupdate dan idnya"`);
    console.log(`author delete -> delete<space> "masukkan id author"`);
    console.log(`tag add -> add<space> "data yang ingin dimasukkan"`);
    console.log(`tag read_one -> read_one<space> "masukkan id tag"`);
    console.log(`tag read_all -> read_all`);
    console.log(`tag update -> update<space> "masukkan data yang ingin diupdate beserta idnya"`);
    console.log(`tag delete -> delete<space> 'masukkan id author'`);
    console.log(`article add -> add<space> "data yang ingin dimasukkan"`);
    console.log(`article read_one -> read_one<space> "masukkan id article"`);
    console.log(`article read_all -> read_all`);
    console.log(`article update -> update<space> "masukkan data yang ingin diupdate dan idnya"`);
    console.log(`article delete -> delete<space> "masukkan id author"`);
    console.log(`==============================================`);
  }

  static addAuthor(input) {
    console.log(`=== your result ======================`);
    console.log(`data ${input.first_name} berhasil ditambahkan`);
    console.log(`==============================================`);
    process.exit()
  }

  static chooseOneAuthor(value) {
    console.log(`=== your result ======================`);
    console.log(value);
    console.log(`==============================================`);
    process.exit();
  }

  static allAuthorData(value) {
    console.log(`=== your result ======================`);
    console.log(value);
    console.log(`==============================================`);
    process.exit();
  }

  static authorUpdate(value) {
    console.log(`=== your result ======================`);
    console.log(`${value[0]} data updated}`);
    console.log(`==============================================`);
    process.exit();
  }

  static authorDelete(value) {
    console.log(`=== your result ======================`);
    console.log('data deleted');
    console.log(`==============================================`);
    process.exit();
  }
}

module.exports = View;
