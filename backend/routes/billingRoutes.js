const express = require("express");

const router = express.Router();


console.log("Billing route loaded");



const {

    addBilling,

    getBillings,

    updateBilling,

    deleteBilling

} = require("../controllers/billingController");





router.get(
    "/test",
    (req,res)=>{
        res.send("Billing route working");
    }
);





// Create Billing

router.post(
    "/",
    addBilling
);



// Get All Billing

router.get(
    "/",
    getBillings
);



// Update Billing

router.put(
    "/:id",
    updateBilling
);



// Delete Billing

router.delete(
    "/:id",
    deleteBilling
);



module.exports = router;