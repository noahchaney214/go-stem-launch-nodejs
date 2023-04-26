const express = require('express');
const router = express.Router();
const conn = require('../database.mjs');
const bodyParser = require('body-parser');

/*
*   This is the main router file. This takes the express module and creates the main router to allow users
*   to go to different web pages.
* */

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.get('/', (req, res, next) => {
    res.render('index', { page: 'Home' });
});

router.post('/', urlencodedParser, (req, res) => {
    conn(`INSERT INTO news_emails (email) values (\"${req.body.email}\");`);
    res.render('index', { page: 'Home' });
})

router.get('/about', (req, res, next) => {
    res.render('about', { page: 'About' });
});

router.post('/about', urlencodedParser, (req, res) => {
    conn(`INSERT INTO news_emails (email) values (\"${req.body.email}\");`);
    res.render('about', { page: 'About' });
})

router.get('/contact', (req, res, next) => {
    res.render('contact', { page: 'Contact Us' });
});

router.post('/contact', urlencodedParser, (req, res, next) => {
    var sql = `INSERT INTO messages (fname, lname, email, school, county, message) values (\"${req.body.firstname}\", \"${ req.body.lastname}\", \"${req.body.email}\", \"${req.body.school}\", \"${req.body.county}\", \"${req.body.subject}\")`;
    conn(sql);
    res.render('action_page', { page: 'Action Page' });
})

router.get('/lab', (req, res, next) => {
    res.render('lab', { page: 'Mobile Maker Lab' });
});

router.post('/lab', urlencodedParser, (req, res) => {
    conn(`INSERT INTO news_emails (email) values (\"${req.body.email}\")`);
    res.render('lab', { page: 'Mobile Maker Lab' });
})

router.get('/action_page', (req, res) => {
    res.render('action_page', { page: 'Action Page' })
});

router.post('/action_page', urlencodedParser, (req, res) => {
    conn(`INSERT INTO news_emails (email) values (\"${req.body.email}\")`);
    res.render('action_page', { page: 'Action Page' })
})

// this router performs a query to the mysql database, then populates
// the web page with the information then sends the
router.get('/team', async (req, res, next) => {
    const q = await conn("SELECT * FROM employees;");
    res.render('team', {page: 'Meet the Team', teamData: q});
});

router.post('/team', urlencodedParser, (req, res) => {
    conn(`INSERT INTO news_emails (email) VALUES (\"${req.body.email}\")`);
    res.render('team', {page: 'Meet the Team', teamData: q});
})



module.exports = router;
