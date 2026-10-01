const express = require("express");

const router = express.Router();



const {

    addMedicalRecord,

    getMedicalRecords,

    deleteMedicalRecord,

    updateMedicalRecord

} = require("../controllers/medicalRecordController");





// Add Medical Record

router.post(
    "/",
    addMedicalRecord
);




// Get All Medical Records

router.get(
    "/",
    getMedicalRecords
);




// Delete Medical Record

router.delete(
    "/:id",
    deleteMedicalRecord
);




// Update Medical Record

router.put(
    "/:id",
    updateMedicalRecord
);




module.exports = router;