const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/baseexemplo', {useNewUrlParser: true}, (err) => {
	if(err) console.log('Error', err)
	else console.log('Mongoose conectado no mongoDB')
});