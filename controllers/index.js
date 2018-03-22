const View = require('../views');
const Model = require('../models');
const Table = require('cli-table');
const chalk = require('chalk');

class Controller {

    static routes(argv_data) {
        let tableName = argv_data[0];
        let command = argv_data[1];
        let inputData = argv_data.splice(2);

        switch(tableName) {
            case 'help': this.help(); break;
            case 'author': this.author(command,inputData); break;
            case 'article': this.article(command,inputData); break;
            case 'tag': this.tag(command,inputData); break;
            default: this.help();
        }
    }

    static help() {
        View.help();
    }


    static author(command,inputData) {
        if (command == 'read_all') {        
            Model.Author.findAll({raw:true})
            .then(author_data => {

                let table_author = new Table({
                    head: ['Id', 'First Name', 'Last Name', 'Religion', 'Gender', 'Age']
                //   , colWidths: [20,30,30,30,30,30]
                });

                for (let i = 0; i < author_data.length; i++) {
                    table_author.push(
                        [chalk.green(author_data[i].id), chalk.blue(author_data[i].first_name), chalk.yellow(author_data[i].last_name), chalk.white(author_data[i].religion), chalk.cyan(author_data[i].gender), chalk.magenta(author_data[i].age)]
                    );
                }

                View.read_all(table_author.toString())
                // View.read_all(chalk.green(table_author.toString()))
                process.exit()
            })
            .catch(err => {
                View.read_all(err)
                process.exit()
            })
        } else if (command == 'read_one') {
            let id = inputData[0];

            Model.Author.findById(id)
            .then(author_data => {
                View.read_one(author_data.dataValues)
                process.exit()
            })
            .catch(err => {
                View.read_one(err)
                process.exit
            })
        } else if (command == 'add') {
            let newObj = {
                first_name: inputData[0],
                last_name: inputData[1],
                religion: inputData[2],
                gender: inputData[3],
                age: inputData[4],
                createdAt: new Date(),
                updatedAt: new Date()
            }

            Model.Author.create(newObj)
            .then(data => {
                View.add(data.dataValues)
                process.exit()
            })
            .catch(err => {
                View.add(err)
            })

        } else if (command == 'update') {
            let column = inputData[0];
            let value = inputData[1];
            let id = inputData[2];

            Model.Author.update({[column]:value},{where:{id:id}})
            .then(() => {
                let data = 'Data sudah berhasil diupdate'
                View.update(data)
                process.exit()
            })
            .catch(err => {
                View.update(err)
            })
        } else if (command == 'delete') {
            let id = inputData[0];

            Model.Author.destroy({where:{id:id}})
            .then(() => {
                let data = 'Data row terkait sudah berhasil didelete'
                View.delete(data);
                process.exit();
            })
            .catch(err => {
                View.delete(err);
            })

        }
    }


    static article(command,inputData) {
        if(command == 'read_all') {        
            Model.Article.findAll({raw:true})
            .then(article_data => {
                View.read_all(article_data)
                process.exit()
            })
            .catch(err => {
                View.read_all(err)
                process.exit()
            })
        } else if (command == 'read_one') {
            let id = inputData[0];

            Model.Article.findById(id)
            .then(article_data => {
                View.read_one(article_data.dataValues)
                process.exit()
            })
            .catch(err => {
                View.read_one(err)
                process.exit
            })
        } else if (command == 'add') {
            let newObj = {
                title: inputData[0],
                body: inputData[1],
                id_author: inputData[2],
                id_tag: inputData[3],
                createdAt: new Date(),
                updatedAt: new Date()
            }

            Model.Article.create(newObj)
            .then(data => {
                View.add(data.dataValues)
                process.exit()
            })
            .catch(err => {
                View.add(err)
            })
        } else if (command == 'update') {
            let column = inputData[0];
            let value = inputData[1];
            let id = inputData[2];

            Model.Article.update({[column]:value},{where:{id:id}})
            .then(() => {
                let data = 'Data sudah berhasil diupdate'
                View.update(data)
                process.exit()
            })
            .catch(err => {
                View.update(err)
            })
            
        } else if (command == 'delete') {
            let id = inputData[0];

            Model.Article.destroy({where:{id:id}})
            .then(() => {
                let data = 'Data row terkait sudah berhasil didelete'
                View.delete(data);
                process.exit();
            })
            .catch(err => {
                View.delete(err);
            })

        }
    }

    static tag(command,inputData) {
        if(command == 'read_all') {        
            Model.Tag.findAll({raw:true})
            .then(tag_data => {
                View.read_all(tag_data)
                process.exit()
            })
            .catch(err => {
                View.read_all(err)
                process.exit()
            })

        } else if (command == 'read_one') {
            let id = inputData[0];

            Model.Tag.findById(id)
            .then(tag_data => {
                View.read_one(tag_data.dataValues)
                process.exit()
            })
            .catch(err => {
                View.read_one(err)
                process.exit
            })
        } else if (command == 'add') {     
            let newObj = {
                name_tag: inputData[0],
                createdAt: new Date(),
                updatedAt: new Date()
            }

            Model.Tag.create(newObj)
            .then(data => {
                View.add(data.dataValues)
                process.exit()
            })
            .catch(err => {
                View.add(err)
            })
        } else if (command == 'update') {
            let column = inputData[0];
            let value = inputData[1];
            let id = inputData[2];

            Model.Tag.update({[column]:value},{where:{id:id}})
            .then(() => {
                let data = 'Data sudah berhasil diupdate'
                View.update(data)
                process.exit()
            })
            .catch(err => {
                View.update(err)
            })
            
        } else if (command == 'delete') {
            let id = inputData[0];

            Model.Tag.destroy({where:{id:id}})
            .then(() => {
                let data = 'Data row terkait sudah berhasil didelete'
                View.delete(data);
                process.exit();
            })
            .catch(err => {
                View.delete(err);
            })

        }
    }


}


module.exports = Controller;