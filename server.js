// importing all needed modules and setting the router path
const express = require('express');
const indexRouter = require('./routes/index');
const path = require("path");
const bodyParser = require("body-parser");
const app = express(); //using express js as the main router for the web pages

// specify router
app.use('/', indexRouter);
app.use(express.urlencoded({ extended: true }));

// these 3 lines add jquery and bootstrap libraries
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

// setting our view engine to use .ejs files that render to HTML files from the /site directory
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs');
app.set('views', __dirname + '/site');

// adds the static files for styling and frontend js functionality
app.use(express.static(path.join(__dirname, '/public/img')));
app.use(express.static(path.join(__dirname, '/public/js')));
app.use(express.static(path.join(__dirname, '/public/css')));
app.use(express.static(path.join(__dirname, '/public/img/staff')));

// set the favicon for the browser
app.use('/favicon.ico', express.static('/public/img/favicon.ico'));

// 404 error handler
app.use((req, res, next) => {
    res.status(404).render('404', { page: 'Page not found' });
});

app.use(bodyParser.urlencoded());

app.listen(3000, console.log('Server is listening at port 3000.'));