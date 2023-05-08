// importing all needed modules and setting the router path
const express = require('express');
const indexRouter = require('./routes/index');
const path = require("path");
const bodyParser = require('body-parser');
const app = express(); //using express js as the main router for the web pages
const cluster = require("cluster");
const process = require("process");
const os = require("os");
const cpus = os.cpus;
const numCPUs = cpus().length;


if (cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });

} else {
    // handling post requests
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());


// specify router
    app.use('/', indexRouter);

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
    app.use(express.static(path.join(__dirname, '/public/img/carousel')));

// set the favicon for the browser
    app.use('/favicon.ico', express.static('/public/img/favicon.ico'));

// 404 error handler
    app.use((req, res, next) => {
        res.status(404).render('404', { page: 'Page not found' });
    });
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    app.listen(3000, console.log('Server is listening at port 3000.'));

    console.log(`Worker ${process.pid} started`);
}