
const mongoose = require("mongoose");

var rider = {
	name: { type: String, required: true, trim: true, minlength: 3 },
  	mobile: {
    	type: String,
    	// validate: {
	    // 	validator: function (v) {
	    //     	return /\d{3}-\d{3}-\d{4}/.test(v);
	    //   	}
    	// },
    	required: true,
  	},
  	address: { type: String, required: true },
  	status: { type: String, enum: ["Active", "InActive"], default: "Active" },
  	shifts: [{
    	type: mongoose.Schema.Types.ObjectId,
    	ref: "RiderShifts"
  	}]
};



const RiderSchema = new mongoose.Schema(rider, { timestamps: true });


module.exports = mongoose.model("Rider", RiderSchema);
