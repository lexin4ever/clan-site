var express = require('express'),
	app = express();


// development
app.use(express.static(__dirname + "/src", { maxAge: false }));
app.configure('production', function(){
	// production
	app.use(express.static( __dirname + "/build", { maxAge: 3600 }) );
});

//require('./fixtures/wat')(app);	// WAT fixture

require('http').createServer(app).listen(8080);