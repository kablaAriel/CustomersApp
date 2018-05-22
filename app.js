const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const mongojs = require('mongojs');

const db = mongojs('customerapp', ['customers']);
const ObjectId = mongojs.ObjectId;
const routes = require('./routes/routes');

const port = 3000;
const app = express();

const logger = function (req, res, next) {
	console.log('logger...' + req.protocol + '://' + req.get('host') + req.originalUrl);
	next();
};

app.use(logger);

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set static path
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.listen(port, () => {
	console.log('server started on port: ' + port);
	//new commit to develop
});
