
const express        = require('express');
const router         = express.Router();

const CONTROL_URI    = "../controllers/";

const ctrlAgency     = require("../controllers/agencies");
const ctrlCar        = require("../controllers/cars");
const ctrlRider      = require("../controllers/riders");
const ctrlRiderShift = require("../controllers/riderShifts");
const ctrlTeam       = require("../controllers/teams");
const ctrlUser       = require("../controllers/users");
const ctrlUserShift  = require("../controllers/userShifts");

router.route('/agencies')
.get(ctrlAgency.getAgency)
.post(ctrlAgency.createAgency);

router.route('/cars')
.get(ctrlCar.getCar)
.post(ctrlCar.createCar);

router.route('/riders')
.get(ctrlRider.getRider)
.post(ctrlRider.createRider);

router.route('/rider-shift')
.get(ctrlRiderShift.getRiderShift)
.post(ctrlRiderShift.createRiderShift);

router.route('/teams')
.get(ctrlTeam.getTeam)
.post(ctrlTeam.createTeam);

router.route('/users')
.get(ctrlUser.getUser)
.post(ctrlUser.createUser);

router.route('/user-shift')
.get(ctrlUserShift.getUserShift)
.post(ctrlUserShift.createUserShift);


module.exports = router;


