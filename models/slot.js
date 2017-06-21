var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var slotSchema = new Schema({
	startTime: Date,
	endTime: Date,
	owner: {
	   id: {
	    type: Schema.Types.ObjectId,
	 	ref: 'user'
	   },
	   username: String
	}
});

module.exports = mongoose.model('slot', slotSchema);
