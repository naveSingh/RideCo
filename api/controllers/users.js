

const express = require("express");
const User    = require("../../backend/models/user");


const getUser = (req, res) => {
    User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error:" + err));
};

const createUser = (req, res) => {

    const newUser = new User({
        emp_id         : req.body.emp_id,
        full_name      : req.body.full_name,
        mobile         : req.body.mobile,
        address        : req.body.address,
        status         : req.body.status,
        transport_type : req.body.transport_type,
        amount         : req.body.amount,
        shifts         : req.body.shift_id,
        teams          : req.body.team_id
    });

    newUser.save(function (error) {
        if (!error) {
            User.find({})
            .populate("shifts")
            .populate("teams")
            .exec(function (error, users) {
              console.log(JSON.stringify(users, null, "\t"));
            });
        }
    })
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error:" + err));
    
};

module.exports = {
    getUser,
    createUser
};


