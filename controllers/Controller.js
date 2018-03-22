const Authors = require('./Author.js')
const Tags = require('./Tag.js')
const Articles = require('./Article.js')

class Controller {
  constructor(table,command,content) {
    this.table = table
    this.command = command
    this.content = content
  }

  execute(){
    if(this.table=='author'){
      if(this.command=='add'){
        Authors.add(this.content)
      } else if(this.command=='read_one'){
        Authors.readOne(this.content)
      } else if(this.command=='read_all'){
        Authors.readAll()
      } else if(this.command=='update'){
        Authors.update(this.content)
      } else if(this.command=='delete'){
        Authors.delete(this.content)
      }
    } else if(this.table=='tag'){
      if(this.command=='add'){
        Tags.add(this.content)
      } else if(this.command=='read_one'){
        Tags.readOne(this.content)
      } else if(this.command=='read_all'){
        Tags.readAll()
      } else if(this.command=='update'){
        Tags.update(this.content)
      } else if(this.command=='delete'){
        Tags.delete(this.content)
      }
    } else if(this.table=='article'){
      if(this.command=='add'){
        Articles.add(this.content)
      } else if(this.command=='read_one'){
        Articles.readOne(this.content)
      } else if(this.command=='read_all'){
        Articles.readAll()
      } else if(this.command=='update'){
        Articles.update(this.content)
      } else if(this.command=='delete'){
        Articles.delete(this.content)
      }
    }
  }
}

module.exports = Controller
