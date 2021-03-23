var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const creds = require('../config/config');

var transport = {
  host: 'smtp.gmail.com',
  direct: true,
  port: 25,
  service: 'gmail',
  secure: false,
  requireTLS: true,
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

const masterMail = 'puentemail06@gmail.com'

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var modal = req.body.modal
  var explanation = req.body.explanation;
  var content = ` name: ${name} \n email: ${email} \n Phone Modal: ${modal} \n Comment: ${explanation}`

  var mail = {
    from: masterMail,
    to: 'engineering@wearlog.com',  //Change to email address that you want to receive messages on
    subject: 'Wearlog Tester Application',
    text: content
  }

  console.log('Mail : ', mail);

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

module.exports = router;
