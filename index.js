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

      break;
    case 'read_one':

      break;
    case 'read_all':

      break;
    case 'update':

      break;
    case 'delete':

      break;
    default:
  }
}

else if (classCmd == 'tag') {
  switch (command) {
    case 'add':

      break;
    case 'read_one':

      break;
    case 'read_all':

      break;
    case 'update':

      break;
    case 'delete':

      break;
    default:
  }
}

else if (classCmd == 'article') {
  switch (command) {
    case 'add':
      ControllerArticle.add(input[3], input.slice(4).join(' '))
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
