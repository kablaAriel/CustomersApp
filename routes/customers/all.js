
const mongojs = require('mongojs');

const db = mongojs('customerapp', ['customers']);
const ObjectId = mongojs.ObjectId;

module.exports = (req, res) => {
	db.customers.find((err, docs) => {
		res.render('customers', {
			title: 'customers',
			customers: docs
		});
	});
};
