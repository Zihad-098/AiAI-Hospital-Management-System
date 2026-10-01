const express = require("express");

const router = express.Router();


console.log("Vital route loaded");



const {

    addVital,

    getVitals,

    deleteVital

} = require("../controllers/vitalController");







// Add Vital

router.post(

    "/",

    addVital

);







// Get Vitals

router.get(

    "/",

    getVitals

);







// Delete Vital

router.delete(

    "/:id",

    deleteVital

);







module.exports = router;