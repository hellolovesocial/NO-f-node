var express = require('express');
var app = express.Router();

console.log('----arrived router.js-----');

app.use('/', function (req, res, next) {
  console.log('----flower----');
  res.send('welcome to flower');
  rse.end();
});

app.use('/users', function (req, res, next) {
  console.log('----users----');
  res.send('welcome to users page');
  rse.end();
});

app.get('/users/:id', function (req, res, next) {
  console.log('----users/:id-----');
  res.send('welcome to your page');
  rse.end();
});

module.exports = app;
