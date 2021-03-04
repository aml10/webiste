const express = require('express')
const router = express.Router()
router.use(express.json())
const nodemailer = require("nodemailer")


router.get('/', (req, res, next) => {
    res.render('home', req.context)
})

router.get('/aboutus', (req, res, next) => {
    res.render('aboutus', req.context)
})

router.get('/services', (req, res, next) => {
    res.render('services', req.context)
})

router.get('/projects', (req, res, next) => {
    res.render('projects', req.context)
})

router.get('/contact', (req, res, next) => {
    res.render('contact', req.context)
})

router.post('/contact', (req, res) => {
    console.log(req.body)
  
    const transporter = nodemailer.createTransport({
      host: 'imap.hostinger.com',
      port:993,
      secure: true,
      auth: {
        user: 'info@ultimateengineeringplc.com',
        pass:'infOultimate2020'
      },
      tls:{
    rejectUnauthorized:true
}
    })
  
    const mailOptions = {
      from: req.body.email,
      to: 'info@ultimateengineeringplc.com',
      subject: `Message from ${req.body.email}: ${req.body.subject}`,
      text: req.body.message
    }
  
    transporter.sendMail(mailOptions,(error, info) =>{
      if(error){
        console.log(error);
        res.send('error');
      }else{
        console.log('Email sent: ' + info.response);
        res.send(success)
      }
    })
  })

module.exports = router