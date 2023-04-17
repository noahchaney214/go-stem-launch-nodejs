// importing all needed modules and setting the router path
const express = require('express');
const indexRouter = require('./routes/index');
const path = require("path");
const mysql = require("mysql");
const app = express(); //using express js as the main router for the web pages
const favicon = require('serve-favicon');


app.use(express.json());
app.use(express.static("site")); // site holds all the static web page files and styling

// these 3 lines add jquery and bootstrap libraries
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/site`);

// adds the static files for styling and frontend js functionality
app.use(express.static(path.join(__dirname, '/public/img')));
app.use(express.static(path.join(__dirname, '/public/js')));
app.use(express.static(path.join(__dirname, '/public/css')));

app.use('/favicon.ico', express.static('/public/img/favicon.ico'));


// specify router
app.use('/', indexRouter);

app.use((req, res, next) => {
    res.status(404).render('404', { page: 'Page not found' });
});
function connector(){
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "To8uscus?",
        database: "gostem"
    });
}

module.exports = function sqlQuery(a){
    let con = connector();
    let results = [];
    con.connect(function(err) {
        if (err) throw err;
        con.query(a, function (err, res) {
            if (err) throw err;
            results = res;
        })
    })
    con.end();
    return results;
}


app.listen(3000, console.log('Server is listening at port 3000.'));

