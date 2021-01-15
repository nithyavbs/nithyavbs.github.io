var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM students.sslc_marks", function (err, result, fields) {
      if (err) throw err;
      console.log(JSON.parse(JSON.stringify(result)));
    });
  });