const models = require('./models');
const Controller = require('./controller.js');
var Table = require('cli-table');

var argv = process.argv;
Controller.input(argv[2], argv[3], argv.slice(4));
