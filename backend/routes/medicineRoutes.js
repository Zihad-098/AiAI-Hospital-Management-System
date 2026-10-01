const express = require("express");

const router = express.Router();


console.log("Medicine route loaded");




const {

    addMedicine,

    getMedicines,

    updateMedicine,

    deleteMedicine

} = require("../controllers/medicineController");









// Add Medicine

router.post(

    "/",

    addMedicine

);









// Get Medicines

router.get(

    "/",

    getMedicines

);









// Update Medicine

router.put(

    "/:id",

    updateMedicine

);









// Delete Medicine

router.delete(

    "/:id",

    deleteMedicine

);









module.exports = router;