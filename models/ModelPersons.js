var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/express-crud-db');

var schema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	address: String,
	email: String,
	mobile: String,
	info: String,
	imageUrl: String
});

module.exports = mongoose.model('Persons', schema);
