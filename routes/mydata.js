var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'YogaNarasimhaReddy Peddireddy' });
  res.render('index', { title: 'I have a Sports bike' });
  
});

module.exports = router;
