var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "sofiakalpin",
    password: "qwerty"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});