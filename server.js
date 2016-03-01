var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/build/index.html');
});

app.use(function(req, res) {
  res.status(404).send('could not find file');
});

var server = app.listen(port, function() {
  console.log('Server up on port ' + port + '.');
});
