var express		= require('express');
var app			= express();
var port		= 1337;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.sendfile('./public/views/index.html');
});

app.listen(port);
console.log('Listening to port: ' + port);