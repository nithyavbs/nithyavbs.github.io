var stringify = require('json-stringify-safe')
var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql"
});
var connect = stringify(con);//change to string
var connectObj = JSON.parse(connect);//convert to json object
var str = JSON.stringify(connectObj, null, 2);
// console.log('connect' + str);
//var sql = "select * from school.marks";
var sql="select st.*,mt.* from school.students st join school.marks mt on st.first_name=mt.name;";
var sql1="select * from school.marks";
// var sql="select first_name from school.student where exists(select name from school.marks where marks.name=student.first_name)";
con.connect(f1);
function f1(err) {
    if (err) throw err;
    con.query(sql, f2);
    con.query(sql1, f3);
}
function f2(err, result, fields) {
    if (err) throw err;
   console.log(JSON.parse(JSON.stringify(result)));
    // console.log(JSON.stringify(result));
}
function f3(err, result1, fields) {
    if (err) throw err;
   console.log(JSON.parse(JSON.stringify(result1)));
    // console.log(JSON.stringify(result));
}

// con.connect(nithya);
// function nithya(err) {
//     if (err) throw err;
//     kovarthini(err);
// }
// function kovarthini(err) {
//     con.query(sql, vicky(err, result, fields));
// }
// function vicky(err, result, fields) {
//     if (err) throw err;
//     if (result) {
//         console.log(fields);
//         console.log(result);
//     }
// }
