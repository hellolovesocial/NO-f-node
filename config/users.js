var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('----users---')
  res.render('user', { title: 'Flower' });
  next();
});

module.exports = router;
