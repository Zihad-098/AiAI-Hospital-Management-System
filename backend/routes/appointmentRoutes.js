const express = require("express");

const router = express.Router();


const {

    addAppointment,

    getAppointments,

    deleteAppointment,

    updateAppointment

} = require("../controllers/appointmentController");




// Add Appointment

router.post(
    "/",
    addAppointment
);




// Get All Appointments

router.get(
    "/",
    getAppointments
);




// Delete Appointment

router.delete(
    "/:id",
    deleteAppointment
);




// Update Appointment

router.put(
    "/:id",
    updateAppointment
);



module.exports = router;