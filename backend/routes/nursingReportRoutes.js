const express = require("express");

const router = express.Router();


console.log("Nursing Report route loaded");




const {

    addReport,

    getReports,

    deleteReport


} = require("../controllers/nursingReportController");







// Add Nursing Report

router.post(

    "/",

    addReport

);









// Get All Reports

router.get(

    "/",

    getReports

);









// Delete Report

router.delete(

    "/:id",

    deleteReport

);









module.exports = router;