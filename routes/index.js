const express = require('express');
const router = express.Router();
const conn = require('../database.js');
const bodyParser = require('body-parser');
const send = require('../mailer.js');
const NodeCache = require('node-cache');
const teamCache = new NodeCache();

/*
*   This is the main router file. This takes the express module and creates the main router to allow users
*   to go to different web pages.
* */

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.get('/', (req, res, next) => {
    res.render('index', { page: 'Home' });
});

router.post('/', urlencodedParser, async (req, res) => {
    if (`${req.body.email}` !== "undefined" || `${req.body.email}`.length <= 1){
        await conn(`INSERT IGNORE INTO news_emails (email) values (\"${req.body.email}\")`);
    }    
    res.render('index', { page: 'Home' });
})

router.get('/about', (req, res, next) => {
    res.render('about', { page: 'About' });
});

router.post('/about', urlencodedParser, async (req, res) => {
    if (`${req.body.email}` !== "undefined" || `${req.body.email}`.length <= 1){
        await conn(`INSERT IGNORE INTO news_emails (email) values (\"${req.body.email}\")`);
    }    
    res.render('about', { page: 'About' });
})

router.get('/contact', (req, res, next) => {
    res.render('contact', { page: 'Contact Us' });
});

router.post('/contact', urlencodedParser, async (req, res, next) => {
    var message = {
        from: '"GO STEM" <noahc214@hotmail.com>',
        to: 'noahc214@hotmail.com',
        subject: 'Contact Form Submission',
        template: 'contact',
        context: {
            fname: `${req.body.fname}`,
            lname: `${req.body.lname}`,
            email: `${req.body.email}`,
            school: `${req.body.school}`,
            county: `${req.body.county}`,
            message: `${req.body.subject}`
        }
    };
    await send(message);
    res.render('action_page', { page: 'Action Page' });
}) //

router.get('/lab', (req, res, next) => {
    res.render('lab', { page: 'Mobile Maker Lab' });
}); 

router.post('/lab', urlencodedParser, async (req, res) => {
    if (`${req.body.email}` !== "undefined" || `${req.body.email}`.length <= 1){
        await conn(`INSERT IGNORE INTO news_emails (email) values (\"${req.body.email}\")`);
    }
    
    res.render('lab', { page: 'Mobile Maker Lab' });
})

router.get('/action_page', (req, res) => {
    res.render('action_page', { page: 'Action Page' })
});

router.post('/action_page', urlencodedParser, async (req, res) => {
    if (`${req.body.email}` !== "undefined" || `${req.body.email}`.length <= 1){
        await conn(`INSERT IGNORE INTO news_emails (email) values (\"${req.body.email}\")`);
    }
    res.render('action_page', { page: 'Action Page' })
})

// this router performs a query to the mysql database, then populates
// the web page with the information then sends the
router.get('/team', async (req, res, next) => {
    if (teamCache.has('team')){
        res.render('team', {page: 'Meet the Team', teamData: teamCache.get('team')});
    }else{
        const q = await conn("SELECT * FROM employees;");
        teamCache.set('team', q, 900);
        res.render('team', {page: 'Meet the Team', teamData: q});
    }
    
});

router.post('/team', urlencodedParser, (req, res) => {
    if (`${req.body.email}` !== "undefined" || `${req.body.email}`.length <= 1){
        conn(`INSERT IGNORE INTO news_emails (email) values (\"${req.body.email}\")`);
    }    
    res.render('team', {page: 'Meet the Team'});
})



module.exports = router;
