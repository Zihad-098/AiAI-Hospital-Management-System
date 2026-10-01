const express = require("express");

const router = express.Router();


const {

    addDoctor,

    getDoctors,

    deleteDoctor,

    updateDoctor

} = require("../controllers/doctorController");




// Add Doctor
router.post(
    "/",
    addDoctor
);




// Get All Doctors
router.get(
    "/",
    getDoctors
);




// Delete Doctor
router.delete(
    "/:id",
    deleteDoctor
);




// Update Doctor
router.put(
    "/:id",
    updateDoctor
);



module.exports = router;