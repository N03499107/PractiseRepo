var express = require('express')
var app = express.Router();

module.exports=app.get('/', function (req, res) {
  res.send('hello world')
})