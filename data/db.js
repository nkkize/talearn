const MongoClient = require('mongodb').MongoClient;

let dbConnectionString = "mongodb://talearn:talearn123@localhost:27017/talearn";
let database

module.exports = {
    get : function () {
        return new Promise((resolve, reject) => {
            if(database){
                return process.nextTick((db) => resolve(db), database);
            } else
                MongoClient.connect(dbConnectionString, (err, db) => {
                    if (err) {
                        console.error('could not connect to the database, exiting the process');
                        reject(err);
                        process.exit(1);
                    }
                    else {
                        database = db;
                        console.log('connected with db');
                        return resolve(db);
                    }
                });
        })
    }
}