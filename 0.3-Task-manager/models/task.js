const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: [true, "must provide a name"],
		maxLength: [100, "task can not have more than 15 chars"],
	},
	completed: {
		type: Boolean,
		default: false,
	},
});

const Tasks = mongoose.model("tasks", taskSchema);
module.exports = Tasks;
