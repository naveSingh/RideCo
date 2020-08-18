
const mongoose = require('mongoose');

const uri = process.env.ATLAS_URI;

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(uri, { dbName: "marbleDB" });

mongoose.connection.once("open", () => {
	console.log("MongoDb database connection established successfully");
});

mongoose.connection.on("error", err => {
	console.log(`Mongoose connection error: ${err}`);
});

mongoose.connection.on("disconnected", () => {
	console.log("Mongoose disconnected.");
});


