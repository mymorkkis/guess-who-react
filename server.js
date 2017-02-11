var express = require('express');
var app = express();
var path = require('path')
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use(express.static('client/build'));

app.listen(port);

console.log("Server started....")