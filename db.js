const mysql = require( 'mysql' );
let pool = {
  host : "localhost",
  user : "root",
  password : "root",
  database : "citizen", //schema 
  connectionLimit : 13, // at a time 13 connection be created in pool
};
class Database {
    constructor( config ) {
        this.connection = mysql.createConnection(pool);
    }
    query( sql, args ) {
        return new Promise( ( resolve, reject ) => {
            this.connection.query(sql, args, ( err, rows ) => {
                if ( err )
                    return reject( err );
                resolve( rows );
            } );
        } );
    }
    close() {
        return new Promise( ( resolve, reject ) => {
            this.connection.end( err => {
                if ( err )
                    return reject( err );
                resolve();
            } );
        } );
    }
}

module.exports = new Database();