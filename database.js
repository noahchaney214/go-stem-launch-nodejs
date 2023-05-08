const mysql = require("mysql")

const con = mysql.createConnection({
    host: "localhost",
    user: "gostem",
    password: "GoSTEM2023!",
    database: "gostem"
}); 



module.exports = function query(a) {
    con.connect((err)=>{
		if (err) console.log(err)
		console.log("Connected!")
	});

    return new Promise(function(res, rej){
        con.query(a, function (err, result, fields) {
            if (!err) res(JSON.parse(JSON.stringify(result)))
            else rej(err)
        });
        con.end()
    });
};
