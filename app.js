var express = require("express"),  
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());


var SensorCtrl = require('./controllers/sensor');

var router = express.Router();

router.get('/', function(req, res) {  
   res.send("Hello World!");
});


router.route('/sensor')  
  .get(SensorCtrl.findAllSensor)
  .post(SensorCtrl.addSensor);

router.route('/sensor/:id')  
  .get(SensorCtrl.findById)
  .put(SensorCtrl.updateSensor)
  .delete(SensorCtrl.deleteSensor);

app.use(router);

mongoose.connect('mongodb://localhost/Sensor', function(err, res) {  
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
  });
});


