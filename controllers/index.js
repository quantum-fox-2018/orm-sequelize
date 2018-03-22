const {ViewHelp} = require('../views/')
const AuthorControl = require('./author_controller')
const ArticleControl = require('./article_controller')
const TagControl = require('./tag_controller')


class Controller {
    constructor() {
        
    }

    static checkSyntax(syntax, value){
        let option = value[0]
        if(syntax == 'help'){
            ViewHelp.showHelp()
        }
        else if(syntax == 'author'){
            if(option == 'add'){
                // console.log('add author')
                AuthorControl.addAuthor(value)
            }
            else if(option == 'read_one'){
                AuthorControl.readOne(value)
            }
            else if(option == 'read_all'){
                AuthorControl.readAll()
            }
            else if(option == 'update'){
                AuthorControl.updateAuthor(value)
            }
            else if(option == 'delete'){
                AuthorControl.deleteAuthor(value)

            }
        }
        else if(syntax == 'tag'){
            if(option == 'add'){
                TagControl.addTag(value)
            }
            else if(option == 'read_one'){
                TagControl.readOne(value)
            }
            else if(option == 'read_all'){
                TagControl.readAll()
            }
            else if(option == 'update'){
                TagControl.updateTag(value)
            }
            else if(option == 'delete'){
                TagControl.deleteTag(value)
            }
        }
        else if(syntax == 'article'){
            if(option == 'add'){
                ArticleControl.addArticle(value)
            }
            else if(option == 'read_one'){
                ArticleControl.readOne(value)
            }
            else if(option == 'read_all'){
                ArticleControl.readAll()
            }
            else if(option == 'update'){

            }
            else if(option == 'delete'){
                ArticleControl.deleteArticle(value)
            }
        }
        else{
            console.log('you will call "node index.js help"')
        }
    }
}


module.exports = Controller