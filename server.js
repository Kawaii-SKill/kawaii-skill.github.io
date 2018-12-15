'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var gcm = require('node-gcm');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.post('/send_notification', (req, res) => {
  if (!req.body) {
    res.status(400);
  }
  var message = new gcm.Message();
  var temp = req.body.endpoint.split('/');
  var regTokens = [temp[temp.length - 1]];
  var sender = new gcm.Sender('AIzaSyCjrU5SqotSg2ybDLK_7rMMt9Rv0dMusvY');
  sender.send(message, { registrationTokens: regTokens }, (error, response) => {
  	if (error) {
      console.error(error);
      res.status(400);
    }
  	else {
      console.log(response);
      res.status(200);
    }
  });
});
app.listen(process.env.PORT || 3000, () => {
  console.log('Local Server : http://localhost:3000');
});