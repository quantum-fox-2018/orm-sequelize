const argv = process.argv;
let command = argv[2].split(":");
const ControllerAuthor = require('./controller/author.js').ControllerAuthor;
const ControllerTag = require('./controller/tag.js').ControllerTag;
const ControllerArticle = require('./controller/article.js').ControllerArticle;


if(command[0] == "authors"){

  switch (command[1]) {
    case "readAll": ControllerAuthor.readAll();break;
    case "readId": ControllerAuthor.readId(argv[3]);break;
    case "add": ControllerAuthor.add(argv[3],argv[4],argv[5],argv[6]);break;//first_name,last_name,gender,age
    case "update": ControllerAuthor.update(argv[3],argv[4],argv[5]);break;//id, column, value
    case "delete": ControllerAuthor.delete(argv[3]);break;
    default:ControllerAuthor.help();break;
  }

}else if(command[0] == "tags"){

  switch (command[1]) {
    case "readAll": ControllerTag.readAll();break;
    case "readId": ControllerTag.readId(argv[3]);break;
    case "add": ControllerTag.add(argv[3],argv[4]);break;//tag_name,category
    case "update": ControllerTag.update(argv[3],argv[4],argv[5]);break;//id, column, value
    case "delete": ControllerTag.delete(argv[3]);break;
    default:ControllerTag.help();break;
  }

}else if(command[0] == "articles"){

  switch (command[1]) {
    case "readAll": ControllerArticle.readAll();break;
    case "readId": ControllerArticle.readId(argv[3]);break;
    case "add": ControllerArticle.add(argv[3],argv[4],argv[5]);break;//title,author,pages
    case "update": ControllerArticle.update(argv[3],argv[4],argv[5]);break;//id, column, value
    case "delete": ControllerArticle.delete(argv[3]);break;
    default:ControllerArticle.help();break;
  }
}
