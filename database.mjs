const mysql = require("mysql")

const con = mysql.createConnection({
    host: "localhost",
    user: "gostem",
    password: "_st3m_4_all_",
    database: "gostem"
});

con.connect((err)=>{
    if (err) console.log(err)
    console.log("Connected!")
});

module.exports = function query(a) {
    return new Promise(function(res, rej){
        con.query(a, function (err, result, fields) {
            if (!err) res(JSON.parse(JSON.stringify(result)))
            else rej(err)
        });
    });
};