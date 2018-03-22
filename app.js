const argv = process.argv

const Controller = require(`./controllers/Controller.js`)

let execute = new Controller(argv[2],argv[3],argv.slice(4))

execute.execute()
