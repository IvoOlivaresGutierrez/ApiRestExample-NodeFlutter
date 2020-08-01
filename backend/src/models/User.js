const { Schema, model } = require("mongoose");

const userSchema = new Schema(
	{
		firstName: String,
		lastName: String,
		avatar: String,
	},
	{ timestamps: true }
);

module.exports = model("User", userSchema);
