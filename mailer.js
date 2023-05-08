const nodemailer = require('nodemailer');
const path = require('path');
const hbs = require('nodemailer-express-handlebars')

var transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'noahc214@hotmail.com',
        pass: 'Quick5ilver_'
    }
});

var handleBarOptions = {
    viewEngine: {
        partialsDir: path.resolve('./email_templates/'),
        defaultLayout: false
    },

    viewPath: path.resolve('./email_templates/')
}

transporter.use('compile', hbs(handleBarOptions))


module.exports = function send(mail) {
    transporter.sendMail(mail, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
