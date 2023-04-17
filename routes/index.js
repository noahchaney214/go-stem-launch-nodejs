const express = require('express');
const router = express.Router();

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

router.get('/team', (req, res, next) => {
    res.render('team', { page: 'Meet the Team' });
});

module.exports = router;
