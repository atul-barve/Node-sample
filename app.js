var express = require('express');
var app = express();

var datastore = require('nedb');
var db = new datastore();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false});

// app.get('/', function(request, response) {
// 	response.sendFile(__dirname + "/Login/index.html");
// });

app.use("/", express.static("Login"));
app.use("/register", express.static("Register"));


app.post('/login', parseUrlencoded, function(request, response, next) {
	console.log(request.body.username);
});

app.listen(8080, function() {
	console.log("Listing on port 8080");
});