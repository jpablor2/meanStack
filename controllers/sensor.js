var model = require('../models/sensor');
var mongoose = require('mongoose');
var Sensor = mongoose.model('Sensor');

//GET - Return all sensors in the DB
exports.findAllSensor = function (req, res) {
    Sensor.find(function (err, sensor) {
        if (err) res.send(500, err.message);

        console.log('GET /sensor')
        res.status(200).jsonp(sensor);
    });
};

//GET - Return a Sensor with specified ID
exports.findById = function (req, res) {
    Sensor.findById(req.params._id, function (err, sensor) {
        if (err) return res.send(500, err.message);

        console.log('GET /sensor/' + req.params._id);
        res.status(200).jsonp(sensor);
    });
};

exports.findByVersion = function (req, res) {


    Sensor
        .where('version').equals(req.params.version)
        .exec(function (err, sensor) {
            if (err) return res.send(500, err.message);
            console.log('GET /sensor/' + req.params.version);
            res.status(200).jsonp(sensor);
        });
};

//POST - Insert a new Sensor in the DB
exports.addSensor = function (req, res) {
    console.log('POST');
    console.log(req.body.volt);

    var sensor = new Sensor({

        lon1: req.body.lon1,
        lat1: req.body.lat1,
        lon2: req.body.lon2,
        lat2: req.body.lat2,
        lon3: req.body.lon3,
        lat3: req.body.lat3,
        lon4: req.body.lon4,
        lat4: req.body.lat4,
        radiacion: req.body.radiacion,
        version: req.body.version
    });

    sensor.save(function (err, sensor) {
        if (err) return res.status(500).send(err.message);
        res.status(200).jsonp(sensor);
    });
};

//PUT - Update a register already exists
exports.updateSensor = function (req, res) {
    Sensor.findById(req.params.id, function (err, sensor) {
        sensor.lon1 = req.body.lon1,
            sensor.lat1 = req.body.lat1,
            sensor.lon2 = req.body.lon2,
            sensor.lat2 = req.body.lat2,
            sensor.lon3 = req.body.lon3,
            sensor.lat3 = req.body.lat3,
            sensor.lon4 = req.body.lon4,
            sensor.lat4 = req.body.lat4,
            sensor.radiacion = req.body.radiacion,
            sensor.version = req.body.version
        sensor.save(function (err) {
            if (err) return res.status(500).send(err.message);
            res.status(200).jsonp(sensor);
        });
    });
};
//DELETE - Delete a TVShow with specified ID
exports.deleteSensor = function (req, res) {
    Sensor.findById(req.params._id, function (err, sensor) {
        sensor.remove(function (err) {
            if (err) return res.status(500).send(err.message);
            res.status(200).send();
        })
    });
};
exports.restart = function (req, res) {
    Sensor.remove({}, function (err, sensor) {
        if (err)
            return res.send(500, err.message);
        else
            res.status(200).jsonp({
                status: 'success'
            });
    });
};
