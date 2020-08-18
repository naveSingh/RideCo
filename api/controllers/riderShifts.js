

const express    = require("express");
const RiderShift = require("../../backend/models/riderShift");


const getRiderShift = (req, res) => {
    RiderShift.find()
    .then((riderShifts) => res.json(riderShifts))
    .catch((err) => res.status(400).json("Error:" + err));
};

const createRiderShift = (req, res) => {

    const newRiderShifts = new riderShifts({
        users      : req.body.user_id,
        cars       : req.body.car_id,
        seats_left : Number(req.body.seats_left),
        status     : req.body.status
    });

    newRiderShifts.save(function (error) {
        if (!error) {
            riderShifts
            .find({})
            .populate("users")
            .populate("shifts")
            .exec(function (error, riderShifts) {
                console.log(JSON.stringify(riderShifts, null, "\t"));
            });
        }
    })
    .then(() => res.json("Rider Shifts added!"))
    .catch((err) => res.status(400).json("Error:" + err));
    
};

module.exports = {
    getRiderShift,
    createRiderShift
};
