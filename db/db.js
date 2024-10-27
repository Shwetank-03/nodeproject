const sqlite3 = require('sqlite3');

// open database in memory
let db = new sqlite3.Database('./db/rms.db');

db.run("CREATE TABLE IF NOT EXISTS students (rollno INTEGER PRIMARY KEY, name TEXT, dob DATE, score INTEGER)")

// close the database connection
const executeQuery = (sql,params, cb) =>{
    let db = new sqlite3.Database('./db/rms.db');

    db.run(sql,params, (err, results) => {
        db.close();
        if (err) cb(err);
        else cb(null, results);
    });
}

const executeSelect = (sql, params, cb) => {
    let db = new sqlite3.Database('./db/rms.db');

    db.all(sql, params, (err, results) => {
        db.close();
        if (err) cb(err);
        else cb(null, results);
    });
}

module.exports={executeQuery, executeSelect}