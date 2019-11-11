var mysql = require('mysql');
var http = require('http');

/**
 * @type {Pool}
 */
var db = null;

http.createServer(router).listen(8080);
console.log('Server running on port 8080.');
//------------------------------------------------//
/**
 * @return {Pool}
 */
function getConnection() {
    if (db === null) {
        db = mysql.createPool(getConfig())
    }
    return db;
}
/**
 * @returns {Object}
 */
function getConfig() {
    return {
        host: "localhost",
        user: "root",
        password: "Cheburaka1",
        database: "example_db"
    };
}

function router(req, res) {
    getConnection().query('select * from event;', function (error, result, fields) {
        if (error) {
            throw error;
        }
        console.log(result);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(JSON.stringify(result));
    });
}