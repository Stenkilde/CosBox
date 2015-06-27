var mongoose		= require('mongoose');
var Schema			= mongoose.Schema;

var UploadSchema	= new Schema({
	name: String
});

module.exports = mongoose.model('Upload', UploadSchema);