const chalk = require('chalk');

class ViewHelp {
  static viewHelp() {
    console.log(chalk.green(`author add -> add<space> "data yang ingin dimasukan"`));
    console.log(chalk.green(`author readId -> readId<space> "id yang ingin dimasukan"`));
    console.log(chalk.green(`author readAll -> readAll`));
    console.log(chalk.green(`author update -> update<space> "data yang ingin dimasukan"`));
    console.log(chalk.green(`author delete -> delete<space> "id yang ingin di delete"`));
    console.log(chalk.red(`tag add -> add<space> "data yang ingin dimasukan"`));
    console.log(chalk.red(`tag readId -> readId<space> "id yang ingin dimasukan"`));
    console.log(chalk.red(`tag readAll -> readAll`));
    console.log(chalk.red(`tag update -> update<space> "data yang ingin dimasukan"`));
    console.log(chalk.red(`tag delete -> delete<space> "id yang ingin di delete"`));
    console.log(chalk.blue(`article add -> add<space> "data yang ingin dimasukan"`));
    console.log(chalk.blue(`article readId -> readId<space> "id yang ingin dimasukan"`));
    console.log(chalk.blue(`article readAll -> readAll`));
    console.log(chalk.blue(`article update -> update<space> "data yang ingin dimasukan"`));
    console.log(chalk.blue(`article delete -> delete<space> "id yang ingin di delete"`));
  }
}

module.exports = ViewHelp;
