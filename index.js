
const express      = require("express");
const cors         = require("cors");
const path         = require("path");
const bodyParser   = require("body-parser");
// const routes    = require("./backend/routes/rides");
const apiRoutes    = require("./api/routes/rides");
const app          = express();
const port         = process.env.PORT || 5000;

require("dotenv").config();
require("./backend/models/db");

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());


app.use('/api', apiRoutes);



app.use((req, res, next) => {
    req.header('Access-Control-Allow-Origin', '*');
    req.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept,Authorization');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT,PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept,Authorization');
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});


// Catch 404 and forward to error handler
app.use((req, res, next) => {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// Error Handlers -----

// development error handler
if (app.get('env') === 'development') {
	app.use((err, req, res, next) => {
		res.status(err.status || 500);
		res.json({
			message: err.message,
			error: err
		});
	});
}

// production error handler
app.use((err, req, res, next) => {
	res.status(err.status || 500);
	res.json({
		message: err.message,
		error: err
	});
});

module.exports = app;





