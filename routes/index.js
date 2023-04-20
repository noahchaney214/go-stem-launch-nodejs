const express = require('express');
const router = express.Router();
const conn = require('../database.mjs');


/*
*   This is the main router file. This takes the express module and creates the main router to allow users
*   to go to different web pages.
* */

router.get('/', (req, res, next) => {
    res.render('index', { page: 'Home' });
});

router.get('/about', (req, res, next) => {
    res.render('about', { page: 'About' });
});

router.get('/contact', (req, res, next) => {
    res.render('contact', { page: 'Contact Us' });
});

router.get('/lab', (req, res, next) => {
    res.render('lab', { page: 'Mobile Maker Lab' });
});

router.get('/action_page', (req, res, next) => {
    res.render('action_page', { page: 'Action Page' });
})

// this router performs a query to the mysql database, then populates
// the web page with the information then sends the
router.get('/team', async (req, res, next) => {
    const q = await conn("SELECT * FROM employees;");
    res.render('team', {page: 'Meet the Team', teamData: q});
});

module.exports = router;
