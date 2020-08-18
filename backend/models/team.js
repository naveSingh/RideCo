
const mongoose = require("mongoose");


var team = {
	name: { type: String, required: true, trim: true },
  	desc: { type: String }
};


const TeamSchema = new mongoose.Schema(team, { timestamps: true });

module.exports   = mongoose.model("Team", TeamSchema);
