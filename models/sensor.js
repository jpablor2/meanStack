var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var sensorSchema=new Schema({
//module.exports = new mongoose.Schema({
	lon1:{type: String},
    lat1:{type: String},
    
    lon2:{type: String},
    lat2:{type: String},
    
    lon3:{type: String},
    lat3:{type: String},
    
    lon4:{type: String},
    lat4:{type: String},
    
    radiacion:{type: String},
    version:{type:Number}
});

module.exports= mongoose.model('Sensor',sensorSchema);

