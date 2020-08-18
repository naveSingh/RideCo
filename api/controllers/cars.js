

const express = require("express");
const Car     = require("../../backend/models/car");

const getCar = (req, res) => {
	Car.find()
    .then((cars) => res.json(cars))
    .catch((err) => res.status(400).json("Error:" + err));
};

const createCar = (req, res) => {

	const newCar = new Car({
  		name        : req.body.name,
    	number      : req.body.number,
    	total_seats : req.body.total_seats
  	});

  	newCar.save()
    .then(() => res.json("Car added!"))
    .catch((err) => res.status(400).json("Error:" + err));
};


module.exports = {
    getCar,
    createCar
};
