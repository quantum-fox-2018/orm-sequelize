const ControllerAuthor = require('./controller/controller_author');
const ControllerTag = require('./controller/controller_tag');
const ControllerArticle = require('./controller/controller_article');

let input = process.argv;
let classCmd = input[2];
let command = input[3];


if (classCmd == 'help') {
  let help = [
    [`===== documentation ============================================================`],
    [`author add -> add<space> "data yang ingin dimasukkan"`],
    [`author read_one -> read_one<space> "masukkan id author"`],
    [`author read_all -> read_all<space>`],
    [`author update -> update<space> "masukkan data yang ingin di update dan idnya"`],
    [`author delete -> delete<space> "masukkan id author"`],
    [`tag add -> add<space> "data yang ingin dimasukkan"`],
    [`tag read_one -> read_one<space> "masukkan id tag"`],
    [`tag read_all -> read_all<space>`],
    [`tag update -> update<space> "masukkan data yang ingin di update dan idnya"`],
    [`tag delete -> delete<space> "masukkan id tag"`],
    [`article add -> add<space> "data yang ingin dimasukkan"`],
    [`article read_one -> read_one<space> "masukkan id article"`],
    [`article read_all -> read_all<space>`],
    [`article update -> update<space> "masukkan data yang ingin di update dan idnya"`],
    [`article delete -> delete<space> "masukkan id article"`],
    [`===============================================================================`]
  ];

  console.log(help.join('\n'));
}

else if (classCmd == 'author') {
  switch (command) {
    case 'add':
      ControllerAuthor.add(
        input[3],
        input[4],
        input[5],
        input[6],
        input[7],
      );
      break;
    case 'read_one':
      ControllerAuthor.readOne(input[3]);
      break;
    case 'read_all':
      ControllerAuthor.readAll();
      break;
    case 'update':
      ControllerAuthor.update(input[3], input[4], input[5]);
      break;
    case 'delete':
      ControllerAuthor.delete(input[3]);
      break;
    default:
  }
}

else if (classCmd == 'tag') {
  switch (command) {
    case 'add':
      ControllerTag.add(input[3]);
      break;
    case 'read_one':
      ControllerTag.readOne(input[3]);
      break;
    case 'read_all':
      ControllerTag.readAll();
      break;
    case 'update':
      ControllerTag.update(input[3], input[4], input[5]);
      break;
    case 'delete':
      ControllerTag.delete(input[3]);
      break;
    default:
  }
}

else if (classCmd == 'article') {
  switch (command) {
    case 'add':
      ControllerArticle.add(input[3], input[4], input[5] input.slice(6).join(' '))
      break;
    case 'read_one':
      ControllerArticle.readOne(input[3]);
      break;
    case 'read_all':
      ControllerArticle.readAll();
      break;
    case 'update':
      ControllerArticle.update(input[3], input[4], input.slice(5).join(' '));
      break;
    case 'delete':
      ControllerArticle.delete(input[3])l
      break;
    default:
  }
}

else {
  console.log(`type help for some help!`);
}
