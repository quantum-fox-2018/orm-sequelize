class Help {
    constructor() {
        
    }

    static showHelp(){
        let helplist = [
            '=============== documentation =================================================',
            '$ node index.js author add -> add<space> "data yang ingin dimasukan"',
            '$ node index.js author read_one -> read_one<space> "masukan id author"',
            '$ node index.js author read_all -> read_all',
            '$ node index.js author update -> update <space> <column_name> <space> id <space> "data yang ingin dirubah"',
            '$ node index.js athor delete -> delete<space> "masukan id author"',
            '$ node index.js tag add -> add<space> "data yang ingin dimasukan"',
            '$ node index.js tag read_one -> read_one<space> "masukkan id tag"',
            '$ node index.js tag readl_all -> read_all',
            '$ node index.js tag update -> update<space> "name" <space> id <space> "data yang ingin dirubah"',
            '$ node index.js tag delete -> delete<space> "masukkan id author"',
            '$ node index.js article add -> add<space> "data yang ingin dimasukan"',
            '$ node index.js article read_one -> read_one<space> "masukan id article"',
            '$ node index.js article read_all -> read_all',
            '$ node index.js article update -> update <space> <column_name> <space> id <space> "data yang ingin dirubah"',
            '$ node index.js article delete -> delete<space> "masukkan id author"',
            '================================================================================'                   
        ]
        helplist = helplist.join('\n')
        return console.log(helplist)
    }
}

module.exports = Help