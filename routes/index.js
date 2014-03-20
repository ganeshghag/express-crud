var Persons = require('../models/ModelPersons');

exports.index = function(req, res){
	Persons.find({},function(err, persons){
		res.render('index', { title: 'Express', persons: persons });
	})
};

exports.create = function(req, res){
	Persons.create({
	firstName: 'FirstName',
	lastName: 'LastName',
	address: 'Mt. Everest, Nepal',
	email: 'myemail@cool.com',
	mobile: '9920345456',
	info: 'Trouble Maker',
	imageUrl: 'http://some'
	});
	
	res.redirect('/');
};

exports.details = function(req, res){
	console.log('inside details route....'+req.params.id);
	Persons.find({'_id':req.params.id},function(err, persons){
		res.render('edit', { title: 'Express CRUD', person: persons[0] });
	});
};

exports.update = function(req, res){
	var person = { 
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		address: req.body.address,
		email: req.body.email,
		info: req.body.info
	}
	
	Persons.update({'_id':req.body.id},{ $set: person},{ multi: true },function onupdate(err, num){
		console.log('rows updated:'+num);
	});
	res.redirect('/');
};

exports.delete = function(req, res){
	Persons.remove({},function onremove(err){
		console.log('removed all' + err);
	});
	res.redirect('/');
};