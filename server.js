var express = require('express');
var wine = require('./routes/wines.js');
var app = express();

app.configure(function(){
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
});

app.get('/wines', wine.findAll);
app.get('/wines/:id', wine.findById);
app.post('/wines/:id', wine.addWine);
app.put('/wines/:id', wine.updateWine);
app.delete('/wines/:id', wine.deleteWine)

app.listen(3000);
console.log('Listening on port 3000...');