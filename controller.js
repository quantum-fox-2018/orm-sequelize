const View = require('./view')
const Model = require('./models')

class Controller {
  static acceptCommand(command){
   if (command[2] === 'author') {
     if (command[3] === 'add') {
       Model.Author.build({
       firstName: command[4],
       lastName: command[5],
       religion: command[6],
       gender: command[7],
       age: command[8]
       }).save()
       .then(info => {
       View.display("save succesful");
     }).catch(error => {
       View.display(error)
     })
     }else if (command[3] === 'read_one') {
       let id = command[4]
       Model.Author.findById(id)
       .then(function(data){
         View.display(data.toJSON())
       })
       .catch(function(err){
         View.display(err)
       })
     }else if (command[3] ===  'read_all') {
       Model.Author.findAll({raw:true})
       .then(function(data){
         View.display(data)
       }).catch(function(err){
         View.display(err)
       })
     }else if (command[3] === 'update') {
       let idInput = command[3]
       let columnInput = command[4]
       let valueInput = command[5]

       let contactAttributes = {}
       contactAttributes[columnInput] = valueInput

       Model.Author.update(
         contactAttributes,
         {where: {id: idInput}}
       ).then((result) => {
         View.display("Author update success")
       }).catch((error) => {
         View.display(error)
       })
     }else if (command[3] === 'erase') {
       Model.Author.destroy({
         where: {
           id: command[3]
         }
       }).then(function(rowDeleted){
         if (rowDeleted === 1) {
           View.display("delete successful");
         }
       }).catch(function(err){
         console.log(err);
       })
     }
   }else if(command[2] === 'tag'){
       if (command[3] === 'add') {
         Model.Tag.create({
         title: titleInput,
         genre: genreInput,
         })
         .then(info => {
         View.display("save succesful");
       }).catch(error => {
         View.display(error)
       })
     }else if (command[3] === 'read_one') {
       let id = command[4]
       Model.Tag.findById(id)
       .then(function(data){
         View.display(data)
       })
       .catch(function(err){
         View.display(err)
       })
     }else if (command[3] ===  'read_all') {
       Model.Tag.findAll({raw:true})
       .then(function(data){
         View.display(data)
       }).catch(function(err){
         View.display(err)
       })
     }else if (command[3] === 'update') {
       let idInput = command[3]
       let columnInput = command[4]
       let valueInput = command[5]

       let contactAttributes = {}
       contactAttributes[columnInput] = valueInput

       Model.Tag.update(
         contactAttributes,
         {where: {id: idInput}}
       ).then((result) => {
         View.display("Author update success")
       }).catch((error) => {
         View.display(error)
       })
     }else if (command[3] === 'erase') {
       Model.Tag.destroy({
         where: {
           id: command[3]
         }
       }).then(function(rowDeleted){
         if (rowDeleted === 1) {
           View.display("delete successful");
         }
       }).catch(function(err){
         console.log(err);
       })
     }
   }else if (command[2] === 'article') {
     if (command[3] === 'add') {
       Article.Tag.create({
         title: titleInput,
         author: authorInput,
         genre: genreInput
       })
       .then(info => {
       View.display("save succesful");
       }).catch(error => {
       View.display(error)
       })
     }else if (command[3] === 'read_one') {
       let id = command[4]
       Model.Article.findById(id)
       .then(function(data){
         View.display(data)
       })
       .catch(function(err){
         View.display(err)
       })
     }else if (command[3] ===  'read_all') {
       Model.Article.findAll({raw:true})
       .then(function(data){
         View.display(data)
       }).catch(function(err){
         View.display(err)
       })
     }else if (command[3] === 'update') {
       let idInput = command[3]
       let columnInput = command[4]
       let valueInput = command[5]

       let contactAttributes = {}
       contactAttributes[columnInput] = valueInput

       Model.Article.update(
         contactAttributes,
         {where: {id: idInput}}
       ).then((result) => {
         View.display("Author update success")
       }).catch((error) => {
         View.display(error)
       })
     }else if (command[3] === 'erase') {
       Model.Article.destroy({
         where: {
           id: command[3]
         }
       }).then(function(rowDeleted){
         if (rowDeleted === 1) {
           View.display("delete successful");
         }
       }).catch(function(err){
         console.log(err);
       })
     }
   }
 }
}

module.exports = Controller
