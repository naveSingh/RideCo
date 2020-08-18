

const mongoose = require("mongoose");


var userShift = {
	date: { type: Date, required: true },
  	start: { type: String, required: true },
  	end: { type: String, required: true },
  	desc: { type: String}
};


const UserShiftSchema = new mongoose.Schema(userShift, { timestamps: true });

module.exports = mongoose.model("UserShifts", UserShiftSchema);
