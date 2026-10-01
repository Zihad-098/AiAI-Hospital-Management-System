const express = require("express");

const router = express.Router();


console.log("Medication route loaded");



const {

    addMedication,

    getMedications,

    deleteMedication


} = require("../controllers/medicationController");





// Add Medication

router.post(

    "/",

    addMedication

);





// Get Medication

router.get(

    "/",

    getMedications

);





// Delete Medication

router.delete(

    "/:id",

    deleteMedication

);





module.exports = router;