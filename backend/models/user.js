
const mongoose = require("mongoose");


var user = {
	emp_id: { type: String, required: true },
  	full_name: { type: String, required: true, trim: true, minlength: 3 },
  	mobile: {
    	type: String,
	    // validate: {
		   //  validator: function (v) {
		   //  	return /\d{3}-\d{3}-\d{4}/.test(v);
		   //  }
	    // },
    	required: true,
  	},
  	address: { type: String, required: true },
  	status: { type: String, enum: ["Active", "InActive"], default: "Active" },
  	transport_type: { type: String, enum: ["Self", "Van"], default: "Van" },
  	amount: { type: Number, required: true },
  	shifts: [{
    	type: mongoose.Schema.Types.ObjectId,
    	ref: "UserShifts",
  	}],
  	teams: [{
    	type: mongoose.Schema.Types.ObjectId,
    	ref: "Team",
  	}]
};


const UserSchema = new mongoose.Schema(user, { timestamps: true });

module.exports   = mongoose.model("User", UserSchema);
