
const mongoose = require("mongoose");

var agency = {
	name: { type: String, required: true },
  	contact: { type: String, required: true },
  	total_emp: { type: Number, required: true },
  	status: { type: String, enum: ["Active", "InActive"], default: "Active" },
  	users: [{
    	type: mongoose.Schema.Types.ObjectId,
    	ref: "User",
  	}],
};


const AgencySchema = new mongoose.Schema(agency, { timestamps: true });

module.exports = mongoose.model("Agency", AgencySchema);
