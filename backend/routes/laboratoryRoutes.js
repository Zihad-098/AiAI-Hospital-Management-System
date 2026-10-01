const express = require("express");

const router = express.Router();


console.log("Laboratory route loaded");





const {

    addLaboratory,

    getLaboratories,

    updateLaboratory,

    deleteLaboratory

} = require("../controllers/laboratoryController");









// Add Laboratory Report

router.post(

    "/",

    addLaboratory

);









// Get All Laboratory Reports

router.get(

    "/",

    getLaboratories

);









// Update Laboratory Report

router.put(

    "/:id",

    updateLaboratory

);









// Delete Laboratory Report

router.delete(

    "/:id",

    deleteLaboratory

);









module.exports = router;