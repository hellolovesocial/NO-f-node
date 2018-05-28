var express = require('express');
var app = express.Router();

console.log('----arrived router.js-----')

app.use(function (req, res, next) {
  console.log('----books----')
  next();
});

app.get('/:id', function (req, res, next) {
  console.log('----books/:id-----')
  next();
});

module.exports = app;