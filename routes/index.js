var express = require('express');
//var router = express.Router();
var controller = require('../controller/index.controller');;
var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
var bodyParser = require('body-parser');
var urlencoded_body_parser = bodyParser.urlencoded({
    extended: true
});
app.use(bodyParser.json());
app.use(urlencoded_body_parser);

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.get('/recommand', controller.getRecommand);
app.post('/recommand', controller.createRecommand);
app.put('/recommand', controller.updateRecommand);
app.delete('/recommand', controller.deleteRecommand);

module.exports = app;
