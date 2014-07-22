var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/success', function(req, res) {
	res.send("<h1>Success!</h1>")
})

var lastSubmission;

app.post("/formsubmit", function(req, res) {
	lastSumbission = req.body;

	res.redirect("/success");
})

var server = app.listen(8683, function() {
	console.log('Express server listening on port ' + server.address().port);
});
