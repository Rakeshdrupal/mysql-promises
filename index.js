const database  = require('./db');

let someRows, otherRows;
database.query('SELECT * FROM tbl_news_category_master;')
    .then(rows => {
        console.log(rows);
        someRows = rows;
        return database.query( 'SELECT * FROM tbl_news_category_master');
    })
    .then(rows => {
        otherRows = rows;
        return database.close();
    }, err => {
        return database.close().then( () => { throw err; } )
    })
    .then(() => {
        console.log(someRows);
        console.log(otherRows);
        // do something with someRows and otherRows
    })
    .catch(err => {
       // console.log(someRows);
        console.log(err);
        // handle the error
    })
