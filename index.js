const argv = process.argv
const Author = require('./controller/author-controller');
const Tag = require('./controller/tag-controller');
const Article = require('./controller/article-controller');

let table = argv[2]
let command = argv[3]
let input = argv.slice(4)

if (table == 'article') {
  input = argv.slice(4).join(' ').split(':')
}



switch (table) {
  case 'author':{ Author.getCommand(command, input) ; break;}
  case 'tag':{ Tag.getCommand(command, input) ; break;}
  case 'article':{ Article.getCommand(command, input) ; break;}
  default:{return ''}

}
