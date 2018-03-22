'use strict';
module.exports = (sequelize, DataTypes) => {
  var Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    genre: DataTypes.STRING
  }, {});
  Article.associate = function(models) {
    // associations can be defined here
  };
  return Article;
};