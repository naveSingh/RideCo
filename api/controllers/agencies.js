

const express = require("express");
const Agency  = require("../../backend/models/agency");

const getAgency = (req, res) => {
    Agency.find()
    .then((agencies) => res.json(agencies))
    .catch((err) => res.status(400).json("Error: " + err));
};

const createAgency = (req, res) => {

    const newAgency = new Agency({
        name      : req.body.name,
        contact   : req.body.contact,
        total_emp : req.body.total_emp,
        status    : req.body.status
    });
    

    Agency.updateOne(
        { name: req.body.name, contact: req.body.contact, total_emp: req.body.total_emp },
        { newAgency },
        { upsert: true}
    )
    .then((err, res) => { 
        if (err) return err;
        else res.json("Agency modified/added!"); 
    })
    .catch((err) => res.status(400).json("Error:" + err));
    
};


module.exports = {
    getAgency,
    createAgency
};
