var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Cheburaka1",
    database: "example_db"
});

con.connect(function(err) {
    if (err) throw err;
    //con.query("SELECT * FROM event", function (err, result, fields) {
    con.query("SELECT event_date.Date, event.Name, event.Type, location.Location_name" +
        " FROM event_date, event, location" +
        " WHERE event_date.Event_id = event.Event_id and event.location_Location_id = location.Location_id" +
         " GROUP BY Name", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});

