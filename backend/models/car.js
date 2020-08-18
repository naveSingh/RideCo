

const mongoose = require("mongoose");

var car = {
	name: { type: String, required: true, trim: true },
  	number: { type: String, required: true },
  	total_seats: { type: Number, required: true }
};


const CarSchema = new mongoose.Schema(car, { timestamps: true });

module.exports  = mongoose.model("Car", CarSchema);
