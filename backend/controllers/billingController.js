const Billing = require("../models/Billing");




// Create Billing

const addBilling = async(req,res)=>{


    try{


        const bill = await Billing.create(

            req.body

        );


        res.status(201).json({

            message:"Billing created successfully",

            bill

        });



    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};








// Get All Billing

const getBillings = async(req,res)=>{


    try{


        const bills = await Billing.find()

        .populate("patient");



        res.json(bills);



    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};








// Update Billing

const updateBilling = async(req,res)=>{


    try{


        const bill = await Billing.findByIdAndUpdate(

            req.params.id,

            req.body,

            {

                new:true

            }

        );


        res.json({

            message:"Billing updated successfully",

            bill

        });



    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};








// Delete Billing

const deleteBilling = async(req,res)=>{


    try{


        await Billing.findByIdAndDelete(

            req.params.id

        );


        res.json({

            message:"Billing deleted successfully"

        });



    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};







module.exports = {


    addBilling,

    getBillings,

    updateBilling,

    deleteBilling


};