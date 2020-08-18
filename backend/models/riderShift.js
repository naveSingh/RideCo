
const mongoose = require("mongoose");


var riderShift = {
	users: [{
    	type: mongoose.Schema.Types.ObjectId,
    	ref: "User",
  	}],
  	cars: [{
    	type: mongoose.Schema.Types.ObjectId,
    	ref: "Car",
  	}],

  	seats_left: { type: Number, required: true },
  	status: { type: String, enum: ["Started", "Completed"], default: null},
};



const riderShiftSchema = new mongoose.Schema(riderShift, { timestamps: true });

module.exports = mongoose.model("riderShifts", riderShiftSchema);
