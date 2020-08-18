

const express   = require("express");
const UserShift = require("../../backend/models/userShift");


const getUserShift = (req, res) => {
    UserShift.find()
    .then((shifts) => res.json(shifts))
    .catch((err) => res.status(400).json("Error:" + err));
};

const createUserShift = (req, res) => {

    const newuserShifts = new userShifts({
        date  : Date(req.body.shift_date),
        start : req.body.start,
        end   : req.body.end
    });

    newuserShifts.save()
    .then(() => res.json("Shifts added!"))
    .catch((err) => res.status(400).json("Error:" + err));
};

module.exports = {
    getUserShift,
    createUserShift
};
