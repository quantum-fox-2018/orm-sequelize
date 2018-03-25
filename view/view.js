const Table = require('cli-table');
const chalk = require('chalk');

const authorTable = new Table({
  head: ['ID', 'First Name', 'Last Name', 'Religion', 'Gender', 'Age'],
    colWidths: [5, 15, 15, 12, 12, 8]
});

const tagTable = new Table({
  head: ['ID', 'Name'],
    colWidths: [5, 25]
});

const articleTable = new Table({
  head: ['ID', 'Title', 'Body', 'ID Author', 'ID Tag'],
    colWidths: [5, 40, 40, 15, 10]
})

class View {
  constructor() {

  }

  static showAuthor(message){

    if (message.length == undefined) {

      authorTable.push([message.id, message.firstname, message.last_name, message.religion, message.gender, message.age]);

    } else {

      for(let i in message) {

        authorTable.push([message[i].id, message[i].firstname, message[i].last_name, message[i].religion, message[i].gender, message[i].age]);

      }

    }

    console.log(chalk.yellow(authorTable.toString()));

    process.exit()

  }

  static showTag(message){

    if (message.length == undefined) {

      tagTable.push([message.id, message.name])

    } else {

      for(let i in message){

        tagTable.push([message[i].id, message[i].name])

      }

    }

    console.log(chalk.yellow(tagTable.toString()));

    process.exit()

  }

  static showArticle(message){

    if (message.length == undefined) {

      articleTable.push([message.id, message.title, message.body, message.id_author, message.id_tag])

    } else {

      for (let i in message) {

        articleTable.push([message[i].id, message[i].title, message[i].body, message[i].id_author, message[i].id_tag])

      }

    }

    console.log(chalk.yellow(articleTable.toString()));

    process.exit()

  }

}

module.exports = View;
