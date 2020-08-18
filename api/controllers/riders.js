

const express = require("express");
const Rider   = require("../../backend/models/rider");

const getRider = (req, res) => {
    Rider.find()
    .then((riders) => res.json(riders))
    .catch((err) => res.status(400).json("Error:" + err));
};

const createRider = (req, res) => {

    const newRider = new Rider({
        name    : req.body.name,
        mobile  : req.body.mobile,
        address : req.body.address,
        status  : req.body.status,
        shifts  : req.body._id
    });

    newRider.save(function (error) {
        if (!error) {
            Rider.find({})
            .populate("shifts")
            .exec(function (error, riders) {
                console.log(JSON.stringify(riders, null, "\t"));
            });
        }
    })
    .then(() => res.json("Rider added!"))
    .catch((err) => res.status(400).json("Error:" + err));

        
};

module.exports = {
    getRider,
    createRider
};

