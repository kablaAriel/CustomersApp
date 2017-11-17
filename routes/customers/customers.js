const customers = require('express').Router();
const all = require('./all');

const mongojs = require('mongojs');

const db = mongojs('customerapp', ['customers']);
const ObjectId = mongojs.ObjectId;

customers.get('/', all); // httpsd localhost:3000/customers

customers.get('/:id', (req, res) => {
	console.log(req.params.id);
	const _id = String(req.params.id);
	db.customers.find({_id: ObjectId(_id)}, (err, result) => {
		if (err) {
			console.log(err);
			res.redirect('/customers');
		} else {
			console.log(result);
			res.send(result);
		}
	});
});

customers.post('/add', (req, res) => {
	const newcustomer = {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email
	};
	db.customers.insert(newcustomer, (err, result) => {
		if (err) {
			console.log(err);
		}
		res.redirect('/customers');
	});

	console.log(newcustomer);
});

customers.delete('/delete/:id', (req, res) => {
	console.log(req.params.id);
	db.customers.remove({_id: ObjectId(req.params.id)}, (err, result) => {
		if (err) {
			console.log(err);
		}
		res.redirect('/customers');
	});
});

customers.post('/edit', (req, res) => {
	const customer = {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email
	};
    // Collection.save({_id:"abc", user:"David"},{w:1}, callback)

	db.customers.save(customer, (err, result) => {
		if (err) {
			console.log(err);
		}
		res.redirect('/customers');
	});

	console.log(newcustomer);
});

module.exports = customers;
