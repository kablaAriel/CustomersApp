const routes = require('express').Router();
const customers = require('./customers/customers');

routes.get('/', (req, res) => {
	console.log('/routes/index.js');
	res.render('index');
});

routes.get('/contactus', (req, res) => {
	res.render('contactus');
});

routes.get('/about', (req, res) => {
	res.render('about');
});

routes.use('/customers', customers);
//test from develop
module.exports = routes;
