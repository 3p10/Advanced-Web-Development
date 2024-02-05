"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 3000;
app.use(express_1.default.json());
var vehicleList = [];
app.get('/hello', function (req, res) {
    res.send('Hello world');
});
app.post('/vehicle/add', function (req, res) {
    try {
        if (req.body.bodyType && req.body.wheelCount) {
            var newCar = req.body;
            vehicleList.push(newCar);
        }
        else if (req.body.draft) {
            var newBoat = req.body;
            vehicleList.push(newBoat);
        }
        else if (req.body.wingspan) {
            var newPlane = req.body;
            vehicleList.push(newPlane);
        }
        else {
            var newVehicle = req.body;
            vehicleList.push(newVehicle);
        }
        console.log(vehicleList);
        res.status(201).send('Vehicle added');
    }
    catch (error) {
        console.log(error);
    }
});
app.get('/vehicle/search/:model', function (req, res) {
    try {
        vehicleList.forEach(function (vehicle) {
            if (vehicle.model === req.params.model) {
                return res.send(vehicle);
            }
        });
        return res.status(404).send();
    }
    catch (error) {
        console.log(error);
    }
});
app.listen(port);
