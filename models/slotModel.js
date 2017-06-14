var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var slotSchema = new Schema({
	'startTime' : Date,
	'endTime' : Date,
	'owner' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'user'
	}
});

module.exports = mongoose.model('slot', slotSchema);
