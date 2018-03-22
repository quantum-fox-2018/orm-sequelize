const Controller = require('./controllers/index')

const argv = process.argv
const syntax = argv[2]
const value = argv.slice(3)

Controller.checkSyntax(syntax, value)