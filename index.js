const ControllerAuthor = require('./controllers/ControllerAuthor.js');
const ViewAuthor = require('./views/ViewAuthor.js');
const ControllerTag = require('./controllers/ControllerTag.js');
const ViewTag = require('./views/ViewTag.js');
const ControllerArticle = require('./controllers/ControllerArticle.js');
const ViewArticle = require('./views/ViewArticle.js');
const ViewHelp = require('./views/ViewHelp.js');

let input = process.argv;

let menu = input[2];

if(menu == "help") {
  ViewHelp.viewHelp();
} else if(menu == "author") {
  let option = input[3];
  if(option == "add") {
    let first_name = input[4];
    let last_name = input[5];
    let religion = input[6];
    let gender = input[7];
    let age = input[8];
    ControllerAuthor.add({
      first_name: first_name,
      last_name: last_name,
      religion: religion,
      gender: gender,
      age: age
    }, ViewAuthor.add);
  } else if(option == "read_one") {
    let id = input[4];
    ControllerAuthor.findOne(id, ViewAuthor.list);
  } else if(option == "read_all") {
    ControllerAuthor.list(ViewAuthor.list);
  } else if(option == "update") {
    let id = input[4];
    let column = input[5];
    let value = input[6];
    ControllerAuthor.update(id, column, value, ViewAuthor.update);
  } else if(option == "erase") {
    let id = input[4];
    ControllerAuthor.delete(id, ViewAuthor.delete)
  }
} else if(menu == "tag") {
  let option = input[3];
  if(option == "add") {
    let name = input[4];
    ControllerTag.add({
      name: name
    }, ViewTag.add);
  } else if(option == "read_one") {
    let id = input[4];
    ControllerTag.findOne(id, ViewTag.list);
  } else if(option == "read_all") {
    ControllerTag.list(ViewTag.list);
  } else if(option == "update") {
    let id = input[4];
    let column = input[5];
    let value = input[6];
    ControllerTag.update(id, column, value, ViewTag.update);
  } else if(option == "erase") {
    let id = input[4];
    ControllerTag.delete(id, ViewTag.delete);
  }
} else if(menu == "article") {
  let option = input[3];
  if(option == "add") {
    let title = input[4];
    let body = input[5];
    let id_author = input[6];
    let id_tag = input[7];
    ControllerArticle.add({
      title: title,
      body: body,
      id_author: id_author,
      id_tag: id_tag
    }, ViewArticle.add);
  } else if(option == "read_one") {
    let id = input[4];
    ControllerArticle.findOne(id, ViewArticle.list);
  } else if(option == "read_all") {
    ControllerArticle.list(ViewArticle.list);
  } else if(option == "update") {
    let id = input[4];
    let column = input[5];
    let value = input[6];
    ControllerArticle.update(id, column, value, ViewArticle.update);
  } else if(option == "erase") {
    let id = input[4];
    ControllerArticle.delete(id, ViewArticle.delete);
  }
}
