var dogecoin = require('node-dogecoin')()

dogecoin.auth('myusername', 'mypassword')

var express = require('express');
var app = express();

app.get('/', function(req, res){

  if(req.query.address)
  {
    dogecoin.sendToAddress(req.query.address, 1, "Test comment", "Test comment to")
  }

  res.send('Finished');
});

app.listen(3000);
