const express = require("express");

const router = express.Router();





const {

    addPatient,

    getPatients,

    getAssignedPatients,

    deletePatient,

    updatePatient,

    assignNurse

} = require("../controllers/patientController");









// Add Patient

router.post(

    "/",

    addPatient

);









// Get All Patients

router.get(

    "/",

    getPatients

);









// Get Assigned Patients

router.get(

    "/assigned/:nurseId",

    getAssignedPatients

);









// Delete Patient

router.delete(

    "/:id",

    deletePatient

);









// Update Patient

router.put(

    "/:id",

    updatePatient

);









// Assign Nurse To Patient

router.put(

    "/assign-nurse/:id",

    assignNurse

);









module.exports = router;