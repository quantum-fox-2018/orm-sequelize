class View {

    static help() {
        console.log(`------------------------------------------AUTHOR---------------------------------------------`)
        console.log(`$ node index.js author read_all                                # show all authors`);
        console.log(`$ node index.js author read_one <masukkan id author>           # show one specific author`);
        console.log(`$ node index.js author add <first_name last_name religion gender age> # add one new author`);
        console.log(`$ node index.js author update <column value id>                # update data specific author>`);
        console.log(`$ node index.js author delete <masukkan id author>             # delete one specific author`);
        console.log(`------------------------------------------TAGS-----------------------------------------------`)
        console.log(`$ node index.js tag read_all                                   # show all tags`);
        console.log(`$ node index.js tag read_one <masukkan id tag>                 # show one specific tag`);
        console.log(`$ node index.js tag add <name_tag>                             # add one new tag`);
        console.log(`$ node index.js tag update <column value id>                   # update data specific tag>`);
        console.log(`$ node index.js tag delete <masukkan id tag>                   # delete one specific tag`);
        console.log(`----------------------------------------ARTICLES--------------------------------------------`)
        console.log(`$ node index.js article read_all                               # show all articles`);
        console.log(`$ node index.js article read_one <masukkan id article>         # show one specific article`);
        console.log(`$ node index.js article add <title body id_author id_tag>      # add one new article`);
        console.log(`$ node index.js article update <column value id>               # update data specific article>`);
        console.log(`$ node index.js article delete <masukkan id article>           # delete one specific article`);
    }

    static read_all(data) {
        console.log(data);
    }

    static read_one(data) {
        console.log(data);
    }

    static add(data) {
        console.log(data);
    }

    static update(data) {
        console.log(data);
    }

    static delete(data) {
        console.log(data);
    }

}

module.exports = View;