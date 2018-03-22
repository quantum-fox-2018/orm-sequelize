const View = require('./view.js');
const model = require('./models');

class Controller{

    static main(argv){
        let target = argv[2];
        let command = argv[3];

        if(target == 'article'){
            if(command == 'read_one'){
                model.Article.findById(id)
                .then(function(articleData){
                    View.showTableArticle(articleData);
                })
                .catch(function(err){
                    View.showMessage(err);
                })
            }else if(command == 'read_all'){
                model.Article.findAll({raw:true})
                .then(function(articleData){
                    View.showTableArticle(articleData);
                })
                .catch(function(err){
                    View.showMessage(err);
                })
            }else if(command == 'add'){
                let content = argv.slice(4, argv.length).toString();

                model.Article.build({
                    content: content,
                }).save()
                .catch(err =>{
                    View.showMessage(err);
                })
            }else if(command == 'update'){
                let id = argv[4];
                let content = argv.slice(5, argv.length).toString();

                model.Article.findById(id)
                .then(function(obj){
                    obj.update({content: content})
                    .then(function(result){
                        View.showMessage('Berhasil Update!');
                    })
                    .catch(function(err){
                        View.showMessage(err);
                    })
                })
                .catch(function(err){
                    View.showMessage(err);
                })
            }else if(command == 'delete'){
                let id = argv[4];
                model.Article.destroy({
                    where: {
                        id: id
                    }
                })
                .then(function(result){
                    View.showMessage(result);
                })
                .catch(function(err){
                    View.showMessage(err)
                })
            }
        }else if(target == 'tag'){
            if(command == 'read_one'){
                model.Tag.findById(id)
                .then(function(tagData){
                    View.showTableTag(tagData);
                })
                .catch(function(err){
                    View.showMessage(err);
                })
            }else if(command == 'read_all'){
                model.Tag.findAll({raw:true})
                .then(function(tagData){
                    View.showTableTag(tagData);
                })
                .catch(function(err){
                    View.showMessage(err);
                })
            }else if(command == 'add'){
                let tagName = argv[4];
               
                model.Tag.build({
                    tagName: tagName,
                }).save()
                .catch(err =>{
                    View.showMessage(err);
                })
            }else if(command == 'update'){
                let id = argv[4];
                let tagName = tagName[5];

                model.Tag.findById(id)
                .then(function(obj){
                    obj.update({tagName: tagName})
                    .then(function(result){
                        View.showMessage('Berhasil Update!');
                    })
                    .catch(function(err){
                        View.showMessage(err);
                    })
                })
                .catch(function(err){
                    View.showMessage(err);
                })
            }else if(command == 'delete'){
                let id = argv[4];
                model.Tag.destroy({
                    where: {
                        id: id
                    }
                })
                .then(function(result){
                    View.showMessage(result);
                })
                .catch(function(err){
                    View.showMessage(err)
                })
            }
        }else if(target == 'author'){
            if(command == 'read_one'){
                model.Author.findById(id)
                .then(function(authorData){
                    View.showTableAuthor(authorData);
                })
                .catch(function(err){
                    View.showMessage(err);
                })
            }else if(command == 'read_all'){
                model.Author.findAll({raw:true})
                .then(function(authorData){
                    View.showTableAuthor(authorData);
                })
                .catch(function(err){
                    View.showMessage(err);
                })
            }else if(command == 'add'){
                let name = argv[4];
               
                model.Author.build({
                    name: name,
                }).save()
                .catch(err =>{
                    View.showMessage(err);
                })
            }else if(command == 'update'){
                let id = argv[4];
                let name = name[5];

                model.Author.findById(id)
                .then(function(obj){
                    obj.update({name: name})
                    .then(function(result){
                        View.showMessage('Berhasil Update!');
                    })
                    .catch(function(err){
                        View.showMessage(err);
                    })
                })
                .catch(function(err){
                    View.showMessage(err);
                })
            }else if(command == 'delete'){
                let id = argv[4];
                model.Author.destroy({
                    where: {
                        id: id
                    }
                })
                .then(function(result){
                    View.showMessage(result);
                })
                .catch(function(err){
                    View.showMessage(err)
                })
            }
        }else{
            View.showHelp();
        }      
    }
}

module.exports = Controller;