var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Armando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: "Mini Messageboard", messages: messages});
});

router.get('/new', function(req, res, next) {
  res.render('form')
});

router.post('/new', function(req,res) {

  var store = {

    text: req.body.message,
    user: req.body.authorname,
    added: new Date()
  }

  messages.push(store)

  res.redirect('/')


})


module.exports = router;
