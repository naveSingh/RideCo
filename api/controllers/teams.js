

const express = require("express");
const Team    = require("../../backend/models/team");


const getTeam = (req, res) => {
    Team.find()
    .then((teams) => res.json(teams))
    .catch((err) => res.status(400).json("Error:" + err));
};

const createTeam = (req, res) => {

    const newTeam = new Team({
        name : req.body.name,
        desc : req.body.desc,
    });

    newTeam.save()
    .then(() => res.json("Team added!"))
    .catch((err) => res.status(400).json("Error:" + err));
};

module.exports = {
    getTeam,
    createTeam
};
