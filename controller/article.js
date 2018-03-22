const Model = require('../models/index.js');
const ViewArticle = require('../view/article.js').ViewArticle;

class ControllerArticle {

  static readAll(){
    Model.Article.findAll({raw:true}).then(articlesData => {

      ViewArticle.showAll(articlesData);
      process.exit();
    })
  }

  static readId(Article_id){
    Model.Article.findById(Article_id,{raw:true}).then(articleData => {

      ViewArticle.showId(articleData);
      process.exit();
    })

  }

  static add(title, author, pages){

    Model.Article.create({ title: title, author:author, pages: pages })
    .then(() => Model.Article.findOrCreate({where: {title: title}, defaults: {author:author}}))
    .spread((Article) => {
      ViewArticle.add(Article.get({
    }))
      process.exit();
    })
  }

  static update(Article_id,column,value){

    const newData = {
      [column]: value
    };

    Model.Article.update(newData, {where: { id: Article_id } })
    .then(()=> {
      ViewArticle.update();
      process.exit()
    })
  }

  static delete(Article_id){

    Model.Article.destroy({
      where: { id: Article_id }
    })
    .then(() =>{
      ViewArticle.delete()
      process.exit()
    });
  }

  static help(){

    ViewArticle.help()
  }

}

module.exports = {ControllerArticle};
