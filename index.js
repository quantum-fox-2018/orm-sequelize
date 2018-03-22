let argv = process.argv;

const ControllerAuthor = require('./controllers/author')
const ControllerTag = require('./controllers/tag')
const ControllerArticle = require('./controllers/article')

let table = argv[2];
let action = argv[3];
let value = argv.slice(4);


if(table == 'author'){
    if(action == 'add'){
        ControllerAuthor.add(value[0],value[1],value[2],value[3],value[4])
    } else if(action == 'read_one'){
        ControllerAuthor.readOne(value[0])
    } else if(action == 'read_all'){
        ControllerAuthor.readAll()
    } else if(action == 'update'){
        // nodejs index.js author update <first_name> <value>
        ControllerAuthor.update(value[0],value[1],value.slice(2).join(' '))
    } else if(action == 'erase'){
        ControllerAuthor.erase(value[0])
    }
} else if(table == 'tag'){
    if(action == 'add'){
        ControllerTag.add(value[0])
    } else if(action == 'read_one'){
        ControllerTag.readOne(value[0])
    } else if(action == 'read_all'){
        ControllerTag.readAll()
    } else if(action == 'update'){
        ControllerTag.update(value[0],value[1],value[2])
    } else if(action == 'erase'){
        ControllerTag.erase(value[0])
    }
} else if(table == 'article'){
    if(action == 'add'){
        ControllerArticle.add(value[0],value[1],value[2],value.slice(3).join(' '))
    } else if(action == 'read_one'){
        ControllerArticle.readOne(value[0])
    } else if(action == 'read_all'){
        ControllerArticle.readAll()
    } else if(action == 'update'){
        ControllerArticle.update(value[0],value[1],value.slice(2).join(' '))
    } else if(action == 'erase'){
        ControllerArticle.erase(value[0])
    }
}