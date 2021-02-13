const ControllerAuthor = require('./controller/controller_author');
const ControllerTag = require('./controller/controller_tag');
const ControllerArticle = require('./controller/controller_article');
const ViewHelp = require('./view/view_help.js')

let input = process.argv;
let classCmd = input[2];
let command = input[3];


if (classCmd == 'help') {
  ViewHelp.help();
}

else if (classCmd == 'author') {
  switch (command) {
    case 'add':
      ControllerAuthor.add(
        input[4],
        input[5],
        input[6],
        input[7],
        input[8],
      );
      break;
    case 'read_one':
      ControllerAuthor.readOne(input[4]);
      break;
    case 'read_all':
      ControllerAuthor.readAll();
      break;
    case 'update':
      ControllerAuthor.update(input[4], input[5], input[6]);
      break;
    case 'delete':
      ControllerAuthor.delete(input[4]);
      break;
    default:
  }
}

else if (classCmd == 'tag') {
  switch (command) {
    case 'add':
      ControllerTag.add(input[4]);
      break;
    case 'read_one':
      ControllerTag.readOne(input[4]);
      break;
    case 'read_all':
      ControllerTag.readAll();
      break;
    case 'update':
      ControllerTag.update(input[4], input[5], input[6]);
      break;
    case 'delete':
      ControllerTag.delete(input[4]);
      break;
    default:
  }
}

else if (classCmd == 'article') {
  switch (command) {
    case 'add':
      ControllerArticle.add(input[4], input[5], input[6], input.slice(7).join(' '))
      break;
    case 'read_one':
      ControllerArticle.readOne(input[4]);
      break;
    case 'read_all':
      ControllerArticle.readAll();
      break;
    case 'update':
      ControllerArticle.update(input[4], input[5], input.slice(6).join(' '));
      break;
    case 'delete':
      ControllerArticle.delete(input[4]);
      break;
    default:
  }
}

else {
  console.log(`type help for some help!`);
}
