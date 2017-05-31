var express = require('express');
var app = express();

//routes
app.get('/',function(req, res){
	res.send('Hello World!');
});

// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log('listening on localhost:'+ port);